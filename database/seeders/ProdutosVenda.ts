import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProdutosVenda from 'App/Models/ProdutosVenda'

export default class extends BaseSeeder {
  public async run () {
    await ProdutosVenda.createMany([
      {
        dt_venda: new Date(2022,10,10),
        nota_fiscal_id: 1,
        cliente_id: 1,
        produto_id: 1
      },
      {
        dt_venda: new Date(2022,12,5),
        nota_fiscal_id: 2,
        cliente_id: 2,
        produto_id: 2
      },
      {
        dt_venda: new Date(2022,2,11),
        nota_fiscal_id: 3,
        cliente_id: 3,
        produto_id: 3
      },
      {
        dt_venda: new Date(2022,6,1),
        nota_fiscal_id: 4,
        cliente_id: 4,
        produto_id: 4
      },
      {
        dt_venda: new Date(2022,10,10),
        nota_fiscal_id: 5,
        cliente_id: 5,
        produto_id: 5
      },
      {
        dt_venda: new Date(2022,10,30),
        nota_fiscal_id: 6,
        cliente_id: 6,
        produto_id: 6
      },
      {
        dt_venda: new Date(2022,1,10),
        nota_fiscal_id: 7,
        cliente_id: 7,
        produto_id: 7
      },
      {
        dt_venda: new Date(2022,10,30),
        nota_fiscal_id: 8,
        cliente_id: 8,
        produto_id: 8
      },
      {
        dt_venda: new Date(2022,1,10),
        nota_fiscal_id: 9,
        cliente_id: 9,
        produto_id: 9
      },
      {
        dt_venda: new Date(2022,7,22),
        nota_fiscal_id: 10,
        cliente_id: 10,
        produto_id: 10
      }
    ])
  }
}
