import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Endereco from "App/Models/endereco";
import EnderecoValidator from 'App/Validators/EnderecoValidator';
 

/////////////////////////////////////// %% list %%/////////////////////////////////////////////////////
export default class EnderecosController {
  public async index({ response }: HttpContextContract) {
    const endereco = await Endereco.query().preload('funcionarios').preload('fornecedores').preload('clientes')

     response.status(201)
     return{
       message: 'Listagem do Enderecos:',
       data: endereco
     }
   }
/////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

     async store({request}: HttpContextContract){
                                                                                                    //sucesso  
     
     
     
     const dados = request.only(['cep','logradouro','bairro','cidade'])
     return await Endereco.create(dados)
     
     
     
     
     
     
     
     }
     
     
     
     
     
                                                                                                    /*  
    const body = request.body()
     
    
    
    const endereco = await Endereco.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: ` O  novo endereco ${endereco.logradouro} foi inserido com sucesso !!`,
      Date: endereco,
    }
  }
*/

/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                                     //sucesso
    return Endereco.findOrFail(`${id}`) 
         
  }


   /////////////////////////////////////// %% update %%/////////////////////////////////////////////////////
  public async update({params, request}: HttpContextContract ) {
                                                                                                      //sucesso
         const body = await request.validate(EnderecoValidator)    
                                                                                    
         const endereco = await  Endereco.findOrFail(params.id);
      
            endereco.cep  = body.cep       
            endereco.logradouro  = body.logradouro     
            endereco.bairro   =  body.bairro    
            endereco.cidade   = body.cidade      

          await endereco.save()

    return{ 

      message: `Update do campo do endereco realizado com sucesso`,
      data: endereco,
  }
  }



   /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {
                                                                                                       //sucesso
    const endereco = await  Endereco.findOrFail(params.id)
    
    if (endereco.id != endereco.id ){
      return response.status(401);
    }

   await endereco.delete()
   return {
    
    message:`endereco ${endereco.logradouro} Excluído com sucesso!`,
    descrição:endereco
    
   }
  
  }
}
