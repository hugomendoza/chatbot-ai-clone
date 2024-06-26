import { GoogleGenerativeAI } from "@google/generative-ai";
import {  GeminiResponse } from "../../domain/interfaces";
import { envs } from "../../config/envs";
import { CustomError } from "../../domain/errors/custom.error";

const genAI = new GoogleGenerativeAI(envs.GEMINI_API_KEY as string)

export class ChatService {

  
  async generateResponse(options:GeminiResponse) {

    const { prompt, history } = options

    const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'})
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 100
      }
    })
    try {
      const result = await chat.sendMessage(prompt)
      const response = result.response
      return {
        prompt: response.text(),
        history: chat.params?.history
      }
    } catch (error) {
      throw CustomError.internalServer('Internal server error')
    }
  }
}