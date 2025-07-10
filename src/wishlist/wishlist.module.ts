import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { Wishlist, wishlistSchema } from "./schema/wishlist.schema";
import { WishlistController } from "./wishlist.controller";
import { WishlistService } from "./wishlist.service";

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: Wishlist.name, schema: wishlistSchema },
    ]),
  ],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
