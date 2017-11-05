const _ = require('lodash')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators: true })
BillingCycle.after('post',sendErrosOrNext).after('put',sendErrosOrNext)

function sendErrosOrNext(req, res, next) {
  const bundle = res.locals.bundle
  if(bundle.errors) {
    var errors = parseErros(bundle.errors)
    res.status(500).json({errors})

  }else{
    next()
  }
}

function parseErros(nodeRestfulErrors){
  const erros = []
  _.forIn(nodeRestfulErrors, error => erros.push(error.message))
  return errors
}


BillingCycle.route('count',function(req, res, next) {
  BillingCycle.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error] } )
    } else {
      res.json({value})
    }
  })
})

module.exports = BillingCycle
