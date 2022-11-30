

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import Cargos from "App/Models/cargo";
import CargoValidator from 'App/Validators/CargoValidator';



/////////////////////////////////////// %% list %%//////////////////////////////////////////////////////////////
export default class CargosController {

                                                                                                //sucesso

   public async index({ response }: HttpContextContract) {
     const cargos = await Cargos.query().preload("funcionarios")

      response.status(201)
      return{
        message: 'Listagem do Cargos:',
        data: cargos
      }
    }



  
/////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////////////

  public async store({request, response}: HttpContextContract){
                                                                                                 //sucesso       
    const body = await request.validate(CargoValidator)
    

    const cargos = await Cargos.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `A descrição do novo Cargo ${cargos.dsc_cargo} foi inserido com sucesso !!`,
      Date: cargos,
    }
  }

/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                                  //sucesso
    return Cargos.findOrFail(`${id}`) 
         
  }


/////////////////////////////////////// %% update %%//////////////////////////////////////////////////////////
   public async update({params, request}: HttpContextContract ) {
                                                                                                  //sucesso
              const body = await request.validate(CargoValidator)    
                
              const cargo = await  Cargos.findOrFail(params.id);
                
              cargo.dsc_cargo  = body.dsc_cargo                             
                   
                
              await cargo.save()
                
              return{ 
              
              message: `Update do campo ${cargo.dsc_cargo} realizado com sucesso.`,
              data: cargo,
              }
}



/////////////////////////////////////// %% delete %%//////////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {                                 //sucesso
  
    const cargos = await  Cargos.findOrFail(params.id)
    
    if (cargos.id != cargos.id ){
      return response.status(401);
    }

   await cargos.delete()
   return {
    
    message:`Cargo ${cargos.dsc_cargo} Excluído com sucesso!`,
    descrição:cargos
    
   }
  
  }
}
