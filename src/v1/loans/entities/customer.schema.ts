import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SmeLoanDocumant = SmeLoan & Document;

@Schema({ collection: 'sme_loans' })
export class SmeLoan {
  @Prop()
  type: string;

  @Prop()
  smeId: string;

  @Prop()
  currency: string;
}

export const SmeLoanSchema = SchemaFactory.createForClass(SmeLoan);
