import { GraphQLServer } from 'graphql-yoga'
import { GraphQLSchema } from 'graphql'
import schema from './QueryRoot'



const options = { port: 4000 }
const server = new GraphQLServer({ schema })
server.start(options, () => console.log('Server is running on localhost:' + options.port))
