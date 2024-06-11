import { History } from "../interfaces"

export class ChatResponseDto {

  private constructor(
    public readonly prompt: string,
    public readonly history: History[],
  ){}

  static create( props: {[ key: string]: any}):[string?, ChatResponseDto?]{
    
    const {
      prompt,
      history
    } = props

    if(!prompt)  return ["Ingresa tu consulta"]

    return[
      undefined,
      new ChatResponseDto(
        prompt,
        history
      )
    ]
  }
}
