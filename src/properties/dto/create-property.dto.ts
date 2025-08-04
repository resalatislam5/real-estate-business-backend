import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Validate,
} from "class-validator";
import { IsValidYouTubeUrlConstraint } from "src/utils/IsValidVideoUrlConstraint";
enum country {
  "Bangladesh",
}
enum division {
  "Dhaka",
  "Khulna",
  "Barisal",
  "Rangpur",
  "Chittagong",
  "Rajshahi",
  "Sylhet",
  "Mymensingh",
}

enum propertyStatus {
  "For Sale",
  "For Rent",
}
export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  sq_ft: number;

  @IsString()
  @IsNotEmpty()
  property_type: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @IsNotEmpty()
  baths: number;

  @IsNumber()
  @IsNotEmpty()
  beds: number;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsNumber()
  @IsNotEmpty()
  year_built: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  garage: number;

  @IsNumber()
  @IsNotEmpty()
  garage_size: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(propertyStatus)
  property_status: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(division)
  division: string;

  @IsNumber()
  @IsNotEmpty()
  zip_code: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(country)
  country: string;

  @IsString()
  @IsNotEmpty()
  @Validate(IsValidYouTubeUrlConstraint) // ✅ Capital V
  video: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  // this is only use update property
  newImage: string;
}
