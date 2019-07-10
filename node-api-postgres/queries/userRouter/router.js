
const routerquery = '/users'

const router = (app, db) => {
    app.post(`${routerquery}`, db.createUser)
    app.delete(`${routerquery}/:id`, db.deleteUser)
    app.get(`${routerquery}`, db.getUsers)
    app.get(`${routerquery}/id=:id`, db.getUserById)
    app.get(`${routerquery}/name=:name`, db.getUserByName)
}

module.exports = {
    router,
}