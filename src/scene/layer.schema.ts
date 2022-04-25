import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Variant, VariantSchema } from './variant.schema'

export type LayerDocument = Layer & Document

@Schema()
export class Layer {
  @Prop({ type: String, required: true, trim: true })
  title: string

  @Prop([VariantSchema])
  variants: Variant[]
}

export const LayerSchema = SchemaFactory.createForClass(Layer)
