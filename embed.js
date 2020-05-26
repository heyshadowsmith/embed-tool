// Add Vue
const vueScript = document.createElement('script')
vueScript.src = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'

async function getHtml() {
  const response = await fetch('https://embed-tool.now.sh/remote.html')
  return response.text()
}

function mountUtility() {
  new Vue({
    el: '#uw-8a64cm',
    methods: {
      hello() {
        alert('hello')
      }
    }
  })
}

// Get utility markup and mount the Vue instance to it
vueScript.onload = function () {
  getHtml()
  .then(function (html) {

    // Turn the markup into excecutable HTML
    const parser = new DOMParser()
    const utilityDocument = parser.parseFromString(html, 'text/html')
    const utilityHtml = utilityDocument.body
    document.getElementById('uw-8a64cm').prepend(utilityHtml)

    // Mount the Vue instance
    mountUtility()
  })
}

document.body.appendChild(vueScript)