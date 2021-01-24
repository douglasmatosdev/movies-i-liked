class Tables {
    init(connection) {
        console.log('Tables calls')

        this.connection = connection
        this.createMovies()
    }

    createMovies() {
        const sql = 'CREATE TABLE IF NOT EXISTS Movies_liked (id int NOT NULL AUTO_INCREMENT, title varchar(150) NOT NULL, year varchar(10), cover text, PRIMARY KEY(id))'

        this.connection.query(sql, (err) => {
            if (err) console.log(err)
            
            console.log('Success on create tables')
        })
    }
}

module.exports = new Tables
