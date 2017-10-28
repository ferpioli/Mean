const mongoose = require('mongoose')
//module.exports = mongoose.connect('mongodb:localhost/db_finance')
module.exports = mongoose.connect('mongodb://localhost/db_finance', { useMongoClient: true })

mongoose.Error.messages.general.required = "o atributo '{PATH}' é obrigatorio."
mongoose.Error.messages.Number.min = "o '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = " O '{VALUE}' informado é maior que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum = " '{VALUE}' não é valido para o atributo '{PATH}'."
