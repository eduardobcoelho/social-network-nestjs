import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { isValidDocument } from '../utils';

@ValidatorConstraint({ async: false })
class IsDocumentConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return typeof value === 'string' && isValidDocument(value);
  }

  defaultMessage() {
    return 'CPF must be valid';
  }
}

export function IsDocument(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsDocumentConstraint,
    });
  };
}
