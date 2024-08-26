import { $ } from './utils.js'

const firstField = $('.first-field')
const secondField = $('.second-field')
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

const decrypt = (text) => {
  let result = text
  for (const rule in rules)
    result = result.replace(new RegExp(rules[rule], 'g'), rule)

  return result
}

textField.oninput = () => {
  const conditions = /[^a-z0-9 ]/g
  textField.value = textField.value.replace(conditions, '')

  if (firstField.classList.contains('encrypt')) {
    resultField.value = encrypt(textField.value)
  } else if (firstField.classList.contains('decrypt')) {
    resultField.value = decrypt(textField.value)
  }
}

document.addEventListener('click', (e) => {
  if (e.target.matches('.switch')) {
    e.target.classList.toggle('spin')
    firstField.classList.toggle('encrypt')
    firstField.classList.toggle('decrypt')
    firstField.classList.toggle('change-function')
    secondField.classList.toggle('change-function')

    const currentText = textField.value
    textField.value = resultField.value
    resultField.value = currentText
  }

  if (e.target.matches('.delete-text')) {
    textField.value = ''
    resultField.value = ''
  }
})
