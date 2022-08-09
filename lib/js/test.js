let skills = document.querySelectorAll(".skill_priotity_icon_wrapper li")
hoverskill(skills)

function hoverskill(node, options) {
  if (node.constructor == NodeList) {
    for (let i = 0; i < node.length; i++) {
      hoverskill(node[i], options)
    }
    return
  }

  let opt = {
    scale: 1.5
  }
  Object.assign(opt, options)

  let $hideed = node.children[0]
  let $inner = node.children[1]
  let $mask = $hideed.children[1]
  // 鼠标进入
  node.addEventListener("mousemove", function (e) {
    $inner.style.display = "flex"
    $inner.style.width = "100px"
    $inner.style.height = "100px"
    $inner.style.position = "relative"
    $hideed.style.display = "none"
    node.style.zIndex = "2"
    node.style.transform = `scale(${opt.scale}) `

  })
  // 鼠标移动
  

  // 鼠标移出
  node.addEventListener("mouseleave", function (e) {
    node.removeAttribute("style")
    $inner.removeAttribute("style")
    $mask.removeAttribute("style")
    $inner.style.display = "none"
    $hideed.style.display = "block"
  })

 
}