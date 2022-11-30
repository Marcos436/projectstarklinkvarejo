import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CargoValidator {
  constructor(protected ctx: HttpContextContract) {

    
  }
  public schema = schema.create({

           
   dsc_cargo: schema.string({trim: true},[
       
     rules.maxLength(20),  // o campo não pode passar o maximo de caracteres
     rules.required(),    // O campo passar a ser obrigatorio
     rules.unique({ table: 'cargos', column: 'dsc_cargo' }),  //garantir que o valor NÃO exista dentro de uma determinada tabela e coluna do banco de dados.
     rules.alpha({allow: ['space', 'underscore', 'dash']})  //permitir que a string tenha espaços, traços e caracteres de sublinhado.

   ]),  
   

  });

   

  public messages: CustomMessages = {
   'maxLength': 'O campo não pode ultrapassar  {{ options.maxLength }} caracteres ',
    'required': 'O Campo e obrigatorio',
    'unique': 'O valor do campo inserido já existe.',
    'alpha':'O campo inserido não permitir numeral '
  }

}
