import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop()
  name: string;

  @Prop()
  contactNo: number;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
