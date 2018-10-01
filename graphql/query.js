import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql'

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        test:{
            type:GraphQLString,
            resolve(){
                return 'Hola Mundo Graphql'
            }
        }
    }
})

export default RootQuery