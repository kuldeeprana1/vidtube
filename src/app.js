 import express from "express"
 import cors from "cors"

 const app = express()

 app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials:true
    })
 )
 // common middlewares
 app.use(express.json({limit:"16kb"}))
 app.use(express.urlencoded({ extended:true, limit: "16kb"}))
 app.use(express.static("public"))
 

 // import routes(here we will bring routes healthcheck will automatically arrive)
import healthcheckRouter from "./routes/healthcheck.routes.js"



 // routes

 app.use("/api/v1/healthcheck", healthcheckRouter)
 export { app }

 