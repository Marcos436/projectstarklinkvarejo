import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'




import Marca from "App/Models/marca";
import MarcaValidator from 'App/Validators/MarcaValidator';
 

/////////////////////////////////////// %% list %%/////////////////////////////////////////////////////
export default class MarcasController {
  
  
  public async index({ response }: HttpContextContract) {
    const marcas = await Marca.all()

     response.status(201)
     return{
       message: 'Listagem do marcas:',
       data: marcas
     }
   }
/////////////////////////////////////// %% insert %%/////////////////////////////////////////////////////

  public async store({request, response}: HttpContextContract){
                                                                                          //sucesso       
    const body = await request.validate(MarcaValidator)
    
    const marca = await Marca.create(body)
    
    response.status(201)  //status : 201 msg: de sucesso para a inserção

    return{
      message: `Nova marca ${marca.marca} Cadastrada com sucesso`,
      Date: marca,
    }
  }


/////////////////////////////////////// %%  list por ID  %%/////////////////////////////////////////////////////
  show({ request }: HttpContextContract ) {   
 
    const id = request.param("id")      
                                                                                        //sucesso
    return Marca.findOrFail(`${id}`) 
         
  }


   /////////////////////////////////////// %% update %%/////////////////////////////////////////////////////
   public async update({params, request}: HttpContextContract ) {
    //sucesso
              const body = await request.validate(MarcaValidator)    
                
              const marca = await  Marca.findOrFail(params.id);
                
              marca.dsc_produto  = body.dsc_produto       
              marca.marca  = body.marca       
              marca.departamento  = body.departamento       
              marca.preco  = body.preco       
              marca.quantidade  = body.quantidade       
                   
                
              await marca.save()
                
              return{ 
              
              message: `Update do campo Marca realizado com sucesso`,
              data: marca,
              }
}



   /////////////////////////////////////// %% delete %%/////////////////////////////////////////////////////
  public async destroy({params,response}:HttpContextContract ) {
  
    const marca = await  Marca.findOrFail(params.id)
    
    if (marca.id != marca.id ){
      return response.status(401);
    }

   await marca.delete()
   return {
    
    message:`Marca ${marca.marca} Realizado com sucesso!`,
    descrição:marca
    
   }
  
  }
}
