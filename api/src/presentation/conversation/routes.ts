import { Router } from "express";
import { ConversationController } from "./controller";
import { ConversationService } from "../services/conversation.service";

export class ConversationRoutes {

  static get routes():Router {
    
    const router = Router();
    const chatService = new ConversationService();
    const controller = new ConversationController(chatService);
    router.post('/', controller.generate )

    return router
  }
}