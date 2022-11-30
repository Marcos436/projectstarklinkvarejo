import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Notafiscal from "App/Models/notasFiscai";
import NotasFiscaiValidator from 'App/Validators/NotasFiscaiValidator';
 

/////////////////////////////////////// %% list %%/////////////////////////////////////////////////////
export default class NotasFiscaisController {
   
  
  public async index({ response }: HttpContextContract) {
    const notafiscal = await Notafiscal.query().preload("produtos")

     response.status(201)
     return{
       message: 'Listagem do marcas:',
       data: notafiscal
     }
   }
/////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

  public async store({request, response}: HttpContextContract){
                                                                                          //sucesso       
    const body = await request.validate(NotasFiscaiValidator)
    
    const notafiscal = await Notafiscal.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `Nota Fiscal ${notafiscal.id} cadastrada com sucesso`,
      Date: notafiscal,
    }
  }


/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                        //sucesso
    return Notafiscal.findOrFail(`${id}`) 
         
  }


   /////////////////////////////////////// %% update %%/////////////////////////////////////////////////////
   public async update({params, request}: HttpContextContract ) {
    //sucesso
              const body = await request.validate(NotasFiscaiValidator)    
                
              const notafiscal = await  Notafiscal.findOrFail(params.id);
                
              notafiscal.dt_nota  = body.dt_nota       
              notafiscal.clienteId  = body.cliente_id       
              notafiscal.tipo_pagamentoId  = body.tipo_pagamento_id       
                   
                
              await notafiscal.save()
                
              return{ 
              
              message: `Update do campo da Nota fiscal ${notafiscal.id} realizado com sucesso`,
              data: notafiscal,
              }
}



   /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {
  
    const notafiscal = await  Notafiscal.findOrFail(params.id)
    
    if (notafiscal.id != notafiscal.id ){
      return response.status(401);
    }

   await notafiscal.delete()
   return {
    
    message:`Nota fiscal ${notafiscal.id} Excluída com sucesso`,
    descrição:notafiscal
    
   }
  
  }
}
