import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcryptjs";
import { Model } from "mongoose";
import { DeleteImage } from "src/utils/DeleteImage";
import { v4 as uuidv4 } from "uuid";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { LoginDto } from "./dto/login.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { RefreshToken } from "./schema/refresh-token.schema";
import { User } from "./schema/user.schema";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,

    @InjectModel(RefreshToken.name)
    private RefreshTokenModel: Model<RefreshToken>,

    private readonly jwtService: JwtService
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    try {
      const { name, email, password } = createAuthDto;
      const emailInUse = await this.UserModel.findOne({
        email,
      });
      if (emailInUse) {
        throw new BadRequestException("User Already Registered");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.UserModel.create({
        name,
        email,
        password: hashedPassword,
      });
      const token = await this.generateUserToken(user._id);
      return {
        message: "Signup success",
        data: {
          ...token,
          name: user.name,
          role: user.role,
          _id: user._id,
          image: user.image,
        },
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException("Something was wrong");
    }
  }

  async loginUser(loginDto: LoginDto) {
    const { email, password } = loginDto;
    // check user
    const user = await this.UserModel.findOne({ email });
    if (!user) throw new UnauthorizedException("Wrong credentials");
    // check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new UnauthorizedException("Wrong credentials");

    const token = await this.generateUserToken(user._id);
    return {
      message: "login success",
      data: {
        ...token,
        name: user.name,
        role: user.role,
        _id: user._id,
        image: user.image,
      },
    };
  }

  // generate jwt and refresh token
  async generateUserToken(userId: any) {
    const jwtToken = this.jwtService.sign(
      { user: userId },
      { expiresIn: "2days" }
    );
    const refreshToken = uuidv4();
    await this.storeRefreshToken(refreshToken, userId);

    return {
      jwtToken,
      refreshToken,
    };
  }
  // store refresh token
  async storeRefreshToken(token: string, userId: any) {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 4);

    await this.RefreshTokenModel.create({ token, userId, expireDate });
  }

  // validate refresh token

  async validateRefreshToken(refreshToken: RefreshTokenDto) {
    const token = await this.RefreshTokenModel.findOneAndDelete({
      token: refreshToken.RefreshToken,
      expireDate: { $gte: new Date() },
    });
    if (!token) {
      throw new UnauthorizedException("user not valid");
    }
    return this.generateUserToken(token.userId);
  }

  // all user get
  async allUser() {
    const data = await this.UserModel.find({});
    return data;
  }
  // one user
  async oneUser(id: string) {
    try {
      const data = await this.UserModel.findById(id);
      return data;
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException("Something was wrong");
    }
  }
  // delete user
  async remove(id: string) {
    try {
      const data = await this.UserModel.findById(id);
      if (!data) {
        throw new NotFoundException("User not found");
      }
      await DeleteImage(data.image);

      const deletedUser = await this.UserModel.findOneAndDelete({ _id: id });
      return { message: "user remove successfully", data: deletedUser };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException("Something was wrong");
    }
  }
  // update user info
  async update(id: string, updateAuthDto: UpdateAuthDto) {
    const { name, number, address, image, newImage } = updateAuthDto;

    if (newImage) {
      DeleteImage(image);
      console.log("DeleteImage", updateAuthDto);
    }

    const updateDto = { name, number, address, image: newImage ?? image };
    const data = await this.UserModel.findByIdAndUpdate(
      id,
      updateDto,
      { new: true, runValidators: true } // `new: true` returns updated doc
    );

    if (!data) {
      throw new NotFoundException("Property not found");
    }

    return { message: "Updated successfully", data };
  }
}
