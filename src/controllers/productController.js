const { Router } = require("express");

const productController = {
  productDetail: (req, res) => {
    return res.render("productDetail");
  },
  carrito: (req, res) => {
    return res.render("carrito");
  },
  formulario: (req, res) => {
    return res.render("formulario");
  },
};


app.get('/products', (req, res) => {
    fs.readFile(productsFile, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los productos.');
            return;
        }
    });
});

// Formulario de Creación de Productos
app.get('/products/create', (req, res) => {
    
});

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    fs.readFile(productsFile, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los productos.');
            return;
        }
        const products = JSON.parse(data);
        const product = products.find(prod => prod.id === parseInt(productId));
        if (!product) {
            res.status(404).send('Producto no encontrado.');
            return;
        }
        res.json(product);
    });
});

// Acción de Creación
app.post('/products', (req, res) => {
});

// Formulario de Edición de Productos
app.get('/products/:id/edit', (req, res) => {
});

// Acción de Edición
app.put('/products/:id', (req, res) => {
});

// Acción de Borrado
app.delete('/products/:id', (req, res) => {
});



module.exports = productController;
