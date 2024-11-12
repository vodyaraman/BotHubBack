// interfaces/model-service.interface.ts
export interface IModelService {
    generateText(input: string, userId: string): Promise<string>;
  }
