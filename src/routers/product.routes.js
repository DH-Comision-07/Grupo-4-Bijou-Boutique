const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/carrito", productController.carrito);
router.get("/productDetail", productController.productDetail);
router.get("/formulario", productController.formulario);

module.exports = router;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const productsFile = 'productos.json';

// Listado de Productos
app.get('/products', (req, res) => {
    fs.readFile(productsFile, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los productos.');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Formulario de Creación de Productos
app.get('/products/create', (req, res) => {
    
});

// Detalle de un Producto Particular
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