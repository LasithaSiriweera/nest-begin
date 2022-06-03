import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SmeLoan, SmeLoanSchema } from './entities/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SmeLoan.name, schema: SmeLoanSchema }]),
  ],
  controllers: [LoansController],
  providers: [LoansService],
})
export class LoansModule {}
