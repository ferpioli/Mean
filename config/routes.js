const express = require('express')

module.exports= function(server){
  //API routes
  const router = express.Router()
  server.use('/api', router)

//rotas de api

//router.route('/teste').get(function(req,res,next){
  //res.send('funcionou')
//})
const billingCycleSevice = require('../api/billingCycle/billingCycleService')
billingCycleSevice.register(router, '/billingCycles')
const billingSummaryService = require('../api/billingSummary/billingSummaryService')
router.route('/billingSummary').get(billingSummaryService.getSummary)

}
