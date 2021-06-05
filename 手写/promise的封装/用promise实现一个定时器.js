function timer(delay) {
    return new Promise(((resolve, reject) => {
            setTimeout(reject, delay)
        })
    )
}
timer(2000).then(()=>{console.log('China')},()=>{console.log('no')})