import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";
import { InjectModel } from "@nestjs/mongoose";
import { createProperties } from "./schema/create-properties.schema";
import { Model } from "mongoose";
import { DeleteImage } from "src/utils/DeleteImage";

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(createProperties.name)
    private readonly propertiesModel: Model<createProperties>
  ) {}
  async create(createPropertyDto: CreatePropertyDto, user: any) {
    try {
      const newItems = await this.propertiesModel.create({
        ...createPropertyDto,
        creator: user._id,
      });
      return { message: "property added successfully", data: newItems };
    } catch (e) {
      throw new InternalServerErrorException("Something was wrong");
    }
  }

  async findAll() {
    const data = await this.propertiesModel.find({});
    return data;
  }

  async findOne(id: string) {
    try {
      const data = await this.propertiesModel.findOne({ _id: id });
      return data;
    } catch (e) {
      console.error(e.message);
      throw new NotFoundException("Data Not Found");
    }
  }

  async update(id: string, updatePropertyDto: CreatePropertyDto) {
    try {
      const { newImage, image } = updatePropertyDto;
      if (newImage) {
        await DeleteImage(image);
      }
      const updated = await this.propertiesModel.findByIdAndUpdate(
        id,
        { ...updatePropertyDto, image: newImage ?? image },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updated) {
        throw new NotFoundException("Property not found");
      }
      return { message: `updated successfully`, data: updated };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException("Something was wrong");
    }
  }

  async remove(id: string) {
    try {
      const data = await this.propertiesModel.findById(id);
      if (!data) {
        throw new NotFoundException("Property not found");
      }
      await DeleteImage(data.image);

      await this.propertiesModel.deleteOne({ _id: id });

      return { message: `removes a #${id} property` };
    } catch (e) {
      throw new InternalServerErrorException("Something was wrong");
    }
  }
}
