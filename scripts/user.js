//Funciones

function obtenerUsuarios(){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://gd257f4deb7943f-t314c727okmelw13.adb.us-chicago-1.oraclecloudapps.com/ords/admin/user/user", requestOptions)
    .then(response => response.json())
    .then(result => {
        const data = result.items
        data.forEach(element => {
            tableBody.innerHTML += `<tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.age}</td>
                        <td>${element.role_id}</td>
                        </tr>`
        });
    })
    .catch(error => console.log('error', error));
}

function eliminarUsuarios(){
    var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
    };
    fetch(`https://gd257f4deb7943f-t314c727okmelw13.adb.us-chicago-1.oraclecloudapps.com/ords/admin/user/user?id=${inputId.value}`, requestOptions)
    .then(response => {
        if(response.status == 204){
            location.reload()
        }
    })
    .catch(error => console.log('error', error));
}

function crearUsuario(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "id": inputId.value,
    "name": inputName.value,
    "age": inputAge.value,
    "role_id": inputRoleId.value
    });
    console.log(raw)

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
    fetch("https://gd257f4deb7943f-t314c727okmelw13.adb.us-chicago-1.oraclecloudapps.com/ords/admin/user/user", requestOptions)
        .then(response => {
            if(response.status == 201){
                location.reload()
            }
        })
        .catch(error => console.log('error', error));
}

function actualizarUsuario(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": inputId.value,
        "name": inputName.value,
        "age": inputAge.value,
        "role_id": inputRoleId.value
    });

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://gd257f4deb7943f-t314c727okmelw13.adb.us-chicago-1.oraclecloudapps.com/ords/admin/user/user", requestOptions)
    .then(response => {
        if(response.status == 201){
            location.reload()
        }
    })
    .catch(error => console.log('error', error));
}

//Relacionar html con javascript
const tableBody = document.getElementById("table-body")
const inputId = document.getElementById("txtId")
const inputName = document.getElementById("txtName")
const inputAge = document.getElementById("txtAge")
const inputRoleId = document.getElementById("txtRolId")



obtenerUsuarios()