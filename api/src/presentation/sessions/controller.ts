import { Request, Response } from "express";
import { SessionService } from "../services/sessions.service";

export class SessionController {

  constructor(
    public readonly sessionService: SessionService
  ){}

  createSession = async (req: Request, res: Response) => {
    const { session_id } = req.body
    this.sessionService.createSession(session_id)
      .then(() => res.status(201).json({ message: 'Session created'}))
  }
}