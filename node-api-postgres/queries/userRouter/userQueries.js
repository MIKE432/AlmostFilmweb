
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'mike',
    host: 'localhost',
    database: 'almostfilmweb',
    password: '1211',
    port: 5432,
})

const createUser = (req, res, next) => {
  
    const { email, name, password } =  req.body;
    console.log(email);
    pool.query('INSERT INTO users (email, name, password) VALUES ($1, $2, $3)', [email, name, password], (error, results) => {
        if(error) {
            throw error;
        }

        res.status(201).send(req.body)
    } )
}

const getUsers = (request, response, next) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(JSON.stringify(results.rows))
  })
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }

      response.status(200).send(`User deleted with ID: ${id}`)
    })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE userid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(200).json(results.rows)
  })
}

const getUserByName = (req, res) => {

  pool.query('SELECT * FROM users WHERE name = $1', [req.params.name], (error, results) => {
    if (error) {
      throw error
    }
    
    res.status(200).json(results.rows)
  })
}

module.exports = {
    createUser,
    deleteUser,
    getUsers,
    getUserById,
    getUserByName
}