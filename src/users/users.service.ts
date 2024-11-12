import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // Заглушка для поиска пользователя
  findOne(username: string) {
    return { id: 1, username, password: 'hashedPassword' };
  }

  // Заглушка для создания пользователя
  create(user: any) {
    return { ...user, id: Date.now() };
  }
}
