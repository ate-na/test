import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductTypeDocument = ProductType & Document

@Schema({ _id: true, id: false, timestamps: true })
export class ProductType {
  @Prop({ required: true, unique: true })
  name: string
}

export const ProductTypeSchema = SchemaFactory.createForClass(ProductType)
