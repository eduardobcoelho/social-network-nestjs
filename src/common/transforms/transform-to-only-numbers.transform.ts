import { TransformFnParams } from 'class-transformer';

export function TransformToOnlyNumbers() {
  return ({ value }: TransformFnParams) =>
    typeof value === 'string' ? value?.replace(/\D/g, '') : null;
}
