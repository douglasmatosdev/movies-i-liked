const Movie = require('../models/Movie')

module.exports = app => {
    app.get('/', (req, res) => {
        
        console.log('This is Home Page')

        res.send('This is Home Page')
    })

    app.get('/movies', (req, res) => {
        Movie.show(res)
    })

    app.post('/movies', (req, res) => {
        const movie = req.body

        Movie.add(movie, res)
    })

    app.patch('/movies/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const movie = req.body

        Movie.update(id, movie, res)
    })

    app.delete('/movies/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Movie.delete(id, res)
    })
}