import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Product, ProductDocument } from '../product.schema'
import { User, UserDocument } from '../../user/user.schma'

export type ChatDocument = Chat & Document

@Schema({ _id: true, id: false, timestamps: true })
export class Chat {
  @Prop({ required: true, ref: User.name, type: MongooseSchema.Types.ObjectId })
  sender: UserDocument

  @Prop({ required: true, ref: User.name, type: MongooseSchema.Types.ObjectId })
  receiver: UserDocument

  @Prop({
    required: true,
    ref: Product.name,
    type: MongooseSchema.Types.ObjectId,
  })
  product: ProductDocument

  @Prop({ required: true })
  text: string

  @Prop({ required: true })
  attachment: string[]
}

export const ChatSchema = SchemaFactory.createForClass(Chat)
