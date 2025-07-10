import { WishlistService } from "./wishlist.service";
import { CreateWishlistDto } from "./dto/create-wishlist.dto";
import { UpdateWishlistDto } from "./dto/update-wishlist.dto";
export declare class WishlistController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistService);
    create(createWishlistDto: CreateWishlistDto, req: any): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/wishlist.schema").Wishlist> & import("./schema/wishlist.schema").Wishlist & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(req: any): Promise<(import("mongoose").Document<unknown, {}, import("./schema/wishlist.schema").Wishlist> & import("./schema/wishlist.schema").Wishlist & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateWishlistDto: UpdateWishlistDto): string;
    remove(id: string): string;
}
