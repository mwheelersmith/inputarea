const inputArea = function convertInputAreaToTextArea() {
  let inputAreas = document.querySelectorAll('input[type="textarea"]')

  inputAreas.forEach(function(el) {
    let textarea = document.createElement('textarea')

    for (let i = 0; i < el.attributes.length; i++) {
      if (el.attributes[i].nodeName === 'type') continue

      if (el.attributes[i].nodeName === 'value') {
        textarea.innerHTML = el.attributes[i].nodeValue
        continue
      }

      textarea.setAttribute(
        el.attributes[i].nodeName, el.attributes[i].nodeValue
      )
    }

    el.insertAdjacentHTML('afterend', textarea.outerHTML)
    el.parentNode.removeChild(el)
  })
}

module.exports = inputArea;
