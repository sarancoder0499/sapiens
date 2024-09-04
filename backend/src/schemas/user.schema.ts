import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  emailId: string;
}

export const userSchema = SchemaFactory.createForClass(User);
userSchema.index({ emailId: 1 });
