import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ModelModule } from './model/model.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://root:adminadmin@79.174.84.111:5432/testdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true, 
    }),
    AuthModule,
    UsersModule,
    ModelModule,
  ],
})
export class AppModule {}

