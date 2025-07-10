import { ValidatorConstraintInterface, ValidationArguments } from "class-validator";
export declare class IsValidYouTubeUrlConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
