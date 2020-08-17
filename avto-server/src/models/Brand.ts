import mongoose from "mongoose";
import { CountrySchema } from "./Country";

export interface BrandSchema extends mongoose.Document {
  title: string;
  country: string | CountrySchema;
  description: string;
  imageUrl?: string;
}

const brandSchema = new mongoose.Schema<BrandSchema>({
  title: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model<BrandSchema>("Brand", brandSchema);
