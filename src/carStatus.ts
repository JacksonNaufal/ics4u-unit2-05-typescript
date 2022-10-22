/**
 * The program is the classic
 * JacksonStack program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-17
 */

// Imports
import Vehicle from './Vehicle'

// new Ford Focus
console.log('Created Ford focus')
const fordFocus = new Vehicle('white', 'B40-C4RR0', 4, 284)

console.log('Status:')
fordFocus.status()

console.log('Accelerating, 10 of power for 10 sec.')
fordFocus.accelerate(10, 10)
console.log(`New speed: ${String(fordFocus.getSpeed())}`)

console.log('Changing colour to black:')
fordFocus.setColor('black')
console.log(`New color: ${fordFocus.getColor()}`)

console.log('')

// new Ferrari
console.log('Created a Ferrari')
const ferrari = new Vehicle('red', 'VHD-35HU', 2, 320)

console.log('Status:')
ferrari.status()

console.log('Accelerating, 100 of power for 4 sec.')
ferrari.accelerate(100, 4)
console.log(`New speed: ${String(ferrari.getSpeed())}`)

console.log('Breaking, 10 of power for 10 sec.')
ferrari.break(10, 10)
console.log(`New speed: ${String(ferrari.getSpeed())}`)

console.log('Changing color:')
console.log(`New color: ${ferrari.getColor()}`)

console.log('')

// new Citroen Ami
console.log('Created a Citroen Ami')
const citroenAmi = new Vehicle('blue', 'FS-695-DQ', 2, 45)

console.log('Status:')
citroenAmi.status()

console.log('Accelerating, 5 of power for 10 sec.')
citroenAmi.accelerate(5, 10)
console.log(`New speed: ${String(citroenAmi.getSpeed())}`)

console.log('Breaking, 2 of power for 10 sec.')
citroenAmi.break(2, 10)
console.log(`New speed: ${String(citroenAmi.getSpeed())}`)

console.log('Changing color:')
citroenAmi.setColor('purple')
console.log(`New color: ${citroenAmi.getColor()}`)

// new Peel P50
console.log('\nCreated a Peel P50')
const peelP50 = new Vehicle('pink', 'FS-721-QT', 2, 135)

console.log('Status:')
peelP50.status()

console.log('Accelerating, 3 of power for 10 sec.')
peelP50.accelerate(3, 10)
console.log(`New speed: ${String(peelP50.getSpeed())}`)

console.log('Breaking, 1 of power for 10 sec.')
peelP50.break(1, 10)
console.log(`New speed: ${String(peelP50.getSpeed())}`)

console.log('Changing color:')
peelP50.setColor('red')
console.log(`New color: ${peelP50.getColor()}`)

// new Weiner Mobile
console.log('\nCreated a Weiner Mobile')
const weinerMobile = new Vehicle('orange', 'WY-324-DJ', 2, 175)

console.log('Status:')
weinerMobile.status()

console.log('Accelerating, 10 of power for 10 sec.')
weinerMobile.accelerate(10, 10)
console.log(`New speed: ${String(weinerMobile.getSpeed())}`)

console.log('Breaking, 3 of power for 10 sec.')
weinerMobile.break(3, 10)
console.log(`New speed: ${String(weinerMobile.getSpeed())}`)

console.log('Changing color:')
weinerMobile.setColor('red, yellow')
console.log(`New color: ${weinerMobile.getColor()}`)

console.log('\nDone.')
