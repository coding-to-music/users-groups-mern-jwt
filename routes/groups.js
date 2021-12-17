import { Router } from 'express'
import * as groupCtrl from '../controllers/groups.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', groupCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, groupCtrl.create)
router.post('/:id', checkAuth, groupCtrl.update)
router.post('/:id/posts', checkAuth, groupCtrl.createPost)
router.delete('/:id', checkAuth, groupCtrl.delete)

export { router }