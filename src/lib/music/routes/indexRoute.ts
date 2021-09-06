import { Router } from 'express'
import { indexWelcome } from '../enterprise_business_rules/useCaseIndex'
import {getPlayList} from '../../music/application_business_rules/useCaseMusic'
import { createCategory } from '../application_business_rules/useCaseMusic';

const router = Router();
/** 
 * @swagger
 * components:
 * schemas:
 *  music:
 *  type: Object
 *  propertys:
 *      id:
 *          type: integer
 *      description:The Auto_Incremente id of de Music
 *       category:
 *          type: string
 *          description: Category of Music
 *       playlist:
 *          type: array
 *          description: Array list
 */


    /** 
    * @swagger
    * /login
    * get
    *     summary Return a login User
    *     response:
    *   200:
    *       description:the list of music
    *   content:
    *       aplication/json:
    *       schema:
    *           type: array
    *        items:
    *           $ref: '#/components/schemas/music
    *           propertys:
    
    */ 

    /** 
    * @swagger
    * /login
    * get
    *     summary Return a login User
    *     response:
    *   200:
    *       description:the list of music
    *   content:
    *       aplication/json:
    *       schema:
    *           type: array
    *        items:
    *           $ref: '#/components/schemas/music
    *           propertys:
    
    */ 
router.route('/')
    .get(getPlayList)
    .post(createCategory)


export default router;