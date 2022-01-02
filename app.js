
const express = require("express");
const app = express();
const port =  3000;
//slkndfsjdglskdgn
//const port = 3000

app.use(express.static(__dirname + "/static"));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next()
})

/*app.get("/carrito", (req, res)=>{
    res.send(carrito)
})
app.get("/category_info", (req, res)=>{
    res.send(category_info)
})


app.get("/otra_ruta", (req, res)=>{
    res.send("Otra ruta!!!")
});
*/

app.listen(port, ()=>{
    console.log("Escuchando a http://localhost:" + port)
});

