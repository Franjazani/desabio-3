const fs = require('fs');
const path = require('path');
const express = require('express');
const http = require('http')

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});

server.on('error', error => console.log(`Error en Servidor ${error}`))

class Contenedor{
    constructor(archivo) {
        this.archivo = `./${archivo}.json`;
    }
    async obtenerProducto() {
        const dato = await fs.promises.readFileSync(this.nombreArchivo, 'utf-8');
        return JSON.parse(dato);
    };
    async guardarProductos(productos) {
        fs.promises.writeFile(this.nombreArchivo, JSONstringify(productos, null, '\t'), 'utf-8');
    };
        
    async getById(idBuscado) {
        const unArticulo = await this.obtenerProductos();
        const indice = unArticulo.findIndex((unProducto) => unProducto.id === idBuscado);
    }
        async getAll(){
        const unArticulo = await this.obtenerProductos();
        return unArticulo;
    };
}

let visitas = 0
app.get('/', (req, res) => {
    visitas++
    res.send(`Bienvenidos a la Web ${visitas}`)
});

app.get('/productos', async (req, res) => {
    const unArticulo = await contenedor.getAll()
    const art = unArticulo.map((unProducto) => {
        return `Producto: ${unProducto.title} - Precio: ${unProducto.price} - ID: ${unProducto.id}`
    })
    res.send(art)
});

const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

app.get('/productos/:id', async (req, res) => {
    const id = between(0, 2)
    const unProducto = await content.getById(id)
    const art = `Producto: ${unProducto.title} - Precio: ${unProducto.price} - ID: ${unProducto.id}`
    res.send(art)
});

