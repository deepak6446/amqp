/* 
in fanout exchange messages will be published to all exchanges  
*/

var queue = "deepak6446"

var amqp = require('amqplib');

let producer = amqp.connect("amqp://fpygrkwl:NocIt_6f0l8l6-EIuDaWmpEoMPWmHe9a@beaver.rmq.cloudamqp.com/fpygrkwl");

producer.then(function (conn) {
 return conn.createConfirmChannel().then(function (ch) {
   ch.assertQueue(queue, { autoDelete: false })
     .then((data) => {
       console.log(data);
       ch.sendToQueue(queue, content = new Buffer("Hello World!"));
     })
 });
}).then(null, function (err) {
 console.error(err);
});