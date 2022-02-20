import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  contactNo: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
});

export interface User extends Document {
  id: string;
  contactNo: string;
  password: string;
}
