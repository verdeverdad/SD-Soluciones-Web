



// ==================
// EDITAR DATOS PUT
// ==================
document.querySelector('#editar-datos').addEventListener('click', () => {
	console.log('click en Guardar(editar-datos)');
	
	let id = 'miIdPorURL';
	let url = 'https://desarrollo-soluciones-web.herokuapp.com/editar_perfil/'+id;
	//let url = 'http://localhost:8080/editar_perfil/'+id;

	// TODO VVVV
	let data = { 
		nombre:"prueba",
		estado:true,
		precio:1500,
		categoria:"621b85dea22fc908e3ce9e67",
		descripcion:"descripcion para el producto seo buscador",
		disponible:true };
      
	fetch(url, {
		method: 'PUT', // or 'POST'
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers: {
			'Content-Type': 'application/json',
			'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjI5NGViMGY3OTEwODljZTEyODcwZjkiLCJpYXQiOjE2NDc5OTg2OTEsImV4cCI6MTY0ODAxMzA5MX0.M_zKzAU2LmlH4BhsTnF8OlFkNC7mPd4xFdHurQfgfjw'
		}
	}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response));
      
})



	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function () {
		'use strict'

		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll('.needs-validation')

		// Loop over them and prevent submission
		Array.prototype.slice.call(forms)
			.forEach(function (form) {
				form.addEventListener('submit', function (event) {
					if (!form.checkValidity()) {
						event.preventDefault()
						event.stopPropagation()
					}

					form.classList.add('was-validated')
				}, false)
			})
	})()
