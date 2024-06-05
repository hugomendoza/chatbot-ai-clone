import { Router } from "express";
import { ChatController } from "./controller";
import { ChatService } from "../services/chat.service";

export class ChatRoutes {

  static get routes():Router {
    
    const router = Router();
    const chatService = new ChatService();
    const controller = new ChatController(chatService);
    router.post('/', controller.generate )

    return router
  }
}