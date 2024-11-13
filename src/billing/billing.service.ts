// billing.service.ts
import { Injectable } from '@nestjs/common';
import { User } from '../users/user.entity';

@Injectable()
export class BillingService {
  updateBalance(user: User, tokensUsed: number, costPerToken: number) {
    const totalCost = tokensUsed * costPerToken;
    user.balance -= totalCost;
    if (user.balance < 0) {
      throw new Error('Insufficient balance');
    }
    // Сохранение изменений в базе данных
  }
}
