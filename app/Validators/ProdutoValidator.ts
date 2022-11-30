import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoValidator {
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
  public schema = schema.create({

    dsc_produto: schema.string({trim:true},[    //trim faz entrada valores com espaço a esquerda formatado sem o espaço no banco 
      rules.required(),     /////  campo e obrigatorio
      rules.maxLength(50),  ///// no maximo x caractere


    ]),
    departamento: schema.string([
            rules.required(),  ///// campo e obrigatorio
            rules.maxLength(30),   ///// no maximo x caractere

    ]),
    preco: schema.number([
      rules.required(),  /////  campo e obrigatorio
      
    ]),
    quantidade: schema.number([
      rules.required(),       /////  campo e obrigatorio
    ]),
    marcaId: schema.number([

      rules.required(),   ///// campo tem que ter valor obrigatorio  !

    ]),
    fornecedorId: schema.number([

      rules.required(),       ////     campo e obrigatorio

    ])

  })

 
  public messages: CustomMessages = {
    
    
    
    'maxLength': 'O campo pode conter no máximo {{ options.maxLength }} comprimento do caractere',
    'minLength': 'O campo pode conter no mínimo {{ options.minLength }} comprimento do caractere',
    'required': 'Campo {{ options.required }} obrigatorio ! ',
    'unique': 'Já existe usuario cadastrado com esse dados  !'




  }
}
