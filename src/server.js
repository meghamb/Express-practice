import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import postRouter from './post/post-router';
import { connect } from "./util/database";
import userRouter from './user/user-router';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/post', postRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send({ message: "OK GET" });
});
export const start = async () => {
    await connect();
    app.listen(3000, () => {
        console.log("Server started at 3000");
    });
}
//middleware example
// const customLogger = (req, res, next) => {
//     console.log("Logger incoming");
//     console.log(req.body);
//     next();
// }
// app.post('/', customLogger, (req, res) => {
//     console.log(req.body);
//     res.send({ message: "OK POST" });
// });

// router.get('/post', (req, res) => {
//     res.send({message: "Router OK"});
// });

// router.post('/post', (req, res) => {
//     res.send({message: "OK"});
// });
