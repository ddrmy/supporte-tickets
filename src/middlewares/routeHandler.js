import { routes } from "../routes/index.js"
import { Database } from "../database/database.js"

const database = new Database()

export function routeHandler(req, res){
   const route = routes.find((route) => {
    return route.method === req.method && route.path.test(req.url)
   })

   if(route){
      const routeParams = request.url.match(route.path)
      console.log(routeParams)
    return route.controller({ req, res, database, database })
   }

   return res.writeHead(404).end("Not Found")
}