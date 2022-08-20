import { displayPayment, displayInvoice } from "./utils"
import { UserData } from "./interfaces"

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
   const liEl = document.createElement('li')
   let content: string

   if (obj.type === 'invoice') {
      content = displayInvoice(obj)
   } else {
      content = displayPayment(obj)
   }

   liEl.innerHTML = content
   logsEl.prepend(liEl)
}



