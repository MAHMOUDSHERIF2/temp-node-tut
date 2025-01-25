const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method retursn system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} sec`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMwm: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)


