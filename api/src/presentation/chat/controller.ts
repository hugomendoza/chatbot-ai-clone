import { Request, Response } from "express";
import { ChatService } from "../services/chat.service";

export class ChatController {
  constructor(
    private readonly chatService: ChatService
  ){}

  generate = (req:Request, res:Response) => {

    const { body } = req

    this.chatService.generateResponse( body )
      .then((response) => {res.send(response)})
      .catch((error) => {res.send(error)})
  }
}