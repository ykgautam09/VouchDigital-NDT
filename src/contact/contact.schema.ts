import { Schema, Document } from 'mongoose';

export const ContactSchema = new Schema({
  name: { type: String, required: true },
  contactNo: { type: Number, required: true },
});

export interface Contact extends Document {
  id: string;
  name: string;
  contactNo: number;
}
