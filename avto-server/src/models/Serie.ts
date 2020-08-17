import mongoose from "mongoose";
import { BrandSchema } from "./Brand";

export interface SerieSchema extends mongoose.Document {
  title: string;
  brand: string | BrandSchema;
  description: string;
  imageUrl?: string;
}

const serieSchema = new mongoose.Schema<SerieSchema>({
  title: {
    type: String,
    required: true,
  },
  brand: {
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

export default mongoose.model<SerieSchema>("Serie", serieSchema);
