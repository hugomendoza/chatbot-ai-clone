import OpenAI from "openai";

import { envs } from "../../config/envs";
import { CustomError } from "../../domain/errors/custom.error";

export class GenerateService {

  
  async generateImage(prompt:string) {

    const generateOpenAI = new OpenAI({
      apiKey: envs.CHAT_GPT_API_KEY
    })
    try {
      const { data } = await generateOpenAI.images.generate({
        prompt,
        model: "dall-e-3",
        n: 1,
        size: "1024x1024",
        style: "natural",
        quality: "hd"
      })
      return data
    } catch (error) {
      throw CustomError.internalServer('Internal server error')
    }
  }
}