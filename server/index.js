const expressConfig = require('./config/expressConfig')
const connection = require('./infra/connection')
const Tables = require('./infra/Tables')

connection.connect((err) => {
    if (err) console.log(err)

    Tables.init(connection)
    
    const app = expressConfig()
    
    app.listen(3000, () => {
        console.log(`Server is running on port 3000`)
    })
    
})