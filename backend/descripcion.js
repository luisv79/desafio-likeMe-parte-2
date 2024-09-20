const { Pool } = require('pg')
const pool = new Pool({
host: 'localhost',
user: 'postgres',
password: '1979',
database: 'likeme',
allowExitOnIdle: true
})

 
const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0)"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log("Post agregado")
    }

   

    
      const obtenerPost = async () => {
      const { rows } = await pool.query("SELECT * FROM posts")
       console.log(rows)
         return rows
       }

       const modificarPosts = async (likes, id) => {
        const consulta = "UPDATE Posts SET likes = $1 WHERE id = $2"
        const values = [likes, id]
        const result = await pool.query(consulta, values)
        }

        const eliminarPosts = async (id) => {
          const consulta = "DELETE FROM posts WHERE id = $1"
          const values = [id]
          const result = await pool.query(consulta, values)
          }
          
         

      module.exports = {obtenerPost, agregarPost, modificarPosts, eliminarPosts};