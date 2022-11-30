import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({    /// schema  e = a banco

             nome : schema.string([

              rules.required(),        ///// campo tem que ter valor obrigatorio  !
              rules.maxLength(50),      ///// no maximo x caractere
              rules.alpha({allow: ['space']})  //// o campo tem que conter string e pode conter space !
             ]),
             cpf : schema.string([
 
              rules.required(),  ///// campo tem que ter valor obrigatorio  !
              rules.minLength(14),   ///// no minimo x caractere
              rules.maxLength(22), ///// no maximo x caractere
              rules.unique({ table: 'funcionarios', column: 'cpf' })

              

             ]),
             matricula : schema.number([

              rules.required(),   ///// campo tem que ter valor obrigatorio  !

             ]),
             telefone : schema.number(),
                 email: schema.string([    
                   rules.unique({ table: 'Funcionarios', column: 'email' }),     // /// não pode conter o mesmo valor na tabela/coluna
                   rules.email({       
                     ignoreMaxLength: true,   ////  ignorar comprimento máximo
                     allowIpDomain: false,  //// permitir Domínio Ip
                 domainSpecificValidation: false, //// validação específica de domínio
                       }),
                   rules.normalizeEmail({
                     allLowercase: true,    //// todas as letras minúsculas
                     gmailRemoveDots: false,  //// gmail remover pontos
                     gmailRemoveSubaddress: true, //// gmail Remover sub-endereço
                   }),
    ]),
             estado_civil : schema.string([
              
                    rules.required(),           ///// campo tem que ter valor obrigatorio  !
                    rules.maxLength(50),      ///// no maximo x caractere 

             ]),

             genero : schema.string([
                      
                rules.maxLength(1)        ///// no maximo x caractere 

             ]),
             dt_nascimento : schema.string([
              rules.required()                  ///// campo tem que ter valor obrigatorio  !
             ]),
             enderecoId : schema.number([
              rules.required()                                ///// campo tem que ter valor obrigatorio  !
             ]),                     
             cargoId : schema.number([ 
              rules.required()                                        ///// campo tem que ter valor obrigatorio  !    
             ]),
             setorId : schema.number([
              rules.required()                                        ///// campo tem que ter valor obrigatorio  !  
             ]),
 
  })
  
  public messages: CustomMessages = {

    'file.size': 'O tamanho do arquivo deve estar abaixo {{ options.size }}',
    'file.extname': 'O arquivo deve ter um dos {{ options.extnames }} nomes de extensão',
    'password_confirmation.confirmed': 'Senha não confere',
    'maxLength': 'O campo pode conter no máximo {{ options.maxLength }} comprimento do caractere',
    'minLength': 'O campo pode conter no mínimo {{ options.minLength }} comprimento do caractere',
    'required': 'Campo {{ options.required }} obrigatorio ! ',
    'unique': 'Já existe usuario cadastrado com esse dados  !'

  }
}
