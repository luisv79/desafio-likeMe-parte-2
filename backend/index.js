 const { agregarPost, obtenerPost, modificarPosts, eliminarPosts } = require('./descripcion')
 const express = require('express');
const app = express();
app.listen(3000, console.log("SERVIDOR ENCENDIDO"))
app.get("/posts", async (req, res) => {
 const posts = await obtenerPost()
res.json(posts)
 })

 app.use(express.json())

 app.post("/posts", async (req, res) => {
   try {
      const { titulo, url, descripcion } = req.body
     await agregarPost(titulo, url, descripcion)
    res.send("Post agregado con éxito")
   } catch (error) {
      res.status(500).send(error)
   }
   })

    

    app.put("/posts/:id", async (req, res) => {
      try {
      const { id } = req.params
      const { likes } = req.query
      await modificarPosts(likes, id)
      res.send("Post modificado con éxito")
      } catch (error) {
         res.status(500).send(error)
         }
      })


      app.delete("/posts/:id", async (req, res) => {
         const { id } = req.params
         await eliminarPosts(id)
         res.send("post eliminado con éxito")
         })