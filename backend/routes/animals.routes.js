const animalsTab=[
{
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Griffioen.jpg/260px-Griffioen.jpg',
    weight:'100',
    name:'Griffon',
    price:'20'
}
];

const router=require('express').Router();


router.get('/',(req,res)=>{
    res.json(animalsTab);
})
module.exports=router;