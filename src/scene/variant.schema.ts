import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type VariantDocument = Variant & Document

@Schema()
export class Variant {
  @Prop({ type: String, required: true, trim: true })
  title: string

  @Prop({ type: String })
  thumbnail: string
}

export const VariantSchema = SchemaFactory.createForClass(Variant)
