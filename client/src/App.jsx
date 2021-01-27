import React from 'react'

const App = () => {

    const PORT = 3000
    const baseURL = `http://localhost:${PORT}`

    fetch(`${baseURL}/movies`)
        .then(res => {
            console.log(res)
        })
    return <div><h1>React</h1></div>
}

export default App
