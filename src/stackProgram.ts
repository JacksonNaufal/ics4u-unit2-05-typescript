/**
 * The program is the classic
 * JacksonStack program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-17
 */

// Imports
import JacksonStack from './JacksonStack'
import promptSync from 'prompt-sync'

// defining what im using
const prompt = promptSync()
const stackNum = new JacksonStack()

// getting user input
while (true) {
  const userInput = Number(prompt('Enter a Number: '))
  if (userInput === -1) {
    break
  } else {
    if (userInput > 0) {
      stackNum.Push(userInput)
    } else {
      console.log('Invalid Input, Not added to array!')
    }
  }
}

if (stackNum.StackArray().length !== 0) {
  // outputting information
  stackNum.StackArray()

  // space for visual affects
  console.log(' ')

  // outputs array
  console.log(stackNum.StackArray())

  // outputs number that was popped
  console.log(`Number removed is ${stackNum.Pop()}!`)

  // visual affects
  console.log('After Pop, your new array is: ')
  console.log('\nCalculating ...')

  // outputs array with popped number
  console.log(stackNum.StackArray())

  // Peak in to the array
  console.log('\nPeak into the array')
  console.log(`The top number is ${stackNum.Peak()}!`)

  // Clears the array
  console.log('\nThis is the cleared array!')
  console.log(`The cleared array looks like ${stackNum.Clear()}`)
} else {
  console.log('Nothing in stack')
}
// end of program
console.log('\nDone!')
