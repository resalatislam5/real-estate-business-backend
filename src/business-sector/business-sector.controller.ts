import { Controller, Get, Post, Param, Body, Put, Delete, Query, Patch, } from '@nestjs/common';
import { BusinessSectorService } from './business-sector.service';
import { CreateBusinessSectorDto, UpdateBusinessSectorDto } from './dto/business-sector.dto';

@Controller('business-sector')
export class BusinessSectorController {
  constructor(
    private readonly businessSectorService: BusinessSectorService,
  ) { }

  @Get('get-business-sectors')
  findAllBusinessSectors(
    @Query('cid') cid: number,
    @Query('search') search: string = '',
  ) {
    return this.businessSectorService.findAllBusinessSectors(cid, search);
  }

  @Get('get-business-sector')
  findOneBusinessSector(
    @Query('uid') uid: number,
  ) {
    return this.businessSectorService.findOneBusinessSector(uid);
  }

  @Get('get-business-sector-by-email')
  findByEmail(
    @Query('email') email: string,
  ) {
    return this.businessSectorService.findBusinessSectorByEmail(email);
  }

  @Post('create-business-sector')
  createBusinessSector(
    @Body() createBusinessSectorDto: CreateBusinessSectorDto,
  ) {
    return this.businessSectorService.createBusinessSector(createBusinessSectorDto);
  }

  @Put('update-business-sector')
  updateBusinessSector(
    @Body() updateBusinessSectorDto: UpdateBusinessSectorDto,
  ) {
    return this.businessSectorService.updateBusinessSector(updateBusinessSectorDto);
  }

  @Delete('delete-business-sector')
  deleteBusinessSector(
    @Query('uid') uid: number,
  ) {
    return this.businessSectorService.deleteBusinessSector(uid);
  }
}
