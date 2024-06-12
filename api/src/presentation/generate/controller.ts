import { Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { GenerateService } from "../services/generate.service";
import { GenerateResponseDto } from "../../domain/dtos/generate-response..dto";

export class GenerateController {
  constructor(
    private readonly generateService: GenerateService
  ){}

  private handleError = (error: unknown, res:Response) => {
    if (error instanceof CustomError) {
      res.status(error.statusCode).send({ error: error.message})
    }

    return res.status(500).send({ error: 'Internal Server Error'})
  }

  generate = (req:Request, res:Response) => {
    const [ error, generateResponseDto] = GenerateResponseDto.create({
      ...req.body
    })

    if (error) return res.status(400).send({ error })

    this.generateService.generateImage(generateResponseDto!.prompt)
      .then((image) => {res.status(201).json(image)})
      .catch(error => this.handleError(error, res))
  }
}