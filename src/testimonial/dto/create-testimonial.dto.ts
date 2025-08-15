import { IsNotEmpty, IsString } from "class-validator";

export class CreateTestimonialDto {
  @IsString()
  @IsNotEmpty()
  image: String;

  @IsString()
  @IsNotEmpty()
  name: String;

  @IsString()
  @IsNotEmpty()
  profession: String;

  @IsString()
  @IsNotEmpty()
  description: String;
}
