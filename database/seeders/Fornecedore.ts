import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedore from 'App/Models/Fornecedore'

export default class extends BaseSeeder {
  public async run () {
    await Fornecedore.createMany([
      {
        nome_comercial: 'BSBTech',
        cnpj: '456123/1231',
        telefone: 629814431,
        endereco_id: 1
      },
      {
        nome_comercial: 'logitech',
        cnpj: '155568/132202',
        telefone: 619863314,
        endereco_id: 2
      },
      {
        nome_comercial: 'hypeX',
        cnpj: '461321231/4566',
        telefone: 621632332,
        endereco_id: 3
      },
      {
        nome_comercial: 'samsung',
        cnpj: '88871232/44466',
        telefone: 629542313,
        endereco_id: 4
      },
      {
        nome_comercial: 'motorola',
        cnpj: '545611231/4161',
        telefone: 614446651,
        endereco_id: 5
      },
      {
        nome_comercial: 'redNos',
        cnpj: '3543123132/312313',
        telefone: 618765222,
        endereco_id: 6
      },
      {
        nome_comercial: 'Multilaser',
        cnpj: '77874542/231323',
        telefone: 629895332,
        endereco_id: 7
      },
      {
        nome_comercial: 'AOC',
        cnpj: '13212312/1112',
        telefone: 619842123,
        endereco_id: 8
      },
      {
        nome_comercial: 'ASUS',
        cnpj: '00055/7893613',
        telefone: 609849456,
        endereco_id: 9
      },
      {
        nome_comercial: 'LG',
        cnpj: '131231212344/454',
        telefone: 629946545,
        endereco_id: 10
      }
    ])
  }
}
