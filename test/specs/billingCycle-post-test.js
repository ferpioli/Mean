describe("service: BillingCycle", ()=>{

  describe("POST /api/billingCycles", ()=>{

      describe("status 201", ()=> {

        let cycle = {
          "name": "fevereiro/17",
    "month": 2,
    "year": 2017,

          debts: [
        {
            name: "telefone",
            value: 89.58,
            status: "PAGO",
        }

    ],
    credits: [
        {
            name: "salario Empresa",
            value: 6500,
        }
    ]
        }

        it("cadastrar novo mes", done =>{
           request
              .post('/api/billingCycles')
              .send(cycle)
              .expect(201)
              .end((err,res) =>{
                done(err);
              })
        })

      })
  })
})
