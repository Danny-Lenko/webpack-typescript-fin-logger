import {UserData} from "./interfaces"

export function displayPayment(obj: UserData) {
   return `
     <h4>${obj.type}</h4>
     <p>${obj.counterAgent} owes ${obj.amount} for ${obj.details}</p>
   `
}

export function displayInvoice(obj: UserData) {
   return `
     <h4>${obj.type}</h4>
     <p>${obj.counterAgent} is owed ${obj.amount} for ${obj.details}</p>
   `
}