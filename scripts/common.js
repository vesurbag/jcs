window.onload = function() {
  var footer = document.querySelector('.footer')
  if (footer.clientHeight) document.querySelector('body').style.paddingBottom = footer.clientHeight + 15 + 'px'
}

