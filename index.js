import { $ } from './utils.js'

const firstField = $('.first-field')
const textField = $('.first-field > textarea')
const resultField = $('.second-field > textarea')

const rules = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
}
const encrypt = (text) => {
  const split = text.split('')
  split.forEach((letter, i) => {
    if (Object.hasOwn(rules, letter)) {
      split[i] = rules[letter]
    }
  })

  return split.join('')
}

// const decrypt = (text) => {

// }

textField.oninput = () => {
  const conditions = /[^a-z0-9]/g
  textField.value = textField.value.replace(conditions, '')

  if (firstField.classList.contains('encrypt')) {
    resultField.value = encrypt(textField.value)
  } else if (firstField.classList.contains('decrypt')) {
    // resultField.value = decrypt(textField.value)
  }
}

// document.addEventListener('click', (e) => {
//   if (e.target.matches('.switch')) {
    
//   }
// })
