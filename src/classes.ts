import { UserData } from "./interfaces";

export class Invoice {
   constructor(public obj: UserData) {}

   format() {
      return `
         <h4>${this.obj.type}</h4>
         <p>${this.obj.counterAgent} owes £${this.obj.amount} for ${this.obj.details}</p>
      `
   }
}

export class Payment {
   constructor(public obj: UserData) {}

   format() {
      return `
         <h4>${this.obj.type}</h4>
         <p>${this.obj.counterAgent} is owed £${this.obj.amount} for ${this.obj.details}</p>
      `
   }
}