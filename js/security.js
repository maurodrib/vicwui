//Documento de funcionalidad de la seguridad de validación del frontend
function validacionIndex (id) {
	var valinput=document.getElementById(id);
	if(valinput.checkValidity()){
		borrarError(valinput);
		btnenable(valinput);
	}else{
		error(valinput);
		btndisable();
	}
}
function borrarError(valinput){
	var boxPa=document.getElementById("boxPaMsgError");
	if(boxPa){
		boxPa.remove();
		valinput.className="";
	}
}
function error(valinput){
	var dadvalinput=valinput.parentElement.id,
		addBoxPa=document.createElement("p"),
		iddadvalinput=document.getElementById(dadvalinput),
		boxPa=document.getElementById("boxPaMsgError");
	if(!boxPa){
		addBoxPa.setAttribute("id","boxPaMsgError");
		iddadvalinput.appendChild(addBoxPa);
	}
	document.getElementById('boxPaMsgError').innerHTML = valinput.validationMessage;
	valinput.className="mensaje-error";
}
//Funcion de desactivar botones
var tmpready=setInterval(pageFull, 100);
function pageFull(){
	if(document.readyState == "loaded" || document.readyState == "complete"){
		btndisable();
		clearInterval(tmpready);
	}
}
function btndisable(){
	var frms = document.forms;
	for(var i=0; i<frms.length;i++){
		for(var j=0; j<frms[i].elements.length;j++){
			if(frms[i].elements[j].type == "submit"){
				frms[i].elements[j].disabled = true;
				frms[i].elements[j].style.opacity = "0.4";
			}
		}
	}
}
//Funcion de activar boton
function btnenable(valinput){
	var dadinput=valinput.parentElement.id,
		idfrms=document.getElementById(dadinput),
		elsfrms=idfrms.elements,
		btnsubmit=true;
	for(var i=0;i<elsfrms.length;i++){
		if(elsfrms[i].value.length == 0){
			btnsubmit=false;
		}
	}
	if(btnsubmit){
		for(var l=0;l<elsfrms.length;l++){
			if(elsfrms[l].type == "submit"){
				elsfrms[l].disabled = !btnsubmit;
				elsfrms[l].style.opacity = "1";	
			}
		}
	}
}
//Configuracion para limpiar los formularios
function clearValidacionIndex(){
	var frms = document.forms;
	for(var i=0;i<frms.length;i++){
		frms[i].reset();
		for(var j=0;j<frms[i].elements.length;j++){
			if(frms[i].elements[j].className == "mensaje-error"){
				var clearElements=frms[i].elements[j],
					clearBoxPa=document.getElementById("boxPaMsgError");
				clearElements.className="";
				clearBoxPa.remove();
			}
		}
	}
}


// Diseñar y crear el formulario de crear cuenta