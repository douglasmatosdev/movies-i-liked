const connection = require('../infra/connection')

class Movie {
    show(res) {
        const sql = 'SELECT * FROM Movies_liked'

        connection.query(sql, (err, response) => {
            if (err) res.status(400).json(err)

            res.status(200).json(response)
        })
    }

    add(movie, res) {
        const sql = 'INSERT INTO Movies_liked SET ?'

        connection.query(sql, movie, (err) => {
            if (err) res.status(400).json(err)

            res.status(200).json(movie)
        })
    }

    update(id, movie, res) {
        const sql = 'UPDATE Movies_liked SET ? WHERE id=?'

        connection.query(sql, [movie, id], (err) => {
            if (err) res.status(400).json(err)

            res.status(200).json({ ...movie, id })
        })
    }

    delete(id, res) {
        const sql = 'DELETE FROM Movies_liked WHERE id=?'

        connection.query(sql, id, (err) => {
            if (err) res.status(400).json(err)

            res.status(200).json({ id })
        })
    }
}

module.exports = new Movie
