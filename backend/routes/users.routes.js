const router=require('express').Router();

const usersTab=[
    {
        firstName:'Harry',
        name:'Potter',
        id:'1',
        image:'https://images.rtl.fr/~c/770v513/rtl/www/1210274-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg',
        password:'1234'
    }
]

router.get('/',(req,res)=>{
    res.json(usersTab)
})

router.post('/',(req,res)=>{
    res.status(201);
    res.send("Can't add to this backend")
})
module.exports=router;