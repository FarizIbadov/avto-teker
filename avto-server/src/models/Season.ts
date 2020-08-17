import mongoose from "mongoose";

export interface SeasonSchema extends mongoose.Document {
  title: string;
  imageUrl?: string;
}

const seasonSchema = new mongoose.Schema<SeasonSchema>({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

export default mongoose.model<SeasonSchema>("Season", seasonSchema);
