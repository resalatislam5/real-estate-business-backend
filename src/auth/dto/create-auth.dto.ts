import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @MinLength(6, { message: "Minimum length 6 characters" })
  password: string;
}
