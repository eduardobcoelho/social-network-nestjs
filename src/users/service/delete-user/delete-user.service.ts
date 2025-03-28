import { Injectable } from '@nestjs/common';

export interface IDeleteUserService {
  exec: (id: number) => Promise<void>;
}

@Injectable()
export class DeleteUserService implements IDeleteUserService {
  constructor() {}

  exec(id: number) {
    console.log(id);
    return Promise.resolve();
  }
}
