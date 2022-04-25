import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { User, UserDocument } from '../user/user.schma'
import {
  ProductType,
  ProductTypeDocument,
} from './product-type/product-type.schema'

export enum ProductStatus {
  DRAFT = 'draft',
  PROCESS = 'process',
  DELIVERED = 'delivered',
  CONFIRMED = 'confirmed',
  REJECTED = 'REJECTED',
}

export enum ProductDimension {
  CM = 'CM',
  MM = 'MM',
  IN = 'IN',
} 

export type ProductDocument = Product & Document

@Schema({ _id: true, id: false, timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  family: string

  @Prop({ required: false, default: ProductStatus.DRAFT })
  status: ProductStatus

  @Prop({ required: false })
  startAtProcess: string

  @Prop({ required: false })
  confirmAtProcess: string

  @Prop({ required: false })
  rejectAtProcess: string

  @Prop({ required: true, ref: User.name, type: MongooseSchema.Types.ObjectId })
  creator: UserDocument

  @Prop({
    required: true,
    ref: ProductType.name,
    type: [MongooseSchema.Types.ObjectId],
  })
  types: ProductTypeDocument[]

  @Prop({ required: false, default: 1 })
  version: number

  @Prop({ required: true })
  height: [string, ProductDimension]

  @Prop({ required: true })
  width: [string, ProductDimension]

  @Prop({ required: true })
  length: [string, ProductDimension]

  @Prop({ required: true })
  attachment: string[]
}

export const ProductSchema = SchemaFactory.createForClass(Product)
