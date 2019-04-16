import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql'



import typeDefs from './typeDefs'


import { makeExecutableSchema } from 'graphql-tools'


import fetch from 'node-fetch'

const resolvers  = {
 
  Query: {
    topMenus(parent, args, ctx, resolverInfo) {
        return {
          unimplemented:true
        }
      
    },
    pages(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    pageByName(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    pageByUrl(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    broadwayShows(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    broadwayShow(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    carousel(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    categories(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    performanceDates(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    performances(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    acrossTheUs(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    acrosstheUsTime(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    },
    feeds() {
      
      return {
        unimplemented:true
      }
    },
    feedDetail(parent, args, ctx, resolverInfo) {
      return {
        unimplemented:true
      }
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})


export default schema
