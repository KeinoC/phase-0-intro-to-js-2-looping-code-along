function writeCards (list,eventType) {
    let thankYous = []
    for (let i = 0; i < list.length; i++) {
    let thanks = `Thank you, ${list[i]}, for the wonderful ${eventType} gift!`
    thankYous.push(thanks)
    }
return thankYous
}

function countDown(number) {
    for (let i = number; i >=0; i--) {
        console.log(i)
}
}