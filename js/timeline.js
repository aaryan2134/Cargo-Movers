$(document).ready(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    // Update class if necessary
    $('.timeline-content').each(function() {
      if ($(this).hasClass('js--fadeInLeft')) {
        $(this).removeClass('js--fadeInLeft').addClass('js--fadeInRight');
      }
    });

    // ScrollReveal initialization for smaller screens
    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    // ScrollReveal initialization for larger screens
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  }
});
