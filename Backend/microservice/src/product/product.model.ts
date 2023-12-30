import { Schema, Document, model } from 'mongoose';

export interface Product extends Document {
  readonly productName: string;
  readonly description: string;
  readonly amount: number;
  readonly price: number;
  readonly createdAt?: Date;
  readonly proteinType: string;
  readonly brand: string;
  readonly flavor: string;
  readonly imageUrl?: string;
}

export const ProductSchema = new Schema<Product>({
  productName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    get: (v: number) => Math.round(v * 100) / 100,
  },
  proteinType: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  flavor: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: false,
    validate: {
      validator: (v: string) => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v),
      message: 'Invalid URL format for imageUrl',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

ProductSchema.index({ createdAt: 1, productName: 1 });

ProductSchema.virtual('formattedCreatedAt').get(function (this: Product) {
  return this.createdAt?.toLocaleDateString();
});

export const ProductModel = model<Product>('ProductSchema', ProductSchema);
