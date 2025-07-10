import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto, UpdateVendorDto } from './dto/vendor.dto';

@Controller('vendor')
export class VendorController {
    constructor(private readonly vendorService: VendorService,
    ) { }

    // used in quotation TODO: need to me handled
    @Get('fetch-all-vendors')
    async fetchAllVendors() {
        return this.vendorService.fetchAllVendors();
    }

    @Get('get-vendors')
    findAllVendors(
        @Query('cid') cid: number,
        @Query('page') page: number,
        @Query('limit') limit: number,
        @Query('search') search: string = '',
        @Query('newDataCount') newDataCount: number,
        // @Query('filters') filters: { [key: string]: string }
    ) {
        return this.vendorService.findAllVendors(cid, page, limit, search, newDataCount);
    }

    @Get('get-vendor')
    findOneVendor(
        @Query('uid') uid: number,
    ) {
        return this.vendorService.findOneVendor(uid);
    }

    @Post('create-vendor')
    createVendor(
        @Body() createVendorDto: CreateVendorDto,
    ) {
        return this.vendorService.createVendor(createVendorDto);
    }

    @Put('update-vendor')
    updateVendor(
        @Body() updateVendorDto: UpdateVendorDto,
    ) {
        return this.vendorService.updateVendor(updateVendorDto);
    }

    @Delete('delete-vendor')
    deleteVendor(
        @Query('uid') uid: number,
        @Query('page') page: number,
    ) {
        return this.vendorService.deleteVendor(uid, page);
    }
}
