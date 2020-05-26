// Create utility
const embedHook = document.getElementById('uw-8a64cm')
const utility = document.createElement("div")
utility.setAttribute("id", "utility")
vhtml = document.createAttribute("v-html")
vhtml.value = "embed"
utility.setAttributeNode(vhtml)
embedHook.prepend(utility)

async function getHtml() {
  const response = await fetch('https://embed-tool.now.sh/remote.html')
  return response.text()
}

function mountUtility(embed) {
  new Vue({
    el: '#utility',
    data() {
      return {
        embed
      }
    }
  })
}

// Add Vue
const vueScript = document.createElement('script')
vueScript.src = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'

// Get utility HTML and mount the Vue instance
vueScript.onload = function () {
  getHtml()
  .then(function (html) {
    mountUtility(html)
  })
}

document.body.appendChild(vueScript)