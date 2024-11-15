import { Controller, Post, Body, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';
import { GptModelService } from './model.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Model')
@ApiBearerAuth()
@Controller('model')
export class ModelController {
  constructor(private readonly modelService: GptModelService) {}

  @UseGuards(JwtAuthGuard)
  @Post('generate')
  async generateText(@Body('prompt') prompt: string, @Request() req: any) {
    try {
      const userId = req.user.userId;
      const response = await this.modelService.generateText(prompt, userId);
      return { result: response };
    } catch (error) {
      throw new HttpException('Error generating text', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

