// Add utility
const embed = document.getElementById('uw-8a64cm')
const utility = document.createElement("div")
utility.setAttribute("id", "utility")
vhtml = document.createAttribute("v-html")
vhtml.value = "embed"
utility.setAttributeNode(vhtml)
embed.prepend(utility)

const vueScript = document.createElement('script')
vueScript.src = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
vueScript.onload = function () {
  new Vue({
    el: '#utility',
    data() {
      return {
        embed: '<h2>Remote data</h2>'
      }
    }
  })
}

document.body.appendChild(vueScript)