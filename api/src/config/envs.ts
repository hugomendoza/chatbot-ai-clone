import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
  PORT: get('PORT').default(3000).asPortNumber(),
  GEMINI_API_KEY: get('GEMINI_API_KEY').asString()
}