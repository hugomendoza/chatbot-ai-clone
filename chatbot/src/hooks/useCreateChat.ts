import { toast } from "sonner"
import { api } from "../api/api"
import { PropsResponse } from "../interfaces/interfaces"
import { AxiosError } from "axios"

export const useCreateChat = () => {

  const generateChat = async ( options:PropsResponse) => {
    
    try {
      const { data } = await api.post<PropsResponse>("/chat", options)
      return data
    } catch (error) {
      if(error instanceof AxiosError) {
        toast.error(error.response?.data.error)
      }
    }
  }

  return {
    generateChat
  }
}
