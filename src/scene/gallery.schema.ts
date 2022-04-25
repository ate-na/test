import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type GalleryDocument = Gallery & Document

@Schema()
export class Gallery {
  @Prop({ type: String })
  title: string

  @Prop([
    raw({
      name: { type: String },
      path: { type: String },
      highQualityPath: { type: String },
    }),
  ])
  images: Record<string, any>[]
}

export const GallerySchema = SchemaFactory.createForClass(Gallery)
