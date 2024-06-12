export class GenerateResponseDto {

  private constructor(
    public readonly prompt: string,
  ){}

  static create( props: {[ key: string]: any}):[string?, GenerateResponseDto?]{
    
    const {
      prompt,
    } = props

    if(!prompt)  return ["Ingresa tu consulta"]

    return[
      undefined,
      new GenerateResponseDto(
        prompt
      )
    ]
  }
}