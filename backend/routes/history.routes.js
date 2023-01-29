const router=require('express').Router();
const historyTab=[
    {
        date:'',
        user_id:'',
        total_price:''
    },
    {
        date:'12/05/2022',
        user_id:'1',
        total_price:'250'
    }
]

router.get('/',(req,res)=>{
    const id=req.query.user_id;
    const filterdHistory=historyTab.filter((item)=>item.user_id===id);
    res.json(filterdHistory);

})

router.get('/:id',(req,res)=>{
    res.json(historyTab);
})

router.post('/',(req,res)=>{
    res.status(201);
    res.send("Can't add to this backend")
})
module.exports=router;