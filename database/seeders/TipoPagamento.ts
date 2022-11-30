import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TipoPagamento from 'App/Models/TipoPagamento'

export default class extends BaseSeeder {
  public async run () {
    await TipoPagamento.createMany([
      {
        dsc_tipo_pagamento: 'dinheiro'
      },
      {
        dsc_tipo_pagamento: 'credito'
      },
      {
        dsc_tipo_pagamento: 'debito'
      }
    ])
  }
}
