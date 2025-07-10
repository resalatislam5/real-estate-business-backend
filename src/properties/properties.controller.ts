import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from "@nestjs/common";
import { PropertiesService } from "./properties.service";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";
import { Request } from "express";
import { AdminAuthGuards } from "src/guards/admin.auth.guards";

@Controller("properties")
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @UseGuards(AdminAuthGuards)
  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto, @Req() req: any) {
    return this.propertiesService.create(createPropertyDto, req.user);
  }

  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.propertiesService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePropertyDto: CreatePropertyDto
  ) {
    return this.propertiesService.update(id, updatePropertyDto);
  }

  @UseGuards(AdminAuthGuards)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.propertiesService.remove(id);
  }
}
