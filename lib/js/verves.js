let lists = document.querySelectorAll(".prority_verves_list li")
hover3d(lists)

function hover3d(node, options) {
  if (node.constructor == NodeList) {
    for (let i = 0; i < node.length; i++) {
      hover3d(node[i], options)
    }
    return
  }

  let opt = {
    scale: 2
  }
  Object.assign(opt, options)

  let $inner = node.children[1]
  let $hideed = node.children[0]
  let $mask = $inner.children[1]
  let $detailsbutton = $inner.children[2]
  let $details = $inner.children[3]
  let $detailsimg = $inner.children[0]
  // 鼠标进入
  node.addEventListener("mousemove", function (e) {
    $inner.style.display = "flex"
    $inner.style.width = "125px"
    $inner.style.height = "238px"
    $hideed.style.display = "none"
    node.style.zIndex = "2"
    node.style.transform = `scale(${opt.scale}) translateX(-10%) translateY(-50%)`
    $inner.style.boxShadow = "0 10px 15px 0 rgba(0, 0, 0, .4), 20px 20px 30px 20px rgba(0, 0, 0, .3)"
  })
  // 鼠标移动
  
  node.addEventListener("mousemove", function (e) {
    let offset = getOffset(node)
    let ex = e.pageX - offset.left
    let ey = e.pageY - offset.top
    let cx = node.clientWidth / 2 - ex
    let cy = node.clientHeight / 2 - ey
    let ax = - cx / 5
    let ay = cy / 12
    let yPercent = cy / node.clientHeight / 4
    $mask.style.backgroundColor = yPercent < 0 ? "#000" : "#fff"
    $mask.style.opacity = Math.abs(yPercent < 0 ? yPercent : yPercent * 0.1)
  
    $inner.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg)`
    $detailsbutton.onclick = function(){
      $details.classList.add("test")    
      $detailsbutton.style.display = 'none' 
      $detailsimg.style.filter = 'blur(5px) brightness(60%)'
    }
  });
  // 鼠标移出
  node.addEventListener("mouseleave", function (e) {
    node.removeAttribute("style")
    $inner.removeAttribute("style")
    $mask.removeAttribute("style")
    $inner.style.display = "none"
    $hideed.style.display = "block"
    $details.classList.remove("test")
    $detailsbutton.removeAttribute("style")
    $detailsimg.style.filter = 'none'
  })

  function getOffset(el) {
    var _x = 0
    var _y = 0
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft
      _y += el.offsetTop - el.scrollTop
      el = el.offsetParent
    }
    return { top: _y, left: _x }
  }
}