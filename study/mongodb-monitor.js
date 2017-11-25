var healthCheckMongodb = require('health-check-mongodb');

healthCheckMongodb.do([{
    url: 'mongodb://mongodb:mongodb@10.0.0.100:27017/admin'
 }, {
    url: 'mongodb://mongodb:mongodb@10.0.0.100:27017/admin'
 }])
   .then(r => {
     console.log(r);
     /*
     { health: false,
       success: 1,
       error: 1,
       details: 
        [ { name: 'mongodb://validUrl:41140/dbValid',
            health: true,
            message: '' },
          { name: 'mongodb://invalidUrl:41140/dbInvalid',
            health: false,
            message: 'getaddrinfo ENOTFOUND invalidUrl:41140' } ] }     
     */
   })
   .catch(r => {
     console.log(r);
   });