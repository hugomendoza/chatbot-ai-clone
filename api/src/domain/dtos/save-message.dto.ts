export class SaveMessageDto {
  private constructor(
    public session_id: string,
    public role: string,
    public content: string
  ){}

  static create( object: {[ key: string]: any}): SaveMessageDto {
    const { session_id, role, content } = object
    return new SaveMessageDto(session_id, role, content)
  }
}