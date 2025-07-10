import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateWishlistDto } from "./dto/create-wishlist.dto";
import { UpdateWishlistDto } from "./dto/update-wishlist.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Wishlist } from "./schema/wishlist.schema";
import { Model } from "mongoose";

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist.name) private readonly wishlistModel: Model<Wishlist>
  ) {}

  async create(createWishlistDto: CreateWishlistDto, user: any) {
    try {
      const data = await this.wishlistModel.create({
        propertyId: createWishlistDto.propertyId,
        userId: user._id,
      });
      return { message: "Wishlist Add Successfully", data };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException("Something was wrong");
    }
  }

  async findAll(user: any) {
    const data = await this.wishlistModel
      .find({ userId: user._id })
      .populate("propertyId");
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} wishlist`;
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return `This action updates a #${id} wishlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} wishlist`;
  }
}
