import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Marca from 'App/Models/Marca'

export default class extends BaseSeeder {
  public async run () {
    await Marca.createMany([
      {
          dsc_produto: 'mouse',
          marca: 'logitech',
          departamento: 'Eletrônico',
          preco: 1.200,
          quantidade: 100
      },
      {
          dsc_produto: 'teclado',
          marca: 'logitech',
          departamento: 'Eletrônico',
          preco: 1.200,
          quantidade: 100
      },
      {
          dsc_produto: 'teclado',
          marca: 'hyperex',
          departamento: 'Eletrônico',
          preco: 1.200,
          quantidade: 50
      },
      {
          dsc_produto: 'mouse',
          marca: 'hyperex',
          departamento: 'Eletrônico',
          preco: 200,
          quantidade: 10
      },
      {
          dsc_produto: 'mouse',
          marca: 'logitech',
          departamento: 'Eletrônico',
          preco: 1.200,
          quantidade: 100
      },
      {
          dsc_produto: 'mousepad',
          marca: 'samsung',
          departamento: 'Eletrônico',
          preco: 100,
          quantidade: 1000
      },
      {
          dsc_produto: 'monitor',
          marca: 'asus',
          departamento: 'Eletrônico',
          preco: 5.000,
          quantidade: 1000
      },
      {
          dsc_produto: 'cadeira gamer hyperax',
          marca: 'hyperaX',
          departamento: 'Eletrônico',
          preco: 1.800,
          quantidade: 100
      },
      {
          dsc_produto: 'monitor LG',
          marca: 'LG',
          departamento: 'Eletrônico',
          preco: 1.500,
          quantidade: 2000
      },
      {
          dsc_produto: 'teclado g915 tkl',
          marca: 'logitech',
          departamento: 'Eletrônico',
          preco: 1.200,
          quantidade: 500
      }
    ])
  }
}
