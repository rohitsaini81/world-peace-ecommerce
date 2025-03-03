import express from "express"
import helmet from "helmet"
import cors from 'cors'
import { errorMiddleware } from "./middlewares/error.js"
import dotenv from "dotenv"
import router from "./routes/CRUD.js"
import AuthRoute from "./routes/AUTH.js"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import postroute from './routes/Routes/postroute.js'
import { startBrowser } from "./routes/Routes/Methods.js"


const app = express();
dotenv.config({ path: './.env', });


export const proxy_host = process.env.proxy_host1;
export const proxy_username = process.env.proxy_username1;
export const proxy_password = process.env.proxy_password1;

app.use(express.json());



export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = process.env.PORT || 3000;




const corsOptions = {
  origin: 'http://localhost:5173', // Allow your frontend origin
  methods: 'GET,POST,PUT,DELETE',  // Allow necessary HTTP methods
  credentials: true,               // Allow credentials (cookies, tokens, etc.)
};

app.use(cors(corsOptions));


app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: ' * ', credentials: true }));
app.use(cookieParser())


// your routes here
// app.use(AuthRoute)
app.use(router)
app.use(postroute)

app.use(express.static('public'))

app.get("/dashboard", (req, res) => {
  res.send("welcome you are good user")
})

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

app.use(errorMiddleware);

app.listen(port, () => {
  startBrowser();
  console.log('Server is working on Port:' + port + ' in ' + envMode + ' Mode.\n ➜  Local:   http://localhost:' + port + '/')

});
