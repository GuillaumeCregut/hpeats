const router=require('express').Router();
const meals=require('./meals.routes');
const users=require('./users.routes');
const animals=require('./animals.routes');
const history=require('./history.routes');
router.get('/',(req,res)=>{

    console.log('toto')
})
router.use('/meals',meals)
router.use('/animals',animals);
router.use('/users',users);
router.use('/history',history);

module.exports=router;

// users
// animals
// history