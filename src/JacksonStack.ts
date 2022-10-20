/**
 * The program is the class
 * for JacksonStacks
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-19
 */

class JacksonStack {
  // private array creation
  private readonly stackClass: number[] = []

  // returns array
  StackArray(): number[] {
    return this.stackClass
  }

  // gathers pushed number
  Push(pushedNum: number): void {
    this.stackClass.push(pushedNum)
  }

  // looks at the most recent number
  Peak(): number | undefined | string {
    if (this.stackClass.length !== 0) {
      return this.stackClass[this.stackClass.length - 1]
    } else {
      return 'Nothing in stack'
    }
  }

  // pops top number
  Pop(): number | undefined | string {
    if (this.stackClass.length !== 0) {
      return this.stackClass.pop()
    } else {
      return 'Nothing in stack'
    }
  }

  // this clears the stack
  Clear(): number {
    return (this.stackClass.length = -0)
  }
}

// exports file back to main
export = JacksonStack
