const express = require("express");
const port = process.env.PORT || 3001;
const uuid = require('uuid');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

// Middleware para logar informações sobre a requisição
app.use((req, res, next) => {
    console.log(`[${req.method}] - ${req.url}`);
    next();
});


const orders = [];

// Middleware para verificar se o ID passado existe
const checkOrderID = (req, res, next) => {
    const { id } = req.params;
    const index = orders.findIndex(order => order.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Pedido não encontrado" });
    }
    next();
};

app.post('/order', (req, res) => {
    const { order, clientName } = req.body;
    const id = uuid.v4();
    const newOrder = { id, order, clientName }; // Corrigido: remova 'v4()' desnecessário
    orders.push(newOrder);
    res.status(201).json(newOrder); // Envia os dados do pedido criado como resposta
});
app.get('/order', (req, res) => {
    res.json(orders);
});

app.put('/order/:id', checkOrderID, (req, res) => {
    const { id } = req.params;
    const index = orders.findIndex(order => order.id === id);
    const { order: newOrder, clientName: newClientName, } = req.body;
    orders[index] = { ...orders[index], order: newOrder, clientName: newClientName };
    res.json(orders[index]);
});

app.delete('/order/:id', checkOrderID, (req, res) => {
    const { id } = req.params;
    const index = orders.findIndex(order => order.id === id);
    orders.splice(index, 1);
    res.status(204).end();
});

app.get('/order/:id', checkOrderID, (req, res) => {
    const { id } = req.params;
    const order = orders.find(order => order.id === id);
    res.json(order);
});

app.patch('/order/:id', checkOrderID, (req, res) => {
    const { id } = req.params;
    const index = orders.findIndex(order => order.id === id);
    orders[index].status = 'Pronto';
    res.json(orders[index]);
});

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
});