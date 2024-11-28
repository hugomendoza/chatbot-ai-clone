import { PrismaClient } from "@prisma/client";
import { CreateSessionDto } from "../../domain/dtos/create-session.dto";
import { Uuid } from "../../config";

const prismaClient = new PrismaClient();
export class SessionService {

  public async createSession (session_id: string) {
    await prismaClient.session.create({
      data: {
        session_id: session_id
      }
    })
  }

}