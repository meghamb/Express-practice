
export const getOne = model => async (req, res) => {
    try {
        console.log(req.params);
        const doc = await model.findOne({ _id: req.params.id }).exec();
        if (!doc) {
            return res.status(400).send({ message: 'not found' });
        }
        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).send({ message: e.message });
    }
}

export const getMany = model => async (req, res) => {

}
export const getAll = model => async (req, res) => {
    try {
        const doc = await model.find({});
        if (!doc) {
            return res.status(400).send({ message: 'no entries found' });
        }
        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).send({ message: e.message });
    }
}

export const createOne = model => async (req, res) => {
    try {
        console.log(req.body);
        const doc = await model.create(req.body);
        res.status(201).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).send({ message: e.message });
    }
}

export const updateOne = model => async (req, res) => {
    try {
        const doc = await model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!doc) {
            return res.status(400).send({ message: 'not found' });
        }
        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).send({ message: e.message });
    }
}

export const removeOne = model => async (req, res) => {
    try {
        const doc = await model.findOneAndRemove({ _id: req.params.id });
        if (!doc) {
            return res.status(400).send({ message: 'not found' });
        }
        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).send({ message: e.message });
    }
}
export const crudControllers = model => ({
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model),
    getOne: getOne(model),
    getMany: getMany(model),
    getAll: getAll(model),
})