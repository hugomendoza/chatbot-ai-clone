import { Router } from "express";
import { ChatRoutes } from "./chat/routes";
import { GenerateRoutes } from "./generate/routes";

export class AppRoutes {

  static get routes():Router {
    const router = Router();
    router.use('/api/chat', ChatRoutes.routes);
    router.use('/api/generate', GenerateRoutes.routes);
    return router
  }
}