export class CreateSessionDto {
  private constructor(
    public session_id: String
  ){}
  static create( object: {[ key: string]: any}): CreateSessionDto {
    const { session_id } = object
    return new CreateSessionDto(session_id)
  }
}