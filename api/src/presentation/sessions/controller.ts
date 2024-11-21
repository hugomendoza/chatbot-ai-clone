import { Request, Response } from "express";
import { SessionService } from "../services/sessions.service";

export class SessionController {

  constructor(
    public readonly sessionService: SessionService
  ){}

  createSession = async (req: Request, res: Response) => {
    this.sessionService.createSession()
      .then(() => res.status(201).json({ message: 'Session created'}))
  }
}