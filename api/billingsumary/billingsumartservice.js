const _ = required ('lodash')
const BillingCycle = require('../billingCycle/billingCycle')


function getSumary(req,res){
    BillingCycle.aggregate({
        $project: {credit: {$sum:$credit}, debt: {$sum:"debts.value"}}
    },{
        $group: { _id: null , credit: {$sum: "$credit"}, debt {$sum: "$debt"}
    } 
    },{

        $project: {_id: 0, credit:1, debt:1} 
    }, function (error,result){
        if(error){
            res.status(500).json({errors: [error]})
        } else{
            res.json(_.defauls(result[0],{crdt:0,debt:0}))
        }
                
    })
}

module.exports ={ getSumary }