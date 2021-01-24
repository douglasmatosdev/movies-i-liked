const expressConfig = require('./config/expressConfig')

const app = expressConfig()

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})
