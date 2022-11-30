import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Endereco from 'App/Models/Endereco'

export default class extends BaseSeeder {
  public async run () {
    await Endereco.createMany([
    {
      cep: 72844661,
      logradouro: 'rua madeiros castanho', 
      bairro: 'setor O',  
      cidade: 'ceilandia'
    },
    {
      cep: 72000123,
      logradouro: 'rua 07 modulo 14 casa 23 ', 
      bairro: 'setor A',  
      cidade: 'guara'
    },
    {
      cep: 72006846,
      logradouro: 'rua axl modulo rose casa S', 
      bairro: 'setor B',  
      cidade: 'Brasilia'
    },
    {
      cep: 72844661,
      logradouro: 'rua madeiros castanho', 
      bairro: 'setor C',  
      cidade: 'ceilandia'
    },
    {
      cep: 7255461,
      logradouro: 'rua castro de oliveira', 
      bairro: 'setor d',  
      cidade: 'taguatinga'
    },
    {
      cep: 7284661,
      logradouro: 'rua 08 modulo 13 casa 67', 
      bairro: 'setor E',  
      cidade: 'formosa'
    },
    {
      cep: 7284661,
      logradouro: 'rua red ', 
      bairro: 'setor F',  
      cidade: 'ceilandia'
    },
    {
      cep: 7284561,
      logradouro: 'rua 12 modulo 18 casa 68', 
      bairro: 'setor O',  
      cidade: 'ceilandia'
    },
    {
      cep: 2845546,
      logradouro: 'rua madeiros castanho', 
      bairro: 'setor O',  
      cidade: 'brasilia'
    },
    {
      cep: 8455461,
      logradouro: 'rua drumont', 
      bairro: 'setor W',  
      cidade: 'brasilia'
    }
      
    
    ])
  }
}
