import axios, { AxiosRequestConfig } from "axios";
import { ChatRequest } from "../domain/interfaces";

export class Api {

  private readonly instance = axios.create({
    baseURL: 'http://127.0.0.1:11434',
  })

  post(url: string, data:ChatRequest, config?: AxiosRequestConfig) {
    return this.instance.post(url, data, config)
  }
}
