import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export enum UserNeedActions {
  COMPLETE_PROFILE = 'COMPLETE_PROFILE',
  SET_PASSWORD = 'SET_PASSWORD',
}

export type UserDocument = User & Document

@Schema({ _id: true, id: false, timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string

  @Prop()
  firstName: string

  @Prop()
  lastName: string

  @Prop({ required: true })
  password: string

  @Prop()
  needActions: UserNeedActions[]
}

export const UserSchema = SchemaFactory.createForClass(User)
