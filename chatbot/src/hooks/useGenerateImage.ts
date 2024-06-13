import { toast } from "sonner"
import { api } from "../api/api"
import { ImageResponse } from "../interfaces/interfaces"
import { AxiosError } from "axios"

export const useGenerateImage = () => {

  const generateImage = async ( prompt: string ) => {
    
    try {
      const { data } = await api.post<ImageResponse>("/generate", {prompt})
      return data
    } catch (error) {
      if(error instanceof AxiosError) {
        toast.error(error.response?.data.error)
      }
    }
  }

  return {
    generateImage
  }
}