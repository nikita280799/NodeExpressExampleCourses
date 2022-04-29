const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('contacts', {
        title: 'Не контакты', 
        isContacts: true
    })
})

module.exports = router