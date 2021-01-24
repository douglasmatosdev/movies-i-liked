module.exports = app => {
    app.get('/', (req, res) => {
        
        console.log('This is Home Page')

        res.send('This is Home Page')
    })

    app.get('/movies', (req, res) => {
        
        console.log('This is Movies area')

        res.send('This is Movies area')
    })
}