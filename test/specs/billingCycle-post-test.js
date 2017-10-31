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

        beforeEach(done =>{
          MongoClient.connect(mongo_uri,(err, db) =>{
            db.collection("billingCycle").deleteMany(cycle, (err, res)=>{
              db.close();
              done(err);
            });
          })
        })

        it("cadastrar novo mes", done =>{
           request
              .post('/api/billingCycles')
              .send(cycle)
              .expect(201)
              .end((err,res) =>{
                done(err);
              });
        });

      });

      describe("Status 400",()=>{
        let cycle_ano_min = {
          "name": "fevereiro/17",
          "month": 2,
          "year": 2,
          debts: [
        {
            name: "telefone",
            value: 55.89,
            status: "PAGO",
        }
    ],
    credits: [
        {
            name: "salario Empresa",
            value: 4500,
        }
    ]
        }

        it("Ano minimo",done =>{
          request
            .post('/api/billingCycles')
            .send(cycle_ano_min)
            .expect(400)
            .end((err, res)=> {
              expect(res.body.message).to.contain("informado é menor que o limite minimo ");
              done(err);
            });

        });
        let cycle_ano_max = {
          "name": "fevereiro/17",
          "month": 2,
          "year": 2017,
          debts: [
        {
            name: "telefone",
            value: 55.89,
            status: "PAGO",
        }
    ],
    credits: [
        {
            name: "salario Empresa",
            value: 4500,
        }
    ]
        }


        it("Ano Maximo",done =>{
          request
          .post('api/billingCycles')
          .send(cycle_ano_max)
          .expect(400)
          .end((err,res)=>{
              expect(res.body.message).to.contain("informado é maior do que o limite maximo");
              done(err)
          })
        })

      });


  });
});
