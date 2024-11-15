import { Module } from '@nestjs/common';
import { ModelController } from './model.controller';
import { GptModelService } from './model.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  controllers: [ModelController],
  providers: [GptModelService, JwtAuthGuard],
  exports: [GptModelService],
})
export class ModelModule {}
