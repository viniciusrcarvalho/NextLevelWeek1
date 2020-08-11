import express, { request, response } from 'express';

import multer from 'multer';
import multerConfig  from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

import { celebrate, Joi } from 'celebrate';


const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', 
upload.single('image'),
celebrate({
    body: Joi.object().keys({
        
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),

    })
}, {
    abortEarly: false
}),

pointsController.create);


export default routes;

// index, show, create, update, delete

/* 
routes.get('/items', async (request, response) => {

    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {

        return {
            id: item.id,
            titulo: item.titulo,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        }

    });

    return response.json(serializedItems);

}); */



/* routes.post('/points', async (request, response) => {
    const { name, 
            email, 
            whatsapp,
            latitude,
            longitude,
            city,
            uf, 
            items
        } = request.body;

        const trx = await knex.transaction();

        const insertedIds = await trx('points').insert({
            image: 'image-fake',
            name, 
            email, 
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        });

        const point_id = insertedIds[0];

        const pointItems = items.map((item_id: number) => { 
            return {
                item_id,
                point_id,
            }
         })
        
        await trx('points_items').insert(pointItems);

        return response.json({ success: true });

});
 */

