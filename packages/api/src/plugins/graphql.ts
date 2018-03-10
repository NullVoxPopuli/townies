import { graphqlHapi } from "apollo-server-hapi";
const graphQLSchema = "";

export const ApolloServer = [
  {
    plugin: graphqlHapi,
    options: {
      path: "/graphql",
      graphqlOptions: {
        schema: graphQLSchema,
      },
      route: {
        cors: true,
      },
    },
  }, ,
];
