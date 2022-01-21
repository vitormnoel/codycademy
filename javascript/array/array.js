let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop()

//console.log(secretMessage.length)

secretMessage.push('to', 'Program')

//console.log(secretMessage)

let changeW = secretMessage.indexOf('easily')

secretMessage[changeW] = 'right'

secretMessage.shift()

secretMessage.unshift('Programming')

changeW = secretMessage.indexOf('get')

secretMessage.splice((changeW+1), 4)

secretMessage[changeW] = 'know,'

console.log(secretMessage.join(' '))