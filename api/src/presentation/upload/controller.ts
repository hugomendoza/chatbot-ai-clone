import { Request, Response } from "express";
import { UploadService } from "../services/upload.service";

export class UploadController {

  constructor(
    public readonly uploadService: UploadService
  ){}

  uploadFile = async (req: Request, res: Response) => {
    this.uploadService.uploadFile()
      .then(() => res.status(201).json({ message: 'Uploaded file'}))
  }
}