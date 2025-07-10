import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from "@nestjs/common";
import { WishlistService } from "./wishlist.service";
import { CreateWishlistDto } from "./dto/create-wishlist.dto";
import { UpdateWishlistDto } from "./dto/update-wishlist.dto";
import { AuthGuards } from "src/guards/auth.guards";

@UseGuards(AuthGuards)
@Controller("wishlist")
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(@Body() createWishlistDto: CreateWishlistDto, @Req() req: any) {
    return this.wishlistService.create(createWishlistDto, req.user);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.wishlistService.findAll(req.user);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.wishlistService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateWishlistDto: UpdateWishlistDto
  ) {
    return this.wishlistService.update(+id, updateWishlistDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.wishlistService.remove(+id);
  }
}
