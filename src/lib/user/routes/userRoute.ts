import { Router } from 'express'
import { getUser, createUser, getList, deleteUser, updateUser, loginUser } from '../application_business_rules/useCaseUser'
const router = Router();


router.route('/user')
    .get(getList)
    .post(createUser)

  /**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Username to use for login.
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */

router.route('/user/:id')
    .put(updateUser)
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)

    /**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Username to use for login.
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
router.route('/login')
    .post(loginUser)
  

export default router;