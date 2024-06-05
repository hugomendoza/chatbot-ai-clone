import { Router } from "express";
import { ChatRoutes } from "./chat/routes";

export class AppRoutes {

  static get routes():Router {
    const router = Router();
    router.use('/api/generate', ChatRoutes.routes);
    return router
  }
}