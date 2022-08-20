import {displayPayment, displayInvoice, displayDocument} from "./utils"
import {HasFormatting, UserData} from "./interfaces"
import {Invoice, Payment} from "./classes";

const formEl = document.querySelector('form')!
const selectEl = document.querySelector('#type')! as HTMLSelectElement
const toFromEl = document.querySelector('#tofrom')! as HTMLInputElement
const detailsEl = document.querySelector('#details')! as HTMLInputElement
const amountEl = document.querySelector('#amount')! as HTMLInputElement
const logsEl = document.querySelector('ul')! as HTMLUListElement

formEl.addEventListener('submit', (e) => {
   e.preventDefault()
   const userData: UserData = organizeUserInputs(
       selectEl.value,
       toFromEl.value,
       detailsEl.value,
       amountEl.value
   )
   displayRecord(userData)
})

function organizeUserInputs(
    type: string,
    counterAgent: string,
    details: string,
    amount: string
): UserData {
   return {
      type: type,
      counterAgent: counterAgent,
      details: details,
      amount: amount
   }
}

function displayRecord(obj: UserData) {
   let doc: HasFormatting = {format(): string {
      return 'hello world'
   }}

   if (obj.type === 'invoice') {
      doc = new Invoice(obj)
   } else if (obj.type === 'payment') {
      doc = new Payment(obj)
   }

   displayDocument(doc, 'start', logsEl)


   // let content: string
   //
   // if (obj.type === 'invoice') {
   //    content = displayInvoice(obj)
   // } else {
   //    content = displayPayment(obj)
   // }
   //
   // liEl.innerHTML = content
   // logsEl.prepend(liEl)
}



