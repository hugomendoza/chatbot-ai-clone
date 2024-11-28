import { CustomError } from "../../domain/errors/custom.error";
import { SaveMessageDto } from "../../domain/dtos/save-message.dto";
import { PrismaClient } from "@prisma/client";
import { SessionService } from "./sessions.service";

const prismaClient = new PrismaClient();
const sessionService = new SessionService();

export class ConversationService {

  public async saveMessage(SaveMessageDto: SaveMessageDto) {
    const getSessionsFromDB = await prismaClient.session.findMany()
    const validateSessionExists = getSessionsFromDB.filter((session) => session.session_id === SaveMessageDto.session_id)
    if(!validateSessionExists) {
      sessionService.createSession("ABD1234566")
    }
    await prismaClient.message.create({
      data: {
        session_id: 1234567890,
        role: SaveMessageDto.role,
        content: SaveMessageDto.content
      }
    })
  }
}