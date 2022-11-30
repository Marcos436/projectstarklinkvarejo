import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Setore from 'App/Models/Setore'

export default class extends BaseSeeder {
  public async run () {
    await Setore.createMany([
      {
        dsc_setor: 'eletronico'
      },
      {
        dsc_setor: 'midia'
      },
      {
        dsc_setor: 'software'
      }
    ])
  }
}
