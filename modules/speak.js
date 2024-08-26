export const speak = (text, el) => {
  const synth = window.speechSynthesis
  const utterance = new SpeechSynthesisUtterance(text)
  synth.speak(utterance)

  el.setAttribute('disabled', '')
  utterance.onend = () => el.removeAttribute("disabled")
}