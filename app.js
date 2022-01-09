
const express = require("express");
const app = express();
const port =  3000;
//slkndfsjdglskdgn
//const port = 3000

app.use(express.static(__dirname + "/static"));

app.get('/quienes_somos', (req, res) => {
	res.sendFile(__dirname+'/static/Quienes somos.html')
})

app.get('*', (req, res) => {
	res.sendFile(__dirname+'/static/404.html')
})

app.listen(port, ()=>{
    console.log("Escuchando a http://localhost:" + port)
});

