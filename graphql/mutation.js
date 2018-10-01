import ContactoType from './models/ContactoType'
import * as Api from '../db/api/contacto'

import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql'

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        registrarContacto:{
            type:ContactoType,
            args:{
                email:{type:GraphQLString},
                mensaje:{type:GraphQLString}
            },
            resolve(parent,{email,mensaje},req){
                return Api.registrarContacto(email,mensaje)
            }
        }
    }
})

export default Mutation