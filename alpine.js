// Get utility markup
async function getHtml() {
  const response = await fetch('https://embed-tool.now.sh/alpine.html')
  return response.text()
}

getHtml()
.then(function (html) {

  // Turn the markup into excecutable HTML
  const parser = new DOMParser()
  const utilityDocument = parser.parseFromString(html, 'text/html')
  const utilityHtml = utilityDocument.body
  document.getElementById('uw-test-widget').prepend(utilityHtml)
})

// Add Alpine
const alpineScript = document.createElement('script')
alpineScript.src = 'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js'

// When Alpine finishes loading add dependency function
alpineScript.onload = function () {
  alpineDependencyScript = document.createElement('script')
  alpineDependencyScript.text = `
    function test() {
      return {
        hello() {
          alert('hello')
        }
      }
    }`

  document.body.appendChild(alpineDependencyScript)
}

document.head.appendChild(alpineScript)