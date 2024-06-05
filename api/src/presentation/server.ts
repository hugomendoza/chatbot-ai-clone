import express, { Router } from 'express'
import cors from 'cors'
import path from 'path';

interface Options {
  port: number;
  public_path?: string;
  routes: Router;
}

export class Server {
  public readonly app = express()
  private serverListener?: any
  private readonly port: number
  readonly publicPath: string
  private readonly routes: Router;

  constructor(options: Options){
    const { port, routes, public_path = 'public' } = options 
    this.port = port
    this.publicPath = public_path
    this.routes = routes
  }

  async start() {

    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(express.static(this.publicPath))

    this.app.use( this.routes )

    this.app.get('*', (req, res) => {
      const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`)
      res.sendFile(indexPath)
    })

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}