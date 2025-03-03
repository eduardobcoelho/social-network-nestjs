export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export class User {
  id: number;
  email: string;
  document: string;
  name: string;
  gender: UserGender;
  birthDate: Date;
  createdAt: Date;
  updatedAt?: Date;
}
