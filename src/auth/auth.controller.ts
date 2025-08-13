import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { LoginDto } from "./dto/login.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { AdminAuthGuards } from "src/guards/admin.auth.guards";
import { AuthGuards } from "src/guards/auth.guards";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post("login")
  loginUser(@Body() loginDto: LoginDto) {
    return this.authService.loginUser(loginDto);
  }
  @Post("refresh")
  validateRefreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.validateRefreshToken(refreshTokenDto);
  }

  @UseGuards(AdminAuthGuards)
  @Get()
  allUser() {
    return this.authService.allUser();
  }

  @UseGuards(AuthGuards)
  @Get(":id")
  oneUser(@Param("id") id: string) {
    return this.authService.oneUser(id);
  }

  @UseGuards(AuthGuards)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAuthDto: UpdateAuthDto) {
    console.log("updateAuthDto M", updateAuthDto);
    return this.authService.update(id, updateAuthDto);
  }

  @UseGuards(AdminAuthGuards)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.authService.remove(id);
  }
}
