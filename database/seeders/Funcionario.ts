import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {
        nome: 'Marcos Vinicius',
        cpf: '687.459.452-88',
        matricula: 984566,
        telefone: 619854253,
        email: 'marcosvos@gmail.com',
        estado_civil: 'S',
        genero: 'M',
        dt_nascimento: "1996,7,21",
        enderecoId: 1,
        cargoId: 1,
        setorId: 1
      },
      {
        nome: 'Miguel',
        cpf: '777.888.999-10',
        matricula: 745642,
        telefone: 619994756,
        email: 'miguel@gmail',
        estado_civil: 'S',
        genero: 'M',
        dt_nascimento: "2001,7,2",        
        enderecoId: 2,
        cargoId: 2,
        setorId: 2
      },
      {
        nome: 'Walesca',
        cpf: '111.545.789-11',
        matricula: 21212112,
        telefone: 619874123,
        email: 'walesca@gmail.com',
        estado_civil: 'C',
        genero: 'F',
        dt_nascimento: "1998,1,10)",
        enderecoId: 3,
        cargoId: 3,
        setorId: 3
      },
      {
        nome: 'Brenda de oliveira',
        cpf: '456,879,123-33',
        matricula: 454678965,
        telefone: 619625844,
        email: 'brenda12@gmail',
        estado_civil: 'C',
        genero: 'F',
        dt_nascimento: "2000,8,10)",
        enderecoId: 4,
        cargoId: 4,
        setorId: 4
      },
      {
        nome: 'Withene Castro de Santos',
        cpf: '989.745.452-77',
        matricula: 44578885,
        telefone: 619898452,
        email: 'whithenecastro@gmail.com',
        estado_civil: 'S',
        genero: 'M',
        dt_nascimento: "1999,7,20)",
        enderecoId: 5,
        cargoId: 5,
        setorId: 5
      },
      {
        nome: 'Farias Mopeqno segundo',
        cpf: '741.842.998-44',
        matricula: 99986544,
        telefone: 619888976,
        email: 'mopeqnofarias@gmail.com',
        estado_civil: 'S',
        genero: 'M',
        dt_nascimento: "2000,10,12",
        enderecoId: 6,
        cargoId: 6,
        setorId: 6
      },
     /* {
        nome: 'Lênin santos araujo',
        cpf: '444.745.987-12',
        matricula: 11255874,
        telefone: 619877554,
        email: 'lenin@gmail.com',
        estado_civil: 'S',
        genero: 'M',
        dt_nascimento: "1995,4,15)"
        enderecoId: 7,
        cargoId: 7,
        setorId: 7
      },
      {
        nome: 'Debora martins de Castro',
        cpf: '998.785.741-66',
        matricula: 44461246,
        telefone: 619864215,
        email: 'debora@gmail.com',
        estado_civil: 'S',
        genero: 'F',
        dt_nascimento: "2001,7,30)"
        enderecoId: 8,
        cargoId: 8,
        setorId: 8
      },
      {
        nome: 'Paulo de Oliveira Santos',
        cpf: '454.878.455-33',
        matricula: 11145662,
        telefone: 61988763,
        email: 'paulo@gmail.com',
        estado_civil: 'C',
        genero: 'M',
        dt_nascimento: "1999,12,10",
        enderecoId: 9,
        cargoId: 9,
        setorId: 9
      },
      {
        nome: 'Rafael dalthon rogerin de souza caio',
        cpf: '454.741.544-88',
        matricula: 45533132,
        telefone: 619898522,
        email: 'rafaeldrsaouzacaio@gmail.com',
        estado_civil: 'S',
        genero: 'M',
        dt_nascimento: "2000,10,10",
        enderecoId: 10,
        cargoId: 10,
        setorId: 10
      }*/
      
    ])
  }
}
