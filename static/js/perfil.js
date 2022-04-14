

//console.log('variable proveniente del backend', miOtraVariable)

// ==================
// EDITAR DATOS PUT
// ==================
document.querySelector('#editar-datos').addEventListener('click', () => {
	console.log('click en Guardar(editar-datos)');
	
	let token = document.getElementById("token").value; 
	
	let id = document.getElementById("id").value; 
	//let url = 'https://desarrollo-soluciones-web.herokuapp.com/editar_perfil/'+id;
	let url = 'http://localhost:8080/editar_perfil/'+id;

	// TODO VVVV
	let data = { 
		nombre:document.getElementById("editar-nombre").value,
		apellido:document.getElementById("editar-apellido").value,
		ubicacion:document.getElementById("editar-ubicacion").value
		 };
      
	fetch(url, {
		method: 'PUT', // or 'POST'
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers: {
			'Content-Type': 'application/json',
			'x-token':token
		}
	}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response));
      
})







	// Example starter JavaScript for disabling form submissions if there are invalid fields
	/*(function () {
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
	})()*/
