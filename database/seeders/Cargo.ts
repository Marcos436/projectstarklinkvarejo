import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cargo from 'App/Models/cargo'

export default class extends BaseSeeder {
  public async run () {
    await Cargo.createMany ([
      {dsc_cargo: "Desenvolvedor", funcionario_id: 1},

      {dsc_cargo: "designer", funcionario_id: 2},

      {dsc_cargo: "Redator", funcionario_id: 3},

      {dsc_cargo: "Analista", funcionario_id: 4},

      {dsc_cargo: "empacotador", funcionario_id: 5},
      
      {dsc_cargo: "vendedor", funcionario_id: 2}
   ])
  }
}
