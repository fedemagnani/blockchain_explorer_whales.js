const fs = require('fs');
const WebSocket = require('ws');
const path = require('path')
var atLeast=100
const ws = new WebSocket('wss://ws.blockchain.info/inv');
var w ={}
var log = ''
if(!fs.existsSync(path.join(__dirname,"whales.json"))){
    fs.writeFileSync(path.join(__dirname,"whales.json"),JSON.stringify(w))
}else{
    w = JSON.parse(fs.readFileSync(path.join(__dirname,"whales.json")))
}
if(!fs.existsSync(path.join(__dirname,"log.txt"))){
    fs.writeFileSync(path.join(__dirname,"log.txt"),log)
}else{
    log = fs.readFileSync(path.join(__dirname,"log.txt"))
}
var mess = {
    "op": "unconfirmed_sub"
  }

ws.on('open', function open() {
    ws.send(`${JSON.stringify(mess)}`)
});

ws.on('message', function incoming(data) {
    var hash = JSON.parse(data).x.hash
    var correctTransactions = JSON.parse(data).x.out.map((x,i)=>{
        x.hash=hash
        x.value = x.value*Math.pow(10,-8)
        return x
    })
    for(var i=0;i<correctTransactions.length;i++){
        if(correctTransactions[i].value>atLeast){
            var message = `[${new Date().toLocaleString()}] Address ${correctTransactions[i].addr} received ${Number(correctTransactions[i].value)} BTC (hash:${correctTransactions[i].hash})`
            console.log(new Date().toLocaleString(),`Address ${correctTransactions[i].addr} received`,Number(correctTransactions[i].value),`BTC (hash:${correctTransactions[i].hash})`)
            if (w[correctTransactions[i].addr]){
                w[correctTransactions[i].addr].received+=correctTransactions[i].value
                w[correctTransactions[i].addr].trx_counter+=1 
            }else{
                var val=correctTransactions[i].value
                w[correctTransactions[i].addr]={
                    received:val,
                    trx_counter:1
                }
            }
            log+=(message+"\n")
            fs.writeFileSync(path.join(__dirname,"whales.json"),JSON.stringify(w))
            fs.writeFileSync(path.join(__dirname,"log.txt"),log)
            console.log("\x1b[42m","updated whales file!","\x1b[0m")        
        }
    }
});

