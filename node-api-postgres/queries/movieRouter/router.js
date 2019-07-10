const routerquery = '/movies';


const router = (app, db) => {
    app.put(`${routerquery}`,  db.updateRate)
    app.post(`${routerquery}`, db.createMovie)
}

module.exports = { router }