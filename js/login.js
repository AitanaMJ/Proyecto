
function obtenerListaUsuarios() {
    var listaUsuarios = JSON.parse(localStorage.getItem(`ListaUsuariosLs`));
    if(listaUsuarios  == null) {
        listaUsuarios =
        [
           ['1','matias', 'Ruiz', 'ruizmatias.99@gmail.com', '123456','1'],
           ['2', 'agustin', 'zelaya', 'agustinzelayacossio@gmail.com', '654321','2'], 
        ]

    }
    return listaUsuarios;
}

function validarCredenciales(pCorreo , pContraseña) {
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < listaUsuarios.length; i++ ){
        if(pCorreo == listaUsuarios[i][3] && pContraseña == listaUsuarios [i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarios', listaUsuarios[i][1]+""+listaUsuarios[i][2]);
        }
    }
    return bAcceso;
}