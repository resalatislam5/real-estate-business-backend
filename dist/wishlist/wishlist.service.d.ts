import { CreateWishlistDto } from "./dto/create-wishlist.dto";
import { UpdateWishlistDto } from "./dto/update-wishlist.dto";
import { Wishlist } from "./schema/wishlist.schema";
import { Model } from "mongoose";
export declare class WishlistService {
    private readonly wishlistModel;
    constructor(wishlistModel: Model<Wishlist>);
    create(createWishlistDto: CreateWishlistDto, user: any): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, Wishlist, {}, {}> & Wishlist & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(user: any): Promise<(import("mongoose").Document<unknown, {}, Wishlist, {}, {}> & Wishlist & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: number): string;
    update(id: number, updateWishlistDto: UpdateWishlistDto): string;
    remove(id: number): string;
}
