const randomV = (prefix="") => new Promise((resolve, reject) => {
    const v = Math.ceil(Math.random() * 20)
    if (v >= 10) resolve(prefix + v)
    else reject(prefix + v)
})
function errlog(str) {
    console.log(`${"\033[31m"}${str}${"\033[0m"}`)
}
function successlog(str) {
    console.log(`${"\033[32m"}${str}${"\033[0m"}`)
}
function warnlog(str) {
    console.log(`${"\033[33m"}${str}${"\033[0m"}`)
}



function PromiseWrap(originPromise) {
    this._promise = originPromise
    this._catchPromise = Promise.resolve()
        .then(() => this._promise)
        .catch(errlog)
    
    const methods = ['then', 'catch', 'finally']
    for (const method of methods) {
        this[method] = function(...args) {
            this._promise = this._promise[method](...args)
            return this
        }
    }
}

async function main() {
    // randomV().then(successlog).catch(errlog);
    const repeatTimes = new Array(5).fill(1)

    /* repeatTimes.forEach((v, idx) => {
        console.log("times:", idx)
        randomV().then(console.log).catch(console.error)
    }) */

    repeatTimes.forEach((v, idx) => {
        new PromiseWrap(randomV(`deafult times [${idx + 1}]:`)).then(successlog)
    })
    repeatTimes.forEach((v, idx) => {
        new PromiseWrap(randomV(`custom times [${idx + 1}]:`)).then(successlog).catch(warnlog)
    })

    const a = randomV("test attr:").then(warnlog).catch(errlog)
    
    const b = await randomV("Test Async/Await")
    warnlog(b)
}
// main()


const fulfill = (tag) => (msg) => {successlog(`fulfill[${tag}]`+msg); return msg}
const rejected = (tag) => (msg) => {errlog(`rejected[${tag}]` + msg); return msg}

const promisechain = () => {
    const arr = new Array(5).fill(1)
    let promise
    arr.forEach((v, idx) => {
        promise = randomV(`chain[${idx+1}]:`).then(fulfill(idx+1), rejected(idx+1))
    })
    return promise
}

promisechain().then(v => {
    console.log("Here is result:", v)
}).catch(e => {
    console.error("here is err:", e)
})
