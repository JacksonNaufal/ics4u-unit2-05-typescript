/**
 * The program is the class
 * for the Vehicles
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-19
 */

class Vehicle {
  private licensePlate: string
  private color: string
  private readonly doorNum: number
  private speed = 0
  private readonly maxSpeed: number

  // private array creation

  constructor(
    color: string,
    licensePlate: string,
    doorNum: number,
    maxSpeed: number
  ) {
    this.licensePlate = licensePlate
    this.color = color
    this.doorNum = doorNum
    this.maxSpeed = maxSpeed
  }

  // this returns the licensePlate
  getLicensePlate(): string {
    return this.licensePlate
  }

  // this sets the licensePlate
  setLicensePlate(licensePlate: string): void {
    this.licensePlate = licensePlate
  }

  // this returns the color
  getColor(): string {
    return this.color
  }

  // this sets the color
  setColor(color: string): void {
    this.color = color
  }

  // this returns the color
  getdoorNum(): number {
    return this.doorNum
  }

  // this returns the speed
  getSpeed(): number {
    return this.speed
  }

  // this displays the information
  status(): void {
    console.log(`
    ---> Speed: ${this.speed}
    ---> Max Speed: ${this.maxSpeed}
    ---> Number Of Doors: ${this.doorNum}
    ---> License Plate: ${this.licensePlate}
    ---> Colour: ${this.color}`)
  }

  // this calculates the acceleration
  accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // this calaculates the speed after breaking
  break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

// exports file back to main
export = Vehicle
