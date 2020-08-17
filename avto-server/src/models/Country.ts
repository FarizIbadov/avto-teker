import mongoose from "mongoose";

export interface CountrySchema extends mongoose.Document {
  title: string;
  imageUrl?: string;
}

const countrySchema = new mongoose.Schema<CountrySchema>({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

export default mongoose.model<CountrySchema>("Country", countrySchema);
