import { Request, Response } from "express";
import { ChatService } from "../services/chat.service";
import { ChatResponseDto } from "../../domain/dtos/chat-response.dto";
import { CustomError } from "../../domain/errors/custom.error";

export class ChatController {
  constructor(
    private readonly chatService: ChatService
  ){}

  private handleError = (error: unknown, res:Response) => {
    if (error instanceof CustomError) {
      res.status(error.statusCode).send({ error: error.message})
    }

    return res.status(500).send({ error: 'Internal Server Error'})
  }

  generate = (req:Request, res:Response) => {
    const [ error, chatResponseDto ] = ChatResponseDto.create({
      ...req.body
    })

    if (error) return res.status(400).send({ error })

    this.chatService.generateResponse(chatResponseDto!)
      .then((chat) => {res.status(201).json(chat)})
      .catch(error => this.handleError(error, res))
  }
}