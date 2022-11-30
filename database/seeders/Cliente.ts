import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
        nome: 'Jonas silva',
      cpf: '044.512.356-88',
      telefone: 6196535,
      genero: 'M',
      dt_nascimento: "1996,1,1",
      endereco_id: 1,
      email: 'Jonas@gmail.com'
      ,password:'j123456'
    },
    {
      nome: 'Kassia Pereira',
      cpf: '033.459.874-55',
      telefone: 61951563,
      genero: 'F',
      dt_nascimento: "2000,11,11",
      endereco_id: 2,
      email: 'kassiapereira@hotmail.com'
      ,password:'k2584'
    },
    {
      nome: 'Marcos Araujo',
      cpf: '033.485.874-55',
      telefone: 61951448,
      genero: 'M',
      dt_nascimento: "1997,1,2",
      endereco_id: 3,
      email: 'marcosA@hotmail.com'
      ,password:'m36524'
    },
    {
      nome: 'Julia castanha silva',
      cpf: '098.456.875-88',
      telefone: 61651563,
      genero: 'F',
      dt_nascimento: "1997,5,13",
      endereco_id: 4,
      email: 'juliacastanha@hotmail.com'
      ,password:'j985741'
    },
    {
      nome: 'Apoly terceiro silva',
      cpf: '033.456.874-55',
      telefone: 61985451,
      genero: 'M',
      dt_nascimento: "1996,11,3",
      endereco_id: 5,
      email: 'apolysilva@hotmail.com'
      ,password:'a6357'
    },
    {
      nome: 'Klaus Drag Seculus',
      cpf: '066.999.666-66',
      telefone: 6196996,
      genero: 'M',
      dt_nascimento: "1966,6,6",
      endereco_id: 6,
      email: 'klausdragseculos@gmail.com'
      ,password:'k9654789'
    },
    {
      nome: 'Nathalia ovelha carneiro',
      cpf: '879.456.898-58',
      telefone: 61951563,
      genero: 'F',
      dt_nascimento: "2000,2,8",
      endereco_id: 7,
      email: 'nathaliaovelha@hotmail.com'
      ,password:'n591753'
    },
    {
      nome: 'Santiago Londrina Pereira',
      cpf: '846.426.971-11',
      telefone: 61965157,
      genero: 'M',
      dt_nascimento: "1999,10,5",
      endereco_id: 8,
      email: 'santiagolondrina@gmail.com'
      ,password:'s654789'
    },
    {
      nome: 'Heitor Gabriel Tavares',
      cpf: '094.459.874-12',
      telefone: 61987200,
      genero: 'M',
      dt_nascimento: "2000,2,8",
      endereco_id: 9,
      email: 'heitogabriel@hotmail.com'
      ,password:'h963258'
    },
    {
      nome: 'Marcos Vinicius silva',
      cpf: '033.446.874-78',
      telefone: 61993500,
      genero: 'M',
      dt_nascimento: "2000,2,8",
      endereco_id: 10,
      email: 'marcosvsilva@hotmail.com'
      ,password:'m369951'
    }
  ])
  }
}
