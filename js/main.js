(function(){

  // Init scrollspy
  $('body').scrollspy({ target: '#main-nav', offset: 100 })

  // Smooth scroll
  smoothScroll.init({
    selector: '.internal-link',
    easing: 'easeOutCubic',
    offset: 40
  })

  $('#main-floater').fixedsticky();

  // alert(window.innerWidth)

}).call(this)
