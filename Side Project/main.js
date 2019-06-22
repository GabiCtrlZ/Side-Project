function click() {
    let ip = document.getElementById('input').value
    console.log(ip)
  window.open(`https://who.is/whois-ip/ip-address/${ip}`, '_blank')
  window.open(`https://www.virustotal.com/gui/ip-address/${ip}/relations`, '_blank')
  window.open(`https://exchange.xforce.ibmcloud.com/ip/${ip}`, '_blank')
  window.open(`https://www.shodan.io/search?query=${ip}`, '_blank')
}

function click1() {
    let ip = document.getElementById('input').value
    console.log(ip)
  window.open(`https://who.is/whois-ip/ip-address/${ip}`, '_blank')
}
function click2() {
    let ip = document.getElementById('input').value
    console.log(ip)
  window.open(`https://www.virustotal.com/gui/ip-address/${ip}/relations`, '_blank')
}
function click3() {
    let ip = document.getElementById('input').value
    console.log(ip)
  window.open(`https://exchange.xforce.ibmcloud.com/ip/${ip}`, '_blank')
}
function click4() {
    let ip = document.getElementById('input').value
    console.log(ip)
  window.open(`https://www.shodan.io/search?query=${ip}`, '_blank')
}
const post = document.getElementById('post')
post.addEventListener("click", click)

const post2 = document.getElementById('post2')
post2.addEventListener("click", click2)

const post3 = document.getElementById('post3')
post3.addEventListener("click", click3)

const post4 = document.getElementById('post4')
post4.addEventListener("click", click4)

const post1 = document.getElementById('post1')
post1.addEventListener("click", click1)