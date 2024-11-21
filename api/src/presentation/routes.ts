import { Router } from 'express'
import { ConversationRoutes } from './conversation/routes'
import { SessionsRoutes } from './sessions/routes'
import { UploadRoutes } from './upload/routes'

export class AppRoutes {

  static get routes():Router {
    const router = Router()
    router.use('/api/conversation', ConversationRoutes.routes)
    router.use('/api/sessions', SessionsRoutes.routes)
    router.use('/api/upload', UploadRoutes.routes)
    return router
  }
}