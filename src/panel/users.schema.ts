import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { User, UserDocument } from '../user/user.schma'
import { Schema as MongooseSchema } from 'mongoose'

export type UsersDocument = Users & Document

export enum Permission {
  FINANCIAL = 'FINANCIAL',
  PRODOUCT = 'PRODUCT',
  VISIT = 'VISIT',
}

@Schema({ id: false, timestamps: true })
export class Users {
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: User.name })
  user: UserDocument

  @Prop({ required: true })
  permission: Permission[]
}

export const UsersSchema = SchemaFactory.createForClass(Users)
