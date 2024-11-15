import { Injectable } from '@nestjs/common';
  import axios from 'axios';
import { IModelService } from 'src/interfaces/model-service.interface';
  
  @Injectable()
  export class GptModelService implements IModelService {
    async generateText(input: string, userId: string): Promise<string> {
      const response = await axios.post('https://bothub.chat/api/v2/openai/v1', {
        prompt: input,
        max_tokens: 100,
      }, {
        headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` },
      });
      return response.data.choices[0].text;
    }
  }