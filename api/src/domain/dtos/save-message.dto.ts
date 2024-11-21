export class SaveMessageDto {
  private constructor(
    public session_id: String,
    public role: String,
    public content: String
  ){}

  static create( object: {[ key: string]: any}): SaveMessageDto {
    const { session_id, role, content } = object
    return new SaveMessageDto(session_id, role, content)
  }
}