import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({

  context: request => ({ request, isAuthenticated })
});

server.express.use(logger('dev'));

server.start({ port: PORT }, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);