import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoansModule } from './v1/loans/loans.module';
import { CustomerModule } from './v1/customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/loan_management'),
    LoansModule,
    CustomerModule,
  ],
})
export class AppModule {}
