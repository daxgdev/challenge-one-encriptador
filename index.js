import { $ } from './utils.js'

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

textField.oninput = (e) => {
  const conditions = /[^a-z0-9]/g
  textField.value = textField.value.replace(conditions, '') 

  resultField.value = encrypt(textField.value) 
}
