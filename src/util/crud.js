export const getOne = model => async (req, res) => {
    console.log('get recieved');
    res.status(200).end();
}

export const getAny = model => async (req, res) => {
    console.log('get many recieved');
    res.status(200).end();

}

export const createOne = model => async (req, res) => {
    console.log('create one recieved');
    res.status(200).end();

}

export const updateOne = model => async (req, res) => {
    console.log('update 1 recieved');
    res.status(200).end();

}

export const removeOne = model => async (req, res) => {
    console.log('remove 1 recieved');
    res.status(200).end();

}
export const crudControllers = model => ({
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model),
    getOne: getOne(model),
    getAny: getAny(model),
})