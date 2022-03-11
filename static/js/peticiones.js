console.log('peticiones.js,  funciona!!!');

let resultado = document.querySelector('#resultado');
const url = 'https://desarrollo-soluciones-web.herokuapp.com/api/productos';

// =============
// GET 
// =============
document.querySelector('#get_productos').addEventListener('click', () => {
        //console.log('btn click?????');
        let url_limit = `${url}?limite=100`;
        


        fetch(url_limit)
                .then(response => response.json())
                .then(data => {
                        console.log(data)

                        let {total, productos} = data;

                        resultado.innerHTML = '';
        
                        for(let producto of productos){
                                resultado.innerHTML += `<li>${producto.nombre} -> $ ${producto.precio}</li>`
                        }
                });

        /*
                const api = new XMLHttpRequest();
                api.open('GET', url, true);
                api.send();
        
                api.onreadystatechange = function(){
        
                        if(this.status == 200 && this.readyState == 4){
                                let {total, productos} = JSON.parse(this.responseText);
                                console.log(productos);
        
                                let resultado = document.querySelector('#resultado')
                                resultado.innerHTML = '';
        
                                for(let producto of productos){
                                        resultado.innerHTML += `<li>${producto.nombre} -> $ ${producto.precio}</li>`
                                }
        
        
                        }
        
                }*/



})



// =============
// GET - ID
// =============
document.querySelector('#get_producto').addEventListener('click', () => {
        //console.log('click en btn producto');

        let producto = '621ccb8a5169dc9cda027d6d'
        let url_producto = `${url}/${producto}`;


        fetch(url_producto)
                .then(response => response.json())
                .then(data => {
                        console.log(data);
                        resultado.innerHTML = '';

                        resultado.innerHTML += `<li>${data.nombre} -> ${data.precio} </li>`
                });



})





// =============
// POST
// =============
document.querySelector('#post_producto').addEventListener('click', () => {
        console.log('click en post producto');

        //let url = 'https://desarrollo-soluciones-web.herokuapp.com/api/productos';


        let data = { 
                nombre:"prueba",
                estado:true,
                precio:1500,
                categoria:"621b85dea22fc908e3ce9e67",
                descripcion:"descripcion para el producto seo buscador",
                disponible:true };

        fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                        'Content-Type': 'application/json',
                        'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWY3MGNiNTZkZmVhZWQ4YzZkMmEwN2IiLCJpYXQiOjE2NDYzNTA1MzMsImV4cCI6MTY0NjM2NDkzM30.EdOHe5NPkdlzw89X5vK0K0PaPvaJu-0awqYCTZ_xVZU'
                }
        }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));



})







// =============
// PUT
// =============
document.querySelector('#put_producto').addEventListener('click', () => {
        console.log('click en post producto');

        //let url = 'https://desarrollo-soluciones-web.herokuapp.com/api/productos';

        // TODO VVVV
        let data = { 
                nombre:"prueba",
                estado:true,
                precio:1500,
                categoria:"621b85dea22fc908e3ce9e67",
                descripcion:"descripcion para el producto seo buscador",
                disponible:true };

        fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                        'Content-Type': 'application/json',
                        'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWY3MGNiNTZkZmVhZWQ4YzZkMmEwN2IiLCJpYXQiOjE2NDYzNTA1MzMsImV4cCI6MTY0NjM2NDkzM30.EdOHe5NPkdlzw89X5vK0K0PaPvaJu-0awqYCTZ_xVZU'
                }
        }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));

})






const mostrarResultados = (data)=>{

        console.log('se ejecuto la funcion mostrarResultados()');


};