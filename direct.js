/* 
 in direct exchange amqp, message will be published to exchange based on routing key
*/
var queue = "deepakdirect"
var exchangeName = "deepakdirect"
var routingKey = "deepakdirect"
var amqp = require('amqplib');
var exchangeType = "direct"

let producer = amqp.connect("amqp://fpygrkwl:NocIt_6f0l8l6-EIuDaWmpEoMPWmHe9a@beaver.rmq.cloudamqp.com/fpygrkwl");

producer.then(function (conn) {
 return conn.createConfirmChannel().then(function (ch) {
   ch.assertQueue(queue, { autoDelete: false })
     .then((data) => {
       console.log("====data", data);
        ch.assertExchange(exchangeName, exchangeType, { autoDelete: false })
        .then(
          function(da){
            console.log("-------assert exchange done", da)  
            ch.bindQueue(queue, exchangeName, routingKey)
            .then(function(d){
                console.log("error in bing routingkey", d)
                ch.publish(exchangeName, routingKey, content = new Buffer("Hello World!"),function (err, ok) {
                  console.log(err, ok)
                    console.error("Error: failed to send message\n" + err);
                  conn.close();
                });            
            })
          
        })
     })
 });
}).then(null, function (err) {
 console.error(err);
});