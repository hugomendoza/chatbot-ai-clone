import { CustomError } from "../../domain/errors/custom.error";
import { SaveMessageDto } from "../../domain/dtos/save-message.dto";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export class ConversationService {
  public async saveMessage(SaveMessageDto: SaveMessageDto) {
    const existsSession = await prismaClient.session.findMany()
    // TODO: Filter if session exists
    // TODO: If session not exists, create session
    // TODO: Create session service and controller for handle session
  }
}