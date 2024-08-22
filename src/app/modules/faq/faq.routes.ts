import express from 'express';
import { FaqControllers } from './faq.controller';

const router = express.Router();

router.post('/create-faq', FaqControllers.createFaq);
router.get('/', FaqControllers.getAllfaqs);
router.put('/:id', FaqControllers.updateFaq);

export const FaqRoutes = router;