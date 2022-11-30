import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import NotasFiscai from 'App/Models/NotasFiscai'

export default class extends BaseSeeder {
  public async run () {
    await NotasFiscai.createMany([
      {
        dt_nota: "2022-13-03",
        cliente_id: 1,
        tipo_pagamento_id: 1
      },
      {
        dt_nota: "2000-06-03",
        cliente_id: 2,
        tipo_pagamento_id: 2
      },
      {
        dt_nota: "2000-06-03",
        cliente_id: 3,
        tipo_pagamento_id: 3
      },
      {
        dt_nota: "2000-06-03",
        cliente_id: 1,
        tipo_pagamento_id: 1
      },
      {
        dt_nota: "2000-06-03",
        cliente_id: 2,
        tipo_pagamento_id: 2
      },
      {
        dt_nota: "2000-06-03",
        cliente_id: 2,
        tipo_pagamento_id: 2
      },
      {
        dt_nota: "2000-06-03",
        cliente_id: 1,
        tipo_pagamento_id: 1
      },
      {
        dt_nota: "2000-06-03",
        cliente_id: 3,
        tipo_pagamento_id: 3
      },
      {
        dt_nota: "2000-06-03",
        cliente_id: 3,
        tipo_pagamento_id: 3
      },
      {
        dt_nota: "2000-06-03",
        cliente_id: 1,
        tipo_pagamento_id: 1
      }
    ])
  }
}
