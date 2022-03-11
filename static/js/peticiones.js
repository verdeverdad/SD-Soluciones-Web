console.log('peticiones.js,  funciona!!!');



document.querySelector('#get_productos').addEventListener('click', ()=>{
        //console.log('btn click?????');

        let url = 'https://desarrollo-soluciones-web.herokuapp.com/api/productos';

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

        }



})