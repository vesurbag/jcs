var activeSection
var inProgress = false

$(function() {
    if (window.innerWidth > 1024) {
        $('#mobileText').remove()
        animationsInit()
        var sections = getSections()
        changeSection(sections[0])
        createVerticalScroll(sections)
        initScrollHandler(sections)
        initButtons()
    } else {
        $('#desktopText').remove()
        $('#selection').html('Способ получения')
        $('#owl').addClass('owl-carousel')
        $('.footer').appendTo('.request__content')
        $('#owl').owlCarousel({
            items: 1,
            nav: true,
            onDrag: function() {$('.section').addClass('section_fix')},
            onDragged: function() {$('.section').removeClass('section_fix')}
        })

        $('.prev').click(function() {
            $('.owl-prev').click()
        })
        $('.next').click(function() {
            $('.owl-next').click()
        })
    }

    
    $('.modal__item').click(function() {
        $(this).find('.modal__text').toggleClass('modal__text_show')
    })
})

function getSections () {
    var sections = []
    var sectionClass = '.section'
    $(sectionClass).map(function(i, elem) {
        sections.push({ index: i, elem })
    })

    sections = sections.map(function (section, i) {
        return Object.assign(section, {
            top: window.innerHeight / 2 * i,
            bottom: window.innerHeight / 2 * (i + 1),
            prev: sections[i - 1],
            next: sections[i + 1]
        })
    })

    return sections
}

function createVerticalScroll (sections) {
    $('#scroll').css('height', sections.length * (window.innerHeight / 2) + window.innerHeight + 'px')
}

function changeSection (section) {
    sectionAnimations[section.index] && sectionAnimations[section.index].reset()
    inProgress = true
    var continer = $('.container')
    continer.css('left', section.index * -100 + 'vw')
    activeSection = section
    setTimeout(function() {
        inProgress = false
        sectionAnimations[section.index] && sectionAnimations[section.index].animate()
    }, 500)
}

function initButtons () {
    $('.next').click(function() {
        window.scrollTo(0, activeSection.next.top + 10)
    })

    $('.prev').click(function() {
        window.scrollTo(0, activeSection.prev.top + 10)
    })
}

function initScrollHandler (sections) {
    document.addEventListener('scroll', function (e) {
        var scroll = window.scrollY
        sections.map(function (section) {
            if (section !== activeSection && scroll >= section.top && scroll < section.bottom) {
                changeSection(section)
            }
        })

        // if (!inProgress) {
        //     var scrollType = window.scrollY > activeSection.top ? 'down' : 'up'
        //     if (scrollType === 'down') {
        //         activeSection.next && changeSection(activeSection.next)
        //         window.scrollTo(0, activeSection.top)
        //     } else {
        //         activeSection.prev && changeSection(activeSection.prev)
        //         window.scrollTo(0, activeSection.top + 1)
        //     }
            
        //     console.log(scrollType, activeSection.top)
        // }
    })
}

function animationsInit() {
    $.fn.extend({
        animateCss: function(animationName, callback) {
          var animationEnd = (function(el) {
            var animations = {
              animation: 'animationend',
              OAnimation: 'oAnimationEnd',
              MozAnimation: 'mozAnimationEnd',
              WebkitAnimation: 'webkitAnimationEnd',
            };
      
            for (var t in animations) {
              if (el.style[t] !== undefined) {
                return animations[t];
              }
            }
          })(document.createElement('div'));
      
          this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).addClass('show')
            $(this).removeClass('animated ' + animationName);
      
            if (typeof callback === 'function') callback();
          });
      
          return this;
        },
      });
}

// Animations rules

var resetAnimation = function(classes) {
    classes.forEach(className => {
        $(className).removeClass('show')
    })
}

var sectionAnimations = {
    0: {
        animate: function() {
            var step_3 = function() {
                $('.greet__text').animateCss('fadeInUp')
                $('.greet__btn-text').animateCss('fadeInLeft')
                $('.greet__btn-arrow').animateCss('fadeInRight')
            }
            var step_2 = function() {
                $('.greet__title').animateCss('fadeInUp')
                $('.greet__pagename').animateCss('fadeIn', step_3)
            }
            var step_1 = function() {
                $('.greet__right-line').animateCss('fadeInUp', step_2)
            }
            step_1()
        },
        reset: function() {
            resetAnimation([
                '.greet__right-line',
                '.greet__pagename',
                '.greet__title',
                '.greet__btn-arrow',
                '.greet__btn-text',
                '.greet__text'
            ])
        }
    },
    1: {
        animate: function() {
            var step_3 = function() {
                $('.about__left-control').animateCss('fadeInLeft')
                $('.about__right-control').animateCss('fadeInRight')
            }
            var step_2 = function() {
                $('.about__text').map(function(i) {
                    var elem = this
                    setTimeout(function() {
                        $(elem).animateCss('fadeInRight')
                    }, i * 100)
                })
                $('.about__title').animateCss('fadeInDown', step_3)
            }
            var step_1 = function() {
                $('.about__top-line').animateCss('fadeIn')
                $('.about__pagename').animateCss('fadeIn', step_2)
            }
            step_1()
        },
        reset: function() {
            resetAnimation([
                '.about__title',
                '.about__top-line',
                '.about__pagename',
                '.about__text',
                '.about__right-control',
                '.about__left-control'
            ])
        }
    },
    2: {
        animate: function() {
            var step_3 = function() {
                $('.how__left-control').animateCss('fadeInLeft')
                $('.how__right-control').animateCss('fadeInRight')
            }
            var step_2 = function() {
                $('.how__text-wrap').map(function(i) {
                    var elem = this
                    setTimeout(function() {
                        $(elem).animateCss('fadeInRight')
                    }, i * 100)
                })
                $('.how__title').animateCss('fadeInDown', step_3)
            }
            var step_1 = function() {
                $('.how__top-line').animateCss('fadeIn')
                $('.how__pagename').animateCss('fadeIn', step_2)
            }
            step_1()
        },
        reset: function() {
            resetAnimation([
                '.how__title',
                '.how__top-line',
                '.how__pagename',
                '.how__text-wrap',
                '.how__right-control',
                '.how__left-control'
            ])
        }
    },
    // 3: {
    //     animate: function() {
    //         var step_3 = function() {
    //             $('.partner__left-control').animateCss('fadeInLeft')
    //             $('.partner__right-control').animateCss('fadeInRight')
    //         }
    //         var step_2 = function() {
    //             $('.partner__item').map(function(i) {
    //                 var elem = this
    //                 setTimeout(function() {
    //                     $(elem).animateCss('fadeInRight')
    //                 }, i * 100)
    //             })
    //             $('.partner__title').animateCss('fadeInDown', step_3)
    //         }
    //         var step_1 = function() {
    //             $('.partner__top-line').animateCss('fadeIn')
    //             $('.partner__pagename').animateCss('fadeIn', step_2)
    //         }
    //         step_1()
    //     },
    //     reset: function() {
    //         resetAnimation([
    //             '.partner__title',
    //             '.partner__top-line',
    //             '.partner__pagename',
    //             '.partner__item',
    //             '.partner__right-control',
    //             '.partner__left-control'
    //         ])
    //     }
    // },
    3: {
        animate: function() {
            var step_3 = function() {
                $('.request__left-control').animateCss('fadeInLeft')
                $('.request__right-control').animateCss('fadeInRight')
            }
            var step_2 = function() {
                $('.request__row').map(function(i) {
                    var elem = this
                    setTimeout(function() {
                        $(elem).animateCss('fadeIn')
                    }, i * 100)
                })
                $('.request__title').animateCss('fadeInDown', step_3)
            }
            var step_1 = function() {
                $('.request__top-line').animateCss('fadeIn')
                $('.request__pagename').animateCss('fadeIn', step_2)
            }
            step_1()
        },
        reset: function() {
            resetAnimation([
                '.request__title',
                '.request__top-line',
                '.request__pagename',
                '.request__row',
                '.request__right-control',
                '.request__left-control'
            ])
        }
    }
}
