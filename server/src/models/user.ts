import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema: Schema = new Schema({
    id: { type: String, auto: true, default: () => new mongoose.Types.ObjectId().toString() },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export const UserModel = mongoose.model<User>('User', userSchema, 'users');