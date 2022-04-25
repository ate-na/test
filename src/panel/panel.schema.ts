import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { User, UserDocument } from '../user/user.schma'
import { Schema as MongooseSchema, Document } from 'mongoose'
import { UsersSchema, Users } from './users.schema'

export type PanelDocument = Panel & Document

@Schema({ timestamps: true, id: false })
export class Panel {
  @Prop({
    required: true,
    type: MongooseSchema.Types.ObjectId,
    ref: User.name,
    index: true,
  })
  owner: UserDocument

  @Prop({ required: true })
  company: string

  @Prop([UsersSchema])
  users: Users[]
}

export const PanelSchema = SchemaFactory.createForClass(Panel)

PanelSchema.pre('findOneAndUpdate', function (this) {
  this.populate({ path: 'users.user', select: '-password' })
})
