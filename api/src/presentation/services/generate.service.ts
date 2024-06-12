import OpenAI from "openai";

import { envs } from "../../config/envs";

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
      console.log(error)
    }
  }
}