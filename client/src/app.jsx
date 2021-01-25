import React from 'react'

const App = () => {

    const PORT = 3000
    const baseURL = `http://localhost:${3000}`

    fetch(`${baseURL}/movies`)
        .then(res => {
            console.log(res)
        })
    return <div>React</div>
}

export default App
