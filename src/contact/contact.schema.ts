import { Schema } from 'mongoose';

export const ContactSchema = new Schema({
  name: { type: String, required: true },
  contactNo: { type: Number, required: true },
});

export interface Contact {
  name: string;
  contactNo: number;
}
