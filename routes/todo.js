const {Router} = require('express')
const router = Router()

//Получение списка задач
router.get('/', (req, res) => {
 res.json({a: 1})
})

//Создание новой задачи
router.post('/', (req, res) => {

})

//Изменение задач
router.put('/:id', (req, res) => {

})


//Удаление задач
router.delete('/:id', (req, res) => {

})

module.exports = router