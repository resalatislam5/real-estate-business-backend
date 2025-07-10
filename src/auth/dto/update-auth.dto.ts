import { PartialType } from "@nestjs/mapped-types";
import { CreateAuthDto } from "./create-auth.dto";

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  name: string;
  number: string;
  address: string;
  image: string;
  newImage: string;
}
