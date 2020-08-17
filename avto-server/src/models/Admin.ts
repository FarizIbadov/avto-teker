import mongoose from "mongoose";

export interface AdminSchema extends mongoose.Document {
  username: string;
  password: string;
}

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<AdminSchema>("Admin", adminSchema);
