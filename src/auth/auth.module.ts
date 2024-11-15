import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../jwt-strategy'; 

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecret', // Убедитесь, что переменная окружения определена
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy], // Зарегистрируйте стратегию в providers
  controllers: [AuthController],
  exports: [AuthService, JwtStrategy], // Экспортируйте JwtStrategy, если он нужен в других модулях
})
export class AuthModule {}
