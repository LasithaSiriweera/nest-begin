import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { SmeLoan, SmeLoanDocumant } from './entities/customer.schema';

@Injectable()
export class LoansService {
  constructor(
    @InjectModel(SmeLoan.name) private smeLoanModel: Model<SmeLoanDocumant>,
  ) {}

  create(createLoanDto: CreateLoanDto) {
    return 'This action adds a new loan';
  }

  async findAll() {
    const res = await this.smeLoanModel.find().exec();
    console.log(res);
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} loan`;
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
    return `This action updates a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
