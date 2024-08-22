import { TFaq } from "./faq.interface";
import Faq from "./faq.model";

const createFaq = async (payload : TFaq) => {
    const result = await Faq.create(payload);
    return result;
};

const getAllfaqs = async () => {
    const result = await Faq.find();
    return result;
};

const updateFaq = async (id:string, payload : Partial<TFaq>) => {
    const result = await Faq.findByIdAndUpdate(id, payload , {
        new:true
    });
    return result;
};

export const FaqServices = {
    createFaq,
    getAllfaqs,
    updateFaq,
}