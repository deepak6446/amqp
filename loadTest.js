amqpListener = require("/home/dpoo@eur.ad.sag/Desktop/irepo/integration-connectors/listener/providers/amqp/v1")

let input = {
    q: "testing",
    connection: {
        amqpUrl: "amqp://guest:guest@localhost:5672/"
    },
    exchange_info: {
        exchange_type: "unselected"
    }
}

const execute = (message) => {
    console.log("in execute", message.content)
    try {
        if (message.content == "0") message.content = "["+ message.content 
        else if (message.content == "9") message.content = ", " + message.content + "]"
        else message.content = ", " + message.content 
        require('fs').appendFile("outFileCounter.txt", message.content, (err)=> {
            if (err) console.log("error in execute", err)
        })    
    } catch (error) {
        console.log(error)
    }
}

let options  ={
    execute
}
amqp = new amqpListener()
console.log(amqp)
amqp.register(input, options, (e, d)=> {
    console.log("-------callback", e, d)
})