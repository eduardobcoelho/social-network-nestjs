export class Post {
  id: number;
  userId: number;
  text: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
