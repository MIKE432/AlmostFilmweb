const Pool = require('pg').Pool

const pool = new Pool({
    user: 'mike',
    host: 'localhost',
    database: 'almostfilmweb',
    password: '1211',
    port: 5432,
})

const createMovie = ( req, res ) => {
    
    const { movieid, title, rate, assessment, userid } = req.body

    pool.query('INSERT INTO movies (movieid, title, rate, assessment, userid) VALUES ($1, $2, $3, $4, $5)', 
        [movieid, title, rate, assessment, userid], 
        (error, result => {
            if(error) {
                throw error;
            }

            res.status(201).sent(req.body);
    }))
}

const updateRate = ( req, res ) => {

    const { movieid, rate } = req.body

    pool.query('UPDATE movies SET rate = $1 WHERE movieid = $2', [rate, movieid], (error, result) => {
        
        if(error) {
            throw error;
        }

        res.status(201).sent(req.body);
    })
}


module.exports = {
    createMovie,
    updateRate,
}
