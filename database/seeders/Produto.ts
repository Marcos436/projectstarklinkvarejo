import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
    await Produto.createMany([
      {
        dsc_produto: 'mouse',
        departamento: 'Eletrônico',
        preco: 1.200,
        quantidade: 100,
        marcaId: 1,
        fornecedorId: 1,
        produtos_vendaId: 1
      },
      {
        dsc_produto: 'teclado',
        departamento: 'Eletrônico',
        preco:  1.200,
        quantidade: 100,
        marcaId: 2,
        fornecedorId: 2,
        produtos_vendaId:2
      },
      {
        dsc_produto: 'teclado',
        departamento: 'Eletrônico',
        preco: 1.200,
        quantidade: 50,
        marcaId: 3,
        fornecedorId: 3,
        produtos_vendaId: 3
      },
      {
        dsc_produto: 'teclado',
        departamento: 'Eletrônico',
        preco: 200,
        quantidade: 10,
        marcaId: 4,
        fornecedorId: 4,
        produtos_vendaId:4
      },
      {
        dsc_produto: 'mouse',
        departamento: 'Eletrônico',
        preco:  1.200,
        quantidade: 100,
        marcaId: 5,
        fornecedorId: 5,
        produtos_vendaId: 5
      },
      {
        dsc_produto: 'mousepad',
        departamento: 'Eletrônico',
        preco: 100,
        quantidade: 1000,
        marcaId: 6,
        fornecedorId: 6,
        produtos_vendaId: 6
      },
      {
        dsc_produto: 'monitor',
        departamento: 'Eletrônico',
        preco: 5000,
        quantidade: 1000,
        marcaId: 7,
        fornecedorId: 7,
        produtos_vendaId: 7
      },
      {
        dsc_produto: 'cadeira gamer hyperax',
        departamento: 'Eletrônico',
        preco: 1.800,
        quantidade: 100,
        marcaId: 8,
        fornecedorId: 8,
        produtos_vendaId: 8
      },
      {
        dsc_produto: 'monitor LG',
        departamento: 'Eletrônico',
        preco: 1.500,
        quantidade: 2000,
        marcaId: 9,
        fornecedorId: 9,
        produtos_vendaId: 9
      },
      {
        dsc_produto: 'teclado g915 tkl',
        departamento: 'Eletrônico',
        preco: 1.200,
        quantidade: 500,
        marcaId: 10,
        fornecedorId: 10,
        produtos_vendaId: 10
      }
    ])
  }
}
