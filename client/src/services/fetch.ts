const BASE_URL = 'http://localhost:3000'

const Services = {
    getMovies: () =>
        fetch(`${BASE_URL}/movies`).then(res => res.json())
    
}

export default Services
