// is-valid-youtube-url.validator.ts
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";

@ValidatorConstraint({ name: "IsValidYouTubeUrl", async: false }) // <== this decorator is mandatory
export class IsValidYouTubeUrlConstraint
  implements ValidatorConstraintInterface
{
  validate(value: string, args: ValidationArguments): boolean {
    if (typeof value !== "string") return false;
    // Accept:
    // - youtube.com/watch?v=VIDEO_ID
    // - youtu.be/VIDEO_ID
    // - youtube.com/embed/VIDEO_ID
    const regex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;

    return regex.test(value.trim());
  }

  defaultMessage(args: ValidationArguments): string {
    return "Video URL must be a valid YouTube video link (watch?v=, youtu.be/, or embed/)";
  }
}
