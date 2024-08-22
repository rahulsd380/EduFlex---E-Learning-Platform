import { model, Schema } from "mongoose";
import { TFaq } from "./faq.interface";

const FaqSchema = new Schema<TFaq>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Faq = model<TFaq>('Faq', FaqSchema);
export default Faq;