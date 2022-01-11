/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const DB_URI = process.env.DB_URI
  const PORT = process.env.PORT || 3000;


*/
const port =  3000;

const express = require("express")
const path = require("path")
const app = express()


app.use(express.static(__dirname + "/static"));

<<<<<<< HEAD
app.get('/quienes_somos', (req, res) => {
	res.sendFile(__dirname+'/static/Quienes somos.html')
})

app.get('*', (req, res) => {
	res.sendFile(__dirname+'/static/404.html')
})
=======
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next()
})


/*app.get("/category_info", (req, res)=>{
    res.send(category_info)
})


app.get("/otra_ruta", (req, res)=>{
    res.send("Otra ruta!!!")
});

app.listen(PORT, () => {
    console.log("Escuchando a http://localhost:" + PORT)
});
*/
>>>>>>> 39702b34523030fa8b73c2350aa7023d1ad70d20

app.listen(port, () => {
    console.log("Escuchando a http://localhost:" + port)
});

