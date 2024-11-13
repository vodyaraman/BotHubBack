import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module'; // Модуль пользователей, если есть

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://root:adminadmin@79.174.84.111:5432/testdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Подключение всех сущностей
      synchronize: true, // Включайте только для разработки!
      logging: true, // Включает логирование запросов для отладки
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}

