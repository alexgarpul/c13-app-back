const { Router } = require('express')
const { check } = require('express-validator')

const { validateFields } = require('../middlewares')

const router = Router() 

router.post('/', 
[

],
createArticle)

router.findAll('/', createArticle)

router.put('/:id', [], createArticle)

router.delete('/:id', [], createArticle)

module.exports = router