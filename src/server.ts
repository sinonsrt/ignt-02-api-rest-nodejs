import fastify from 'fastify';

const app = fastify();

app.get('/', async (req, res) => {
  res.send('Hello World');
});

app.listen({ port: 3333, host: 'localhost' }, () =>
  console.log('Server up 🚀')
);
