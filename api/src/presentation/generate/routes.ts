import { Request, Response, Router } from "express";
import { GenerateService } from "../services/generate.service";
import { GenerateController } from "./controller";

export class GenerateRoutes {

  static get routes():Router {
    
    const router = Router();
    const generateService = new GenerateService();
    const controller = new GenerateController(generateService);
    router.post('/', controller.generate )

    return router
  }
}