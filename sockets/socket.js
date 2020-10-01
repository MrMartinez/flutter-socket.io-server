

const {io} = require('../index');

io.on('connection', client => {
    console.log('Cliente conecatado'); 
  
    client.on('disconnect', () => { 
      console.log('Cliente desconectado');
   });

   client.on('mensaje', (payload) =>{
       console.log('Escuchando el mensaje!!!',payload);

       io.emit('mensaje', {admin: 'Nuevo mensaje desde el servidor'});
   });
});
