import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { User, UserDocument } from '../user/user.schma'

export type SessionDocument = Session & Document

@Schema({ _id: true, id: false, timestamps: true })
export class Session {
  @Prop({
    required: true,
    ref: User.name,
    type: MongooseSchema.Types.ObjectId,
  })
  user: UserDocument

  @Prop({ required: true })
  expiresAt: string

  @Prop({ required: true })
  refreshToken: string
}

export const SessionSchema = SchemaFactory.createForClass(Session)
