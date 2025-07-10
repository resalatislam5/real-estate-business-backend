import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateContactDto } from "./dto/create-contact.dto";
import { Contact } from "./schema/contact.schema";
import { User } from "src/auth/schema/user.schema";

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private readonly contactModel: Model<Contact>
  ) {}

  async create(createContactDto: CreateContactDto) {
    const { name, number, email, message } = createContactDto;

    try {
      await this.contactModel.create({
        name,
        number,
        email,
        message,
      });
    } catch (e) {
      Logger.error(e);
      throw new InternalServerErrorException("Something Wrong");
    }
    return { message: "Our team will contact you soon" };
  }

  async findAll() {
    const contactDetails = await this.contactModel
      .find({})
      .sort({ createdAt: -1 });
    return { data: contactDetails };
  }

  async seenOne(_id: string) {
    await this.contactModel.updateOne({ _id }, { seen: true });
    return { message: "seen Successfully" };
  }

  async remove(id: string) {
    await this.contactModel.findOneAndDelete({ _id: id });

    return { message: "Delete Successfully" };
  }
}
