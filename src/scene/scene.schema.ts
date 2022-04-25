import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Gallery, GallerySchema } from './gallery.schema'
import { Layer, LayerSchema } from './layer.schema'

export type SceneDocument = Scene & Document

@Schema({ timestamps: true })
export class Scene {
  @Prop({ type: String, required: true, trim: true })
  title: string

  @Prop([LayerSchema])
  layers: Layer[]

  @Prop([GallerySchema])
  galleries: Gallery[]
}

export const SceneSchema = SchemaFactory.createForClass(Scene)
