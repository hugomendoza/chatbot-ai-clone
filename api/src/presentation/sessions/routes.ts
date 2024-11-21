import { Router } from "express";
import { SessionService } from "../services/sessions.service";
import { SessionController } from "./controller";

export class SessionsRoutes {
  static get routes(): Router {
    const router = Router();

    const sessionService = new SessionService();
    const constroller = new SessionController(sessionService);

    router.post('/', constroller.createSession)

    return router
  }
}