document.addEventListener('DOMContentLoaded', () => {
    let listaVacia = JSON.parse(localStorage.getItem('lista'));
    displayItems(listaVacia);
});

const btnagregar = document.getElementById('agregar');
let listaVacia = [];
const itemList = document.getElementById('contenedor');

btnagregar.addEventListener('click', () => {

    const texto = document.getElementById('item').value;
    if (texto) { 
    listaVacia.push(texto);
    localStorage.setItem('lista', JSON.stringify(listaVacia));
    displayItems(listaVacia);
    document.getElementById('item').value = "";
    } else {
        alert("Ingrese algún texto");
    }
});

function displayItems(lista) {
    itemList.innerHTML = '';
    lista.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

const limpiar = document.getElementById('limpiar');

limpiar.addEventListener('click', () => {
    itemList.innerHTML = '';
    listaVacia.splice(0, listaVacia.length);
    localStorage.removeItem('lista');
});