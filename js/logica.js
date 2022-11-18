
document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion() {
    var sCorreo = '';
    var sContraseña = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContraseña = document.querySelector('#txtContraseña').value;

    bAcceso = validarCredenciales(sCorreo,sContraseña);
    console.log(bAcceso);
    
    if(bAcceso == true){
        window.location.href= './admin.html';
    }
    else{
        window.location.href ='./registro.html';
    } 
       
    

}
