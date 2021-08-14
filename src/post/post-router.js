import { Router } from "express";
import controllers from './post-controller';
const router = Router();

router
    .route('/')
    .get(controllers.getOne)
    .post(controllers.createOne);

router
    .route('/:id/:num')
    .put((req, res) => {
        console.log(req.params);
        res.send({ message: "Router OK PUT" });
    })
    .patch((req, res) => {
        res.send({ message: "Router OK PATCH" });
    })
    .delete((req, res) => {
        res.send({ message: "Router OK DELETE" });
    });
export default router;