filtros();
document.forms.formCreate = addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        codigo: document.querySelector('#codigo').value,
        tipo: document.querySelector('#tipo').value,
        precio: document.querySelector('#precio').value,
    }
    console.log(data);

    let url = "/filtros";
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => res.json({ error: error }))
        .then(responde => {
            alert("insertado cone exito");
            filtros();
        })

});

function filtros() {
    let url = '/filtros';
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))
        .then(response => {
            var tbody = document.querySelector('#registros');
            var filas = "";
            response.forEach(element => {
                filas = filas + `<tr>
            <td>${element.codigo}</td>
            <td>${element.tipo}</td>
            <td>${element.precio}</td>
            <td>
                <a href="/filtros/${element._id}" class="update btn btn-warning">Actualizar</a>
                <a href="/filtros/${element._id}" class="delete btn btn-warning">Eliminar</a>
            </td>
            </tr>`
            });
            tbody.innerHTML = filas;
            //agregar eventos
            var btns_delete = document.querySelectorAll(".delete");
            btns_delete.forEach(item => {
                item.addEventListener("click", function (e) {
                    e.preventDefault();
                    //petiicon fetch
                    var url = this["href"];
                    fetch(url, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res=> res.json())
                    .catch(err=> console.log(err))
                    .then(response =>{
                        alert("elimiando con ext");
                        filtros();
                    })

                })
            })
        });
}
