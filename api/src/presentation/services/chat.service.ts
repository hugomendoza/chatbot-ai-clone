import ollama from 'ollama'
import { ChatRequest } from "../../domain/interfaces";

export class ChatService {
  async generateResponse(body:ChatRequest) {
    try {
      const response = await ollama.chat(body)
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }
}