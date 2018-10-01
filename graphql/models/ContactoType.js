import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql'

const ContactoType = new GraphQLObjectType({
    name:'ContactoType',
    fields:{
        email:{
            type:GraphQLString
        },
        mensaje:{type:GraphQLString},
        created_At:{
            type:GraphQLString
        }
    }
    
})
export default ContactoType