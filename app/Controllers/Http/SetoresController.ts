import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Setore from 'App/Models/setore';

import Setores from "App/Models/setore";
import SetoreValidator from 'App/Validators/SetoreValidator';

/////////////////////////////////////// %% list %%/////////////////////////////////////////////////////
export default class NotasController {
 
  public async index({ response }: HttpContextContract) {
    const setores = await Setore.query().preload("funcionarios")

     response.status(201)
     return{
       message: 'Listagem do setores:',
       data: setores
     }
   }
/////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

  public async store({request, response}: HttpContextContract){
                                                                                          //sucesso       
    const body = await request.validate(SetoreValidator)
    
    const setor = await Setores.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `Cadastro do Setor${setor.dsc_setor}, realizado com sucesso!!`,
      Date: setor,
    }
  }


/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                        //sucesso
    return Setores.findOrFail(`${id}`) 
         
  }


   /////////////////////////////////////// %% update %%/////////////////////////////////////////////////////
   public async update({params, request}: HttpContextContract ) {
                                                                                         //sucesso
            const body = request.body()    

            const setor = await  Setores.findOrFail(params.id);

            setor.dsc_setor  = body.dsc_setor       
                 

            await setor.save()

            return{
            
            message: `Update do campo setor realizado com sucesso`,
            data: setor,
            }
            }



   /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {
  
    const setor = await  Setores.findOrFail(params.id)
    
    if (setor.id != setor.id ){
      return response.status(401);
    }

   await setor.delete()
   return {
    
    message:`Setor ${setor.dsc_setor}, Excluído com sucesso!`,
    descrição:setor
    
   }
  
  }
}