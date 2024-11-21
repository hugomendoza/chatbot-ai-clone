import { Router } from "express";
import {  UploadController } from "./controller";
import { UploadService } from "../services/upload.service";

export class UploadRoutes {
  static get routes(): Router {
    const router = Router();

    const uploadService = new UploadService();
    const controller = new UploadController(uploadService);
    router.post('/', controller.uploadFile)

    return router
  }
}