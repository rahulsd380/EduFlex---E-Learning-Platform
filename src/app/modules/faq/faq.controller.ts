import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { FaqServices } from "./faq.service";

// Create faq route
const createFaq = catchAsync(async (req, res) => {
    const result = await FaqServices.createFaq(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq created successfully.',
      data: result,
    });
  });

// Get all faqs route
const getAllfaqs = catchAsync(async (req, res) => {
    const result = await FaqServices.getAllfaqs();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq fetched successfully.',
      data: result,
    });
  });

// Update faq route
const updateFaq = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await FaqServices.updateFaq(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq updated successfully.',
      data: result,
    });
  });

  export const FaqControllers = {
    createFaq,
    getAllfaqs,
    updateFaq,
  }