import {HasFormatting, UserData} from "./interfaces"

export function displayPayment(obj: UserData) {
   return `
     <h4>${obj.type}</h4>
     <p>${obj.counterAgent} is owed £${obj.amount} for ${obj.details}</p>
   `
}

export function displayInvoice(obj: UserData) {
   return `
     <h4>${obj.type}</h4>
     <p>${obj.counterAgent} owes £${obj.amount} for ${obj.details}</p>
   `
}

export function displayDocument(doc:HasFormatting, pos:'start'|'end', container:HTMLUListElement) {
   const liEl = document.createElement('li')

   liEl.innerHTML = doc.format()
   if (pos === 'start') {
      container.prepend(liEl)
   } else if (pos === 'end') {
      container.append(liEl)
   }
}