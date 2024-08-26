export const speak = (text, el) => {
  const synth = window.speechSynthesis
  const utterance = new SpeechSynthesisUtterance(text)

  if (text) {
    synth.speak(utterance)
    el.setAttribute('disabled', '')
    utterance.onend = () => el.removeAttribute('disabled')
  }
}
