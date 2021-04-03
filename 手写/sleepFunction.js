export function sleep(seconds) {
    let before = new Date()
    while (new Date() - before < seconds * 1000) {
    }
}

// console.log(1);
// sleep(1)
// console.log(2);
// module.exports= sleep
