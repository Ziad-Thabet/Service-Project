import { Schema, Document, model, Number } from 'mongoose';
import * as bcrypt from 'bcrypt';

export interface User extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly userName: string;
  readonly email?: string;
  readonly age: number;
  password: string;
  fullName?: string;
  readonly createdAt?: Date;
  readonly imageUrl?: string;
}

export const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  fullName: {
    type: String,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    required: false,
    validate: {
      validator: (v: string) => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v),
      message: 'Invalid URL format for imageUrl',
    },
  },
});

UserSchema.index({ userName: 1, email: 1 });

UserSchema.pre<User>('save', async function (next) {
  // Ensure that the fullName is always updated based on firstName and lastName
  this.fullName = `${this.firstName} ${this.lastName}`;

  if (this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

export const UserModel = model<User>('User', UserSchema);
