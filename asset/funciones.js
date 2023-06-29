




async function obtenerImagenes() {
  
	let imagenes = [{url:'asset/img/renegade-militar.png'},{url:'asset/img/compass-azul.png'},{url:'asset/img/GLADIATOR-RUBICON-1.png'},{url:'asset/img/gran cher.png'},{url:'asset/img/cherokee2.jpg'},{url:'asset/img/rubicon-gris.png'}];
	try {
		let json = JSON.stringify(imagenes);

		return json;
	} catch (error) {
		console.log(error);
	}
}
async function getImagePath(){
const imagen = await obtenerImagenes()
const objNuevo = JSON.parse(imagen);
for (var i = 0; i < objNuevo.length; i++) {
document.getElementById(`imagen${i+1}`).src=objNuevo[i].url; 
}
return 


}
