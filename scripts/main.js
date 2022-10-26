
window.onload = () =>{
    listaProjetos()
}

function listaProjetos(params) {
    let listagemProjects = document.getElementById('listagemProjects');

    response.forEach(e => {
        listagemProjects.innerHTML += `
            <tr>
                <td>${e.id}</td>
                <td>${e.nome}</td>
            </tr>
        `
    });

}
