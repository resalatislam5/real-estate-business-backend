import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AdminAuthGuards } from "src/guards/admin.auth.guards";
import { ContactService } from "./contact.service";
import { CreateContactDto } from "./dto/create-contact.dto";

@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }
  @UseGuards(AdminAuthGuards)
  @Get()
  findAll() {
    return this.contactService.findAll();
  }
  @UseGuards(AdminAuthGuards)
  @Get("seen/:id")
  seenOne(@Param("id") id: string) {
    return this.contactService.seenOne(id);
  }

  @UseGuards(AdminAuthGuards)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.contactService.remove(id);
  }
}
