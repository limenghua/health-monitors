const elasticsearch = require('elasticsearch');

const host = {
    port:9000,
    auth:"elasticsearch:elasticsearch"
}
const client = elasticsearch.Client(
    {
        host:'http://elasticsearch:elasticsearch@localhost:9200'
    }
  );

  const callbackPing = error => {
    if (error) {
      console.log(error);
    } else {
      console.log('successd');
    }
  };

  client.ping({}, callbackPing);