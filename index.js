const express = require('express')
const app = express()
const service = require('./src/services')



const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 5000;
const swaggerOptions= {
    swaggerDefinition:{
        info:{
            title: 'Marvel API',
            description: "Informação API MARVEL",
            contact:{
                name:"Amazing Developer"
            },
            servers:["http://localhost:5000"]
        }
    },
    apis: ["index.js"]
};

const swaggerDocs= swaggerJsDoc(swaggerOptions);
index.use('/api-docs', swagger.server, swaggerui.setup(swaggerDocs));

const router = express.Router()
router.get('/', (req, res) => {
    res.send('rodando')
})
router.get('/v1/public/characters', service.getAll)
router.get('/v1/public/characters/:id', service.getById)
router.get('/v1/public/characters/:id/comics', service.getByComics)
router.get('/v1/public/characters/:id/events', service.getByEvent)
router.get('/v1/public/characters/:id/series', service.getBySerie)
router.get('/v1/public/characters/:id/stories', service.getByStory)


app.use('/', router)

const porta = process.env.PORT;
console.log(porta)

app.listen(porta || 8082, () => {
    console.log('Server started on port 8081')
})