import Contacto from '../models/contacto'

export const registrarContacto = (email,mensaje,req)=>{
    return  new Contacto({email,mensaje}).save()
}