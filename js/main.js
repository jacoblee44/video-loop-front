var num = 0;
var index = 0;
var flag = "up"
let begin = $('.begin', $('#index'));
var begin1 = $('.digital-begin', $('#digital'));
var begin2 = $('.event-begin', $('#event'));
var begin3 = $('.branding-begin', $('#branding'));
var begin4 = $('.contact-begin', $('#contact'));
var loop;
$(document).ready (function () {
    $('#main-index').click ( function () {
        index++;
        playVideo(index);
        document.getElementById("mySidenav").style.width = "0";
    })

	var back = setInterval(() => {
        var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i),
            isTablet = navigator.userAgent.toLowerCase().match(/tablet/i),
            isAndroid = navigator.userAgent.toLowerCase().match(/android/i),
            isiPhone = navigator.userAgent.toLowerCase().match(/iphone/i),
            isiPad = navigator.userAgent.toLowerCase().match(/ipad/i);
        
        // (B) DETECTED DEVICE TYPE
        if(isMobile == null) {
            window.location = 'index.html';
			clearInterval(back);
        }
    }, 1000);
    
})
function updateVideo() {
    if(begin[0].currentTime >= 5.8 && begin[0].currentTime != begin[0].duration) {
        begin[0].currentTime = 3;
    }
}
function updateVideo1() {
    if(begin1[0].currentTime >= 7.45 && begin1[0].currentTime != begin1[0].duration) {
        begin1[0].currentTime = 4.77;
    }
}
function updateVideo2() {
    if(begin2[0].currentTime >= 5.229 && begin2[0].currentTime != begin2[0].duration) {
        begin2[0].currentTime = 3.05;
    }
}
function updateVideo3() {
    if(begin3[0].currentTime >= 5.75 && begin3[0].currentTime != begin3[0].duration) {
        begin3[0].currentTime = 3;
    }
}
function updateVideo4() {
    if(begin4[0].currentTime >= 8.238 && begin4[0].currentTime != begin4[0].duration) {
        begin4[0].currentTime = 7.18;
    }
}
if( index == 0) {
    $('section #details').removeClass('pre active');
    setTimeout( function() {

        $('.begin').attr('preload', 'auto');
        // begin[0].currentTime += -.1;
        // begin[0].play();
        // var video =  $(document).getElementsByClassName('begin')[0]
        var begin = $('.begin', $('#index'));
        console.log(begin)
        // begin[0].currentTime += -0.1;
        begin[0].play();
        // begin[0].addEventListener('timeupdate', function() {
        //     if(begin[0].currentTime >= 3) {
        //         // begin[0].pause();
        //     }
        // })
        console.log(begin[0].duration * 1000 + 500);
        // setTimeout(function () {
        //     begin.removeClass('index-intro');
        //     begin.addClass('index-loop');

        // }, 3000);
        setTimeout( function( ) {
            // var loop = $('.loop', $('#index'));
            begin.addClass('visible');
            // $('.loop').attr('preload', 'auto').attr('loop', true);
            // var video =  $(document).getElementsByClassName('begin')[0]
            begin[0].currentTime = 3
            begin[0].play();
            begin[0].addEventListener('timeupdate', updateVideo)
            begin[0].addEventListener('ended', function() {
                begin[0].currentTime = 3;
            })

        }, 3000);
    }, 500)
}

function onwheelend() {
    did_once = false;
}

var timeout_id;
var did_once = false;
// window.addEventListener('wheel', (event) => {
//     clearTimeout(timeout_id);
//     timeout_id = setTimeout(onwheelend, 250);
//     if(event.deltaY > 0) {
//         if (!did_once) {
//             my_action()
//             did_once = true;
//         }
//     }
//     else {
//         if (!did_once) {
//             index--;
//             playVideoBack(index);
//             did_once = true;
//         }
//     }
// });


function my_action() {
    index++;
    playVideo(index);
}

function playVideoBack(index) {
    if( index == -1) {
        // var loop = $('.loop', $('#index'));
        // loop.removeClass('visible');
        // var close = $('.close2', $('#index'));
        // close.addClass('visible');
        // $('.close2').attr('muted', 'muted').attr('autoplay', 'autoplay').attr('preload', 'auto');
        // close[0].play();
        index =  0;
    }
    else if(index == 0) {
        var begin = $('.digital-begin', $('#digital'));
        begin[0].removeEventListener('timeupdate',updateVideo1)
        console.log(begin)
        begin[0].addEventListener('ended', function() {
            begin[0].currentTime = 0;
        })
        
        setTimeout(function() {
            $('body').addClass('digital-back');
            
            var begin = $('.digital-begin', $('#digital'));
            begin.removeClass('visible ');
            var loop = $('.digital-loop', $('#digital'));
            loop.removeClass('visible index-loop');
            var close = $('.digital-close', $('#digital'));
            $('#digital').removeClass('pre active');
            var begin = $('.begin', $('#index'));
            begin.addClass('visible index-loop');
            var loop = $('.loop', $('#index'));
            loop.removeClass('visible index-loop');
            var close = $('.close2', $('#index'));
            close.removeClass('visible');
            
            $('#index').addClass('pre');
            setTimeout(function() {
                $('#index').addClass('active');
                $('.begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
                var begin = $('.begin', $('#index'));
                begin[0].currentTime = 0;
                begin[0].play();
                console.log(begin[0].duration * 1000 + 500);
                setTimeout( function( ) {
                    // var loop = $('.loop', $('#index'));
                    begin.addClass('visible');
                    // $('.loop').attr('preload', 'auto').attr('loop', true);
                    // var video =  $(document).getElementsByClassName('begin')[0]
                    begin[0].currentTime = 3
                    begin[0].play();
                    begin[0].addEventListener('timeupdate', updateVideo)
                    begin[0].addEventListener('ended', function() {
                        begin[0].currentTime = 3;
                    })
    
                }, 3000);
            }, 20);
            $('.agency').css("opacity", "1");
            $('.agency').css("transition", "opacity 1s ease");
            $('.digital').css("opacity", "0");
            $('.events').css("opacity", "0");
            $('.branding').css("opacity", "0");
            $('.contact').css("opacity", "0");
    
            $('a.agency').css("opacity", "1");
            $('a.agency').css("transition", "opacity 1s ease");
            $('a.digital').css("opacity", "0");
            $('a.events').css("opacity", "0");
            $('a.branding').css("opacity", "0");
            $('a.contact').css("opacity", "0");
        }, begin[0].duration * 1000 - 4770)

    }
    // else if(index == 2) {
    //     var begin = $('.digital-begin', $('#digital'));
    //     begin.removeClass('visible');
    //     var loop = $('.digital-loop', $('#digital'));
    //     loop.removeClass('visible');
    //     var close = $('.digital-close', $('#digital'));
    //     close.addClass('visible');
    //     $('.digital-close').attr('muted', 'muted').attr('autoplay', 'autoplay').attr('preload', 'auto');
    //     close[0].play();
    // }
    else if(index == 1) {
        console.log("======index:", index)
        var begin = $('.event-begin', $('#event'));
        begin[0].removeEventListener('timeupdate',updateVideo2)
        console.log(begin)
        begin[0].addEventListener('ended', function() {
            begin[0].currentTime =0;
        })
        setTimeout(function(){
            $('body').removeClass('event-back');
            $('body').addClass('digital-back');

            var begin = $('.event-begin', $('#event'));
            begin.removeClass('visible ');
            var loop = $('.event-loop', $('#event'));
            loop.removeClass('visible index-loop');
            var close = $('.event-close', $('#event'));
            close.removeClass('visible');
            var begin = $('.digital-begin', $('#digital'));
            begin.addClass('visible');
            var loop = $('.digital-loop', $('#digital'));
            loop.removeClass('visible');
            // var close = $('.close2', $('#index'));
            // close.removeClass('visible');
            $('#event').removeClass('pre active');
    
            $('#digital').addClass('pre');
            setTimeout(function() {
                $('#digital').addClass('active');
                $('.digital-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
                var begin = $('.digital-begin', $('#digital'));
                begin[0].currentTime = 0;
                begin[0].play();
                console.log(begin[0].duration * 1000 + 500);
                setTimeout( function( ) {
                    // var loop = $('.digital-loop', $('#digital'));
                    // loop.addClass('visible');
                    // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
                    begin.addClass('visible');
                    // $('.loop').attr('preload', 'auto').attr('loop', true);
                    // var video =  $(document).getElementsByClassName('begin')[0]
                    begin[0].currentTime = 4.77
                    begin[0].play();
                    begin[0].addEventListener('timeupdate', updateVideo1)
                }, 4770);
            }, 20);
    
            $('.agency').css("opacity", "0");
            $('.digital').css("opacity", "1");
            $('.digital').css("transition", "opacity 1s ease");
            $('.events').css("opacity", "0");
            $('.branding').css("opacity", "0");
            $('.contact').css("opacity", "0");
    
            $('a.agency').css("opacity", "0");
            $('a.digital').css("opacity", "1");
            $('a.digital').css("transition", "opacity 1s ease");
            $('a.events').css("opacity", "0");
            $('a.branding').css("opacity", "0");
            $('a.contact').css("opacity", "0");
        }, begin[0].duration * 1000 - 3050)

    }
    // else if(index == 4) {
    //     var begin = $('.event-begin', $('#event'));
    //     begin.removeClass('visible');
    //     var loop = $('.event-loop', $('#event'));
    //     loop.removeClass('visible');
    //     var close = $('.event-close', $('#event'));
    //     close.addClass('visible');
    //     $('.event-close').attr('muted', 'muted').attr('autoplay', 'autoplay').attr('preload', 'auto');
    //     close[0].play();
    // }
    else if (index == 2) {
        console.log("======index:", index)
        var begin = $('.branding-begin', $('#branding'));
        // begin.removeClass('visible');
        begin[0].removeEventListener('timeupdate',updateVideo3)
        console.log(begin)
        begin[0].addEventListener('ended', function() {
            begin[0].currentTime = 0;
        })
        setTimeout(function() {
            $('body').removeClass('branding-back');
            $('body').addClass('event-back');

            var begin = $('.branding-begin', $('#branding'));
            begin.removeClass('visible ');
            var loop = $('.branding-loop', $('#branding'));
            loop.removeClass('visible index-loop');
            var close = $('.branding-close', $('#branding'));
            close.removeClass('visible');
            var begin = $('.begin', $('#index'));
            begin.removeClass('visible index-loop');
            var loop = $('.loop', $('#index'));
            loop.removeClass('visible index-loop');
            var close = $('.close2', $('#index'));
            close.removeClass('visible');
            var begin = $('.event-begin', $('#event'));
            begin.addClass('visible ');
            var loop = $('.event-loop', $('#event'));
            loop.removeClass('visible');
            $('#branding').removeClass('pre active');
    
            $('#event').addClass('pre');
            setTimeout(function() {
                $('#event').addClass('active');
                
                $('.event-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
                var begin = $('.event-begin', $('#event'));
                begin[0].currentTime = 0;
                begin[0].play();
                console.log(begin[0].duration * 1000 + 500);
                // setTimeout(function () {
                //     begin.removeClass('visible');
        
                // }, begin[0].duration * 1000 + 500);
                setTimeout( function( ) {
                    // var loop = $('.digital-loop', $('#digital'));
                    // loop.addClass('visible');
                    // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
                    begin.addClass('visible');
                    // $('.loop').attr('preload', 'auto').attr('loop', true);
                    // var video =  $(document).getElementsByClassName('begin')[0]
                    begin[0].currentTime = 3.05
                    begin[0].play();
                    begin[0].addEventListener('timeupdate', updateVideo2)
                }, 3050);
            }, 20)
            $('.agency').css("opacity", "0");
            $('.digital').css("opacity", "0");
            $('.events').css("opacity", "1");
            $('.events').css("transition", "opacity 1s ease");
            $('.branding').css("opacity", "0");
            $('.contact').css("opacity", "0");
    
            $('a.agency').css("opacity", "0");
            $('a.digital').css("opacity", "0");
            $('a.events').css("opacity", "1");
            $('a.events').css("transition", "opacity 1s ease");
            $('a.branding').css("opacity", "0");
            $('a.contact').css("opacity", "0");
        }, begin[0].duration * 1000 - 3000)
        
    }
    // else if (index == 6) {
    //     var begin = $('.branding-begin', $('#branding'));
    //     begin.removeClass('visible');
    //     var loop = $('.branding-loop', $('#branding'));
    //     loop.removeClass('visible');
    //     var close = $('.branding-close', $('#branding'));
    //     close.addClass('visible');
    //     $('.branding-close').attr('muted', 'muted').attr('autoplay', 'autoplay').attr('preload', 'auto');
    //     close[0].play();
    // }
    else if (index == 3) {
        var begin = $('.contact-begin', $('#contact'));
        // begin.removeClass('visible');
        begin[0].removeEventListener('timeupdate',updateVideo4)
        console.log(begin)
        begin[0].addEventListener('ended', function() {
            begin[0].currentTime = 0;
        })

        
        setTimeout(function() {
            $('body').removeClass('contact-back');
            $('body').addClass('branding-back');
            var begin = $('.contact-begin', $('#contact'));
            begin.removeClass('visible ');
            var loop = $('.contact-loop', $('#contact'));
            loop.removeClass('visible index-loop');
            var close = $('.contact-close', $('#contact'));
            close.removeClass('visible');
            var begin = $('.begin', $('#index'));
            begin.removeClass('visible index-loop');
            var loop = $('.loop', $('#index'));
            loop.removeClass('visible index-loop');
            var close = $('.close2', $('#index'));
            close.removeClass('visible');

            var begin = $('.branding-begin', $('#branding'));
            begin.addClass('visible ');
            var loop = $('.branding-loop', $('#branding'));
            loop.removeClass('visible');
            $('#contact').removeClass('pre active');
    
            $('#branding').addClass('pre');
            setTimeout(function() {
                $('#branding').addClass('active');
    
                $('.branding-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
                var begin = $('.branding-begin', $('#branding'));
                begin[0].currentTime = 0;
                begin[0].play();
                console.log(begin[0].duration * 1000 + 500);
                // setTimeout(function () {
                //     begin.removeClass('visible');
        
                // }, begin[0].duration * 1000 + 500);
                setTimeout( function( ) {
                    // var loop = $('.digital-loop', $('#digital'));
                    // loop.addClass('visible');
                    // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
                    begin.addClass('visible');
                    // $('.loop').attr('preload', 'auto').attr('loop', true);
                    // var video =  $(document).getElementsByClassName('begin')[0]
                    begin[0].currentTime = 3
                    begin[0].play();
                    begin[0].addEventListener('timeupdate', updateVideo3)
                }, 3000);
            }, 20)
    
            $('.agency').css("opacity", "0");
            $('.digital').css("opacity", "0");
            $('.events').css("opacity", "0");
            $('.branding').css("opacity", "1");
            $('.branding').css("transition", "opacity 1s ease");
            $('.contact').css("opacity", "0");
    
            $('a.agency').css("opacity", "0");
            $('a.digital').css("opacity", "0");
            $('a.events').css("opacity", "0");
            $('a.branding').css("opacity", "1");
            $('a.branding').css("transition", "opacity 1s ease");
            $('a.contact').css("opacity", "0");
        }, begin[0].duration * 1000 - 7180)
       

    }
    else if (index == 4) {
        var begin = $('.branding-begin', $('#branding'));
        begin.removeClass('visible index-loop');
        var loop = $('.branding-loop', $('#branding'));
        loop.removeClass('visible index-loop');
        var close = $('.branding-close', $('#branding'));
        close.removeClass('visible');
        var begin = $('.begin', $('#index'));
        begin.removeClass('visible index-loop');
        var loop = $('.loop', $('#index'));
        loop.removeClass('visible index-loop');
        var close = $('.close2', $('#index'));
        close.removeClass('visible');
        var begin = $('.contact-begin', $('#contact'));
        begin.addClass('visible');
        var loop = $('.contact-loop', $('#contact'));
        loop.removeClass('visible');
        $('#branding').removeClass('pre active');

        $('#contact').addClass('pre');
        setTimeout(function() {
            $('#contact').addClass('active');
            $('.contact-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
            var begin = $('.contact-begin', $('#contact'));
            begin[0].currentTime = 0;
            begin[0].play();
            console.log(begin[0].duration * 1000 + 500);
            // setTimeout(function () {
            //     begin.removeClass('visible');
            // }, begin[0].duration * 1000 + 500);
            setTimeout( function( ) {
                // var loop = $('.digital-loop', $('#digital'));
                // loop.addClass('visible');
                // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
                begin.addClass('visible');
                // $('.loop').attr('preload', 'auto').attr('loop', true);
                // var video =  $(document).getElementsByClassName('begin')[0]
                begin[0].currentTime = 7.18
                begin[0].play();
                begin[0].addEventListener('timeupdate', updateVideo4)
            }, 7180);
        }, 20)

        $('.agency').css("opacity", "0");
        $('.digital').css("opacity", "0");
        $('.events').css("opacity", "0");
        $('.branding').css("opacity", "0");
        $('.contact').css("opacity", "1");
        $('.contact').css("transition", "opacity 1s ease");

        $('a.agency').css("opacity", "0");
        $('a.digital').css("opacity", "0");
        $('a.events').css("opacity", "0");
        $('a.branding').css("opacity", "0");
        $('a.contact').css("opacity", "1");
        $('a.contact').css("transition", "opacity 1s ease");
        
    }
}



// Get the modal
var modal = document.getElementById("tiny");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");

var modalImg = document.getElementById("img01");

// $('#tiny').click( function () {
//     modal.style.display = "none";
//     modal.style.zIndex = 0;
//     $('#tiny').animate({height: '0%'}, 500);
// })

var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    $('#tiny').animate({height: '100%'}, 500);
    modal.style.zIndex = 300;
    modalImg.src = './assets/Details.png';
    captionText.innerHTML = "aaa";
}

$('#myImg').mouseenter(function() {
    $('#myImg').attr('src', './assets/Groupe1.png')
})
$('#myImg').mouseleave(function() {
    $('#myImg').attr('src', './assets/Calque1.png')
})

function imgClick() {
	modal.style.display = 'block'
    $('#tiny').animate({height: '100%'}, 500);
    modal.style.zIndex = 300;
    modalImg.src = './assets/Details.png';
    captionText.innerHTML = "aaa";
}

img1.onclick = function(){
    imgClick()
}
img2.onclick = function(){
    modal.style.display = "block";
    $('#tiny').animate({height: '100%'}, 500);
    modal.style.zIndex = 300;
    modalImg.src = './assets/Details.png';
    captionText.innerHTML = "aaa";
}
img3.onclick = function(){
    modal.style.display = "block";
    $('#tiny').animate({height: '100%'}, 500);
    modal.style.zIndex = 300;
    modalImg.src = './assets/Details.png';
    captionText.innerHTML = "aaa";
}
img4.onclick = function(){
    modal.style.display = "block";
    $('#tiny').animate({height: '100%'}, 500);
    modal.style.zIndex = 300;
    modalImg.src = './assets/Details.png';
    captionText.innerHTML = "aaa";
}
img5.onclick = function(){
    modal.style.display = "block";
    $('#tiny').animate({height: '100%'}, 500);
    modal.style.zIndex = 300;
    modalImg.src = './assets/Details.png';
    captionText.innerHTML = "aaa";
}
img6.onclick = function(){
    modal.style.display = "block";
    $('#tiny').animate({height: '100%'}, 500);
    modal.style.zIndex = 300;
    modalImg.src = './assets/Details.png';
    captionText.innerHTML = "aaa";
}
img7.onclick = function(){
    modal.style.display = "block";
    $('#tiny').animate({height: '100%'}, 500);
    modal.style.zIndex = 300;
    modalImg.src = './assets/Details.png';
    captionText.innerHTML = "aaa";
}
// img8.onclick = function(){
//     modal.style.display = "block";
//     $('#tiny').animate({height: '100%'}, 500);
//     modal.style.zIndex = 300;
//     modalImg.src = './assets/Details.png';
//     captionText.innerHTML = "aaa";
// }



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
$('#img01').click(function () {
    modal.style.display = "none";
})
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
// modal.style.zIndex = 0;
}
function playVideo(index) {
    if( index == 0) {
        $('section #details').removeClass('pre active');
        setTimeout( function() {

            $('.begin').attr('preload', 'auto');
            // begin[0].currentTime += -.1;
            // begin[0].play();
            // var video =  $(document).getElementsByClassName('begin')[0]
            var begin = $('.begin', $('#index'));
            console.log(begin)
            // begin[0].currentTime += -0.1;
            begin[0].play();
            $('body').css('background', '#41add8');
            // begin[0].addEventListener('timeupdate', function() {
            //     if(begin[0].currentTime >= 3) {
            //         // begin[0].pause();
            //     }
            // })
            console.log(begin[0].duration * 1000 + 500);
            // setTimeout(function () {
            //     begin.removeClass('index-intro');
            //     begin.addClass('index-loop');

            // }, 3000);
            setTimeout( function( ) {
                // var loop = $('.loop', $('#index'));
                begin.addClass('visible');
                // $('.loop').attr('preload', 'auto').attr('loop', true);
                // var video =  $(document).getElementsByClassName('begin')[0]
                begin[0].currentTime = 3
                begin[0].play();
                begin[0].addEventListener('timeupdate', updateVideo)
                begin[0].addEventListener('ended', function() {
                    begin[0].currentTime = 3;
                })

            }, 3000);
        }, 500)
    }
    else if(index == 1) {
        var begin = $('.begin', $('#index'));
        begin[0].removeEventListener('timeupdate',updateVideo)
        console.log(begin)
        begin[0].addEventListener('ended', function() {
            begin[0].currentTime = 0;
        })
        setTimeout(function(){
            $('body').addClass('digital-back');

            var begin = $('.begin', $('#index'));
            begin.removeClass('visible');
            // setTimeout(function() {
    
                var begin = $('.digital-begin', $('#digital'));
                begin.addClass('visible');
                var loop = $('.digital-loop', $('#digital'));
                loop.removeClass('visible index-loop');
                var close = $('.digital-close', $('#digital'));
                close.removeClass('visible');
                
        
                $('#digital').addClass('pre');
                setTimeout(function() {
                    $('#digital').addClass('active');
                    $('.digital-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
                    var begin = $('.digital-begin', $('#digital'));
                    begin[0].currentTime = 0;
                    begin[0].play();
                    console.log(begin[0].duration * 1000 + 500);
                    setTimeout( function( ) {
                        // var loop = $('.digital-loop', $('#digital'));
                        // loop.addClass('visible');
                        // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
                        begin.addClass('visible');
                        // $('.loop').attr('preload', 'auto').attr('loop', true);
                        // var video =  $(document).getElementsByClassName('begin')[0]
                        begin[0].currentTime = 4.77
                        begin[0].play();
                        begin[0].addEventListener('timeupdate', updateVideo1)
                    }, 4770);
                }, 20);
        
                $('.agency').css("opacity", "0");
                $('.digital').css("opacity", "1");
                $('.digital').css("transition", "opacity 1s ease");
                $('.events').css("opacity", "0");
                $('.branding').css("opacity", "0");
                $('.contact').css("opacity", "0");
        
                $('a.agency').css("opacity", "0");
                $('a.digital').css("opacity", "1");
                $('a.digital').css("transition", "opacity 1s ease");
                $('a.events').css("opacity", "0");
                $('a.branding').css("opacity", "0");
                $('a.contact').css("opacity", "0");
            // }, 1000)
        },begin[0].duration * 1000 - 3500)


    }
    // else if(index == 3) {
        // var begin = $('.digital-begin', $('#digital'));
        // begin.removeClass('visible');
        // var loop = $('.digital-loop', $('#digital'));
        // loop.removeClass('visible');
        // var close = $('.digital-close', $('#digital'));
        // close.addClass('visible');
        // $('.digital-close').attr('muted', 'muted').attr('autoplay', 'autoplay').attr('preload', 'auto');
        // close[0].play();
    // }
    else if(index == 2) {
        var begin = $('.digital-begin', $('#digital'));
        // begin.removeClass('visible');
        // var loop = $('.digital-loop', $('#digital'));
        // loop.removeClass('visible');
        // var close = $('.digital-close', $('#digital'));
        // close.addClass('visible');
        begin[0].removeEventListener('timeupdate',updateVideo1)
        console.log(begin)
        begin[0].addEventListener('ended', function() {
            begin[0].currentTime = 0;
        })
        $('.digital-close').attr('muted', 'muted').attr('autoplay', 'autoplay').attr('preload', 'auto');
        // close[0].play();
        setTimeout(function(){
            $('body').removeClass('digital-back');
            $('body').addClass('event-back');
            
            var begin = $('.digital-begin', $('#digital'));
            begin.removeClass('visible ');
            var loop = $('.digital-loop', $('#digital'));
            loop.removeClass('visible index-loop');
            var close = $('.digital-close', $('#digital'));
            close.removeClass('visible');
            var begin = $('.begin', $('#index'));
            begin.removeClass('visible index-loop');
            var loop = $('.loop', $('#index'));
            loop.removeClass('visible index-loop');
            var close = $('.close2', $('#index'));
            close.removeClass('visible');
    
            var begin = $('.event-begin', $('#event'));
            begin.addClass('visible ');
            var loop = $('.event-loop', $('#event'));
            loop.removeClass('visible');
    
            $('#digital').removeClass('pre active');
    
            $('#event').addClass('pre');
            setTimeout(function() {
                $('#event').addClass('active');
                
                $('.event-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
                var begin = $('.event-begin', $('#event'));
                begin[0].currentTime = 0;
                begin[0].play();
                console.log(begin[0].duration * 1000 + 500);
                // setTimeout(function () {
                //     begin.removeClass('visible');
        
                // }, begin[0].duration * 1000 + 500);
                setTimeout( function( ) {
                    // var loop = $('.digital-loop', $('#digital'));
                    // loop.addClass('visible');
                    // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
                    begin.addClass('visible');
                    // $('.loop').attr('preload', 'auto').attr('loop', true);
                    // var video =  $(document).getElementsByClassName('begin')[0]
                    begin[0].currentTime = 3.05
                    begin[0].play();
                    begin[0].addEventListener('timeupdate', updateVideo2)
                }, 3050);
            }, 20)
            $('.agency').css("opacity", "0");
            $('.digital').css("opacity", "0");
            $('.events').css("opacity", "1");
            $('.events').css("transition", "opacity 1s ease");
            $('.branding').css("opacity", "0");
            $('.contact').css("opacity", "0");
    
            $('a.agency').css("opacity", "0");
            $('a.digital').css("opacity", "0");
            $('a.events').css("opacity", "1");
            $('a.events').css("transition", "opacity 1s ease");
            $('a.branding').css("opacity", "0");
            $('a.contact').css("opacity", "0");
        }, begin[0].duration * 1000 - 5000)

    }
    // else if (index == 5) {
        // var begin = $('.event-begin', $('#event'));
        // begin.removeClass('visible');
        // var loop = $('.event-loop', $('#event'));
        // loop.removeClass('visible');
        // var close = $('.event-close', $('#event'));
        // close.addClass('visible');
        // $('.event-close').attr('muted', 'muted').attr('autoplay', 'autoplay').attr('preload', 'auto');
        // close[0].play();
    // }
    else if (index == 3) {
        var begin = $('.event-begin', $('#event'));
        begin[0].removeEventListener('timeupdate',updateVideo2)
        console.log(begin)
        begin[0].addEventListener('ended', function() {
            begin[0].currentTime =0;
        })
        setTimeout(function(){
            $('body').removeClass('event-back');
            $('body').addClass('branding-back');

            var begin = $('.event-begin', $('#event'));
            begin.removeClass('visible ');
            var loop = $('.event-loop', $('#event'));
            loop.removeClass('visible index-loop');
            var close = $('.event-close', $('#event'));
            close.removeClass('visible');
            var begin = $('.begin', $('#index'));
            begin.removeClass('visible index-loop');
            var loop = $('.loop', $('#index'));
            loop.removeClass('visible index-loop');
            var close = $('.close2', $('#index'));
            close.removeClass('visible');
    
            var begin = $('.branding-begin', $('#branding'));
            begin.addClass('visible ');
            var loop = $('.branding-loop', $('#branding'));
            loop.removeClass('visible');
            $('#event').removeClass('pre active');
    
            $('#branding').addClass('pre');
            setTimeout(function() {
                $('#branding').addClass('active');
    
                $('.branding-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
                var begin = $('.branding-begin', $('#branding'));
                begin[0].currentTime = 0;
                begin[0].play();
                console.log(begin[0].duration * 1000 + 500);
                // setTimeout(function () {
                //     begin.removeClass('visible');
        
                // }, begin[0].duration * 1000 + 500);
                setTimeout( function( ) {
                    // var loop = $('.digital-loop', $('#digital'));
                    // loop.addClass('visible');
                    // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
                    begin.addClass('visible');
                    // $('.loop').attr('preload', 'auto').attr('loop', true);
                    // var video =  $(document).getElementsByClassName('begin')[0]
                    begin[0].currentTime = 3
                    begin[0].play();
                    begin[0].addEventListener('timeupdate', updateVideo3)
                }, 3000);
            }, 20)
    
            $('.agency').css("opacity", "0");
            $('.digital').css("opacity", "0");
            $('.events').css("opacity", "0");
            $('.branding').css("opacity", "1");
            $('.branding').css("transition", "opacity 1s ease");
            $('.contact').css("opacity", "0");
    
            $('a.agency').css("opacity", "0");
            $('a.digital').css("opacity", "0");
            $('a.events').css("opacity", "0");
            $('a.branding').css("opacity", "1");
            $('a.branding').css("transition", "opacity 1s ease");
            $('a.contact').css("opacity", "0");
        }, begin[0].duration * 1000 - 3050)
        
    }
    // else if (index == 7) {
        // var begin = $('.branding-begin', $('#branding'));
        // begin.removeClass('visible');
        // var loop = $('.branding-loop', $('#branding'));
        // loop.removeClass('visible');
        // var close = $('.branding-close', $('#branding'));
        // close.addClass('visible');
        // $('.branding-close').attr('muted', 'muted').attr('autoplay', 'autoplay').attr('preload', 'auto');
        // close[0].play();
    // }
    else if (index == 4) {
        var begin = $('.branding-begin', $('#branding'));
        // begin.removeClass('visible');
        begin[0].removeEventListener('timeupdate',updateVideo3)
        console.log(begin)
        begin[0].addEventListener('ended', function() {
            begin[0].currentTime = 0;
        })
        setTimeout(function(){
            $('body').removeClass('branding-back');
            $('body').addClass('contact-back');

            var begin = $('.branding-begin', $('#branding'));
            begin.removeClass('visible index-loop');
            var loop = $('.branding-loop', $('#branding'));
            loop.removeClass('visible index-loop');
            var close = $('.branding-close', $('#branding'));
            close.removeClass('visible');
            var begin = $('.begin', $('#index'));
            begin.removeClass('visible index-loop');
            var loop = $('.loop', $('#index'));
            loop.removeClass('visible index-loop');
            var close = $('.close2', $('#index'));
            close.removeClass('visible');
    
            var begin = $('.contact-begin', $('#contact'));
            begin.addClass('visible');
            var loop = $('.contact-loop', $('#contact'));
            loop.removeClass('visible');
            $('#branding').removeClass('pre active');
    
            $('#contact').addClass('pre');
            setTimeout(function() {
                $('#contact').addClass('active');
                $('.contact-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
                var begin = $('.contact-begin', $('#contact'));
                begin[0].currentTime = 0;
                begin[0].play();
                console.log(begin[0].duration * 1000 + 500);
                // setTimeout(function () {
                //     begin.removeClass('visible');
                // }, begin[0].duration * 1000 + 500);
                setTimeout( function( ) {
                    // var loop = $('.digital-loop', $('#digital'));
                    // loop.addClass('visible');
                    // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
                    begin.addClass('visible');
                    // $('.loop').attr('preload', 'auto').attr('loop', true);
                    // var video =  $(document).getElementsByClassName('begin')[0]
                    begin[0].currentTime = 7.18
                    begin[0].play();
                    begin[0].addEventListener('timeupdate', updateVideo4)
                }, 7180);
            }, 20)
            $('.agency').css("opacity", "0");
            $('.digital').css("opacity", "0");
            $('.events').css("opacity", "0");
            $('.branding').css("opacity", "0");
            $('.contact').css("opacity", "1");
            $('.contact').css("transition", "opacity 1s ease");
    
            $('a.agency').css("opacity", "0");
            $('a.digital').css("opacity", "0");
            $('a.events').css("opacity", "0");
            $('a.branding').css("opacity", "0");
            $('a.contact').css("opacity", "1");
            $('a.contact').css("transition", "opacity 1s ease");
        }, begin[0].duration * 1000 - 3000)

    }
    else if (index == 5) {
        index = 4;
    }
}


$('a.vio').click( function (){
    $('#scroll-bar').hide();
    $('#scroll-title').hide();
    $('#details').animate({height: '100%'}, 500);
    $('figure.video').hide();
    $('a.vio').hide();
    $('a.vio1').show();
    $('.close1').show();

	$('.language').hide();
    $('#menu').hide();
})
$('.close1').click( function () {
    $('#scroll-bar').show();
    $('#scroll-title').show();
    $('#details').animate({height: '0%'}, 500);
    $('figure.video').show();
    $('a.vio').show();
    $('a.vio1').hide();
    $('.close1').hide();

	$('.language').show();
    $('#menu').show();
})
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("mySidenav").style.zIndex = "300";
}

function closeDial() {
    modal.style.display = "none";
    modal.style.zIndex = 0;
    $('#tiny').animate({height: '0%'}, 500);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function initialUI() {
    // var begin = $('.branding-begin', $('#branding'));
    // begin.removeClass('visible index-loop');
    // var loop = $('.branding-loop', $('#branding'));
    // loop.removeClass('visible index-loop');
    // var close = $('.branding-close', $('#branding'));
    // close.removeClass('visible');

    // var begin = $('.begin', $('#index'));
    // begin.removeClass('visible index-loop');
    // var loop = $('.loop', $('#index'));
    // loop.removeClass('visible index-loop');
    // var close = $('.close2', $('#index'));
    // close.removeClass('visible');

    // var begin = $('.event-begin', $('#event'));
    // begin.removeClass('visible ');
    // var loop = $('.event-loop', $('#event'));
    // loop.removeClass('visible index-loop');
    // var close = $('.event-close', $('#event'));
    // close.removeClass('visible');

    // var begin = $('.digital-begin', $('#digital'));
    // begin.removeClass('visible ');
    // var loop = $('.digital-loop', $('#digital'));
    // loop.removeClass('visible index-loop');
    // var close = $('.digital-close', $('#digital'));
    // close.removeClass('visible');
    
    // var begin = $('.contact-begin', $('#contact'));
    // begin.removeClass('visible ');
    // var loop = $('.contact-loop', $('#contact'));
    // loop.removeClass('visible index-loop');
    // var close = $('.contact-close', $('#contact'));
    // close.removeClass('visible');

    $('#index').removeClass('pre active');
    $('#branding').removeClass('pre active');
    $('#digital').removeClass('pre active');
    $('#contact').removeClass('pre active');
    $('#event').removeClass('pre active');
}

function clickAgency() {
    initialUI();

    index = 0;
    var begin = $('.digital-begin', $('#digital'));
    begin.removeClass('visible ');
    var loop = $('.digital-loop', $('#digital'));
    loop.removeClass('visible index-loop');
    var close = $('.digital-close', $('#digital'));
    $('#digital').removeClass('pre active');
    var begin = $('.begin', $('#index'));
    begin.addClass('visible index-loop');
    var loop = $('.loop', $('#index'));
    loop.removeClass('visible index-loop');
    var close = $('.close2', $('#index'));
    close.removeClass('visible');
    $('body').removeClass('digital-back');
    $('body').removeClass('event-back');
    $('body').removeClass('branding-back');
    $('body').removeClass('contact-back');
    $('body').css('background', '#41add8');
    
    $('#index').addClass('pre');
    setTimeout(function() {
        $('#index').addClass('active');
        $('.begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
        var begin = $('.begin', $('#index'));
        begin[0].currentTime = 0;
        begin[0].play();
        console.log(begin[0].duration * 1000 + 500);
        setTimeout( function( ) {
            // var loop = $('.loop', $('#index'));
            begin.addClass('visible');
            // $('.loop').attr('preload', 'auto').attr('loop', true);
            // var video =  $(document).getElementsByClassName('begin')[0]
            begin[0].currentTime = 3
            begin[0].play();
            begin[0].addEventListener('timeupdate', updateVideo)
            begin[0].addEventListener('ended', function() {
                begin[0].currentTime = 3;
            })

        }, 3000);
    }, 20);
    $('.agency').css("opacity", "1");
    $('.agency').css("transition", "opacity 1s ease");
    $('.digital').css("opacity", "0");
    $('.events').css("opacity", "0");
    $('.branding').css("opacity", "0");
    $('.contact').css("opacity", "0");

    $('a.agency').css("opacity", "1");
    $('a.agency').css("transition", "opacity 1s ease");
    $('a.digital').css("opacity", "0");
    $('a.events').css("opacity", "0");
    $('a.branding').css("opacity", "0");
    $('a.contact').css("opacity", "0");
}

function clickDigital() {
    initialUI();

    index = 1;
    var begin = $('.digital-begin', $('#digital'));
    begin.addClass('visible');
    var loop = $('.digital-loop', $('#digital'));
    loop.removeClass('visible index-loop');
    var close = $('.digital-close', $('#digital'));
    close.removeClass('visible');
    $('body').addClass('digital-back');
    $('body').removeClass('event-back');
    $('body').removeClass('branding-back');
    $('body').removeClass('contact-back');

    $('#digital').addClass('pre');
    setTimeout(function() {
        $('#digital').addClass('active');
        $('.digital-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
        var begin = $('.digital-begin', $('#digital'));
        begin[0].currentTime = 0;
        begin[0].play();
        console.log(begin[0].duration * 1000 + 500);
        setTimeout( function( ) {
            // var loop = $('.digital-loop', $('#digital'));
            // loop.addClass('visible');
            // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
            begin.addClass('visible');
            // $('.loop').attr('preload', 'auto').attr('loop', true);
            // var video =  $(document).getElementsByClassName('begin')[0]
            begin[0].currentTime = 4.77
            begin[0].play();
            begin[0].addEventListener('timeupdate', updateVideo1)
        }, 4770);
    }, 20);

    $('.agency').css("opacity", "0");
    $('.digital').css("opacity", "1");
    $('.digital').css("transition", "opacity 1s ease");
    $('.events').css("opacity", "0");
    $('.branding').css("opacity", "0");
    $('.contact').css("opacity", "0");

    $('a.agency').css("opacity", "0");
    $('a.digital').css("opacity", "1");
    $('a.digital').css("transition", "opacity 1s ease");
    $('a.events').css("opacity", "0");
    $('a.branding').css("opacity", "0");
    $('a.contact').css("opacity", "0");
}

function clickEvent() {
    initialUI();

    index = 2;
    var begin = $('.digital-begin', $('#digital'));
    begin.removeClass('visible ');
    var loop = $('.digital-loop', $('#digital'));
    loop.removeClass('visible index-loop');
    var close = $('.digital-close', $('#digital'));
    close.removeClass('visible');
    var begin = $('.begin', $('#index'));
    begin.removeClass('visible index-loop');
    var loop = $('.loop', $('#index'));
    loop.removeClass('visible index-loop');
    var close = $('.close2', $('#index'));
    close.removeClass('visible');

    $('body').removeClass('digital-back');
    $('body').addClass('event-back');
    $('body').removeClass('branding-back');
    $('body').removeClass('contact-back');

    var begin = $('.event-begin', $('#event'));
    begin.addClass('visible ');
    var loop = $('.event-loop', $('#event'));
    loop.removeClass('visible');

    $('#digital').removeClass('pre active');

    $('#event').addClass('pre');
    setTimeout(function() {
        $('#event').addClass('active');
        
        $('.event-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
        var begin = $('.event-begin', $('#event'));
        begin[0].currentTime = 0;
        begin[0].play();
        console.log(begin[0].duration * 1000 + 500);
        // setTimeout(function () {
        //     begin.removeClass('visible');

        // }, begin[0].duration * 1000 + 500);
        setTimeout( function( ) {
            // var loop = $('.digital-loop', $('#digital'));
            // loop.addClass('visible');
            // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
            begin.addClass('visible');
            // $('.loop').attr('preload', 'auto').attr('loop', true);
            // var video =  $(document).getElementsByClassName('begin')[0]
            begin[0].currentTime = 3.05
            begin[0].play();
            begin[0].addEventListener('timeupdate', updateVideo2)
        }, 3050);
    }, 20)
    $('.agency').css("opacity", "0");
    $('.digital').css("opacity", "0");
    $('.events').css("opacity", "1");
    $('.events').css("transition", "opacity 1s ease");
    $('.branding').css("opacity", "0");
    $('.contact').css("opacity", "0");

    $('a.agency').css("opacity", "0");
    $('a.digital').css("opacity", "0");
    $('a.events').css("opacity", "1");
    $('a.events').css("transition", "opacity 1s ease");
    $('a.branding').css("opacity", "0");
    $('a.contact').css("opacity", "0");
}

function clickBranding() {
    initialUI();

    index = 3;
    var begin = $('.event-begin', $('#event'));
    begin.removeClass('visible ');
    var loop = $('.event-loop', $('#event'));
    loop.removeClass('visible index-loop');
    var close = $('.event-close', $('#event'));
    close.removeClass('visible');
    var begin = $('.begin', $('#index'));
    begin.removeClass('visible index-loop');
    var loop = $('.loop', $('#index'));
    loop.removeClass('visible index-loop');
    var close = $('.close2', $('#index'));
    close.removeClass('visible');

    $('body').removeClass('digital-back');
    $('body').removeClass('event-back');
    $('body').addClass('branding-back');
    $('body').removeClass('contact-back');

    var begin = $('.branding-begin', $('#branding'));
    begin.addClass('visible ');
    var loop = $('.branding-loop', $('#branding'));
    loop.removeClass('visible');
    $('#event').removeClass('pre active');

    $('#branding').addClass('pre');
    setTimeout(function() {
        $('#branding').addClass('active');

        $('.branding-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
        var begin = $('.branding-begin', $('#branding'));
        begin[0].currentTime = 0;
        begin[0].play();
        console.log(begin[0].duration * 1000 + 500);
        // setTimeout(function () {
        //     begin.removeClass('visible');

        // }, begin[0].duration * 1000 + 500);
        setTimeout( function( ) {
            // var loop = $('.digital-loop', $('#digital'));
            // loop.addClass('visible');
            // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
            begin.addClass('visible');
            // $('.loop').attr('preload', 'auto').attr('loop', true);
            // var video =  $(document).getElementsByClassName('begin')[0]
            begin[0].currentTime = 3
            begin[0].play();
            begin[0].addEventListener('timeupdate', updateVideo3)
        }, 3000);
    }, 20)

    $('.agency').css("opacity", "0");
    $('.digital').css("opacity", "0");
    $('.events').css("opacity", "0");
    $('.branding').css("opacity", "1");
    $('.branding').css("transition", "opacity 1s ease");
    $('.contact').css("opacity", "0");

    $('a.agency').css("opacity", "0");
    $('a.digital').css("opacity", "0");
    $('a.events').css("opacity", "0");
    $('a.branding').css("opacity", "1");
    $('a.branding').css("transition", "opacity 1s ease");
    $('a.contact').css("opacity", "0");
}

function clickContact() {
    initialUI();

    index = 4;
    var begin = $('.branding-begin', $('#branding'));
    begin.removeClass('visible index-loop');
    var loop = $('.branding-loop', $('#branding'));
    loop.removeClass('visible index-loop');
    var close = $('.branding-close', $('#branding'));
    close.removeClass('visible');
    var begin = $('.begin', $('#index'));
    begin.removeClass('visible index-loop');
    var loop = $('.loop', $('#index'));
    loop.removeClass('visible index-loop');
    var close = $('.close2', $('#index'));
    close.removeClass('visible');

    $('body').removeClass('digital-back');
    $('body').removeClass('event-back');
    $('body').removeClass('branding-back');
    $('body').addClass('contact-back');

    var begin = $('.contact-begin', $('#contact'));
    begin.addClass('visible');
    var loop = $('.contact-loop', $('#contact'));
    loop.removeClass('visible');
    $('#branding').removeClass('pre active');

    $('#contact').addClass('pre');
    setTimeout(function() {
        $('#contact').addClass('active');
        $('.contact-begin').attr('autoplay', 'autoplay').attr('preload', 'auto');
        var begin = $('.contact-begin', $('#contact'));
        begin[0].currentTime = 0;
        begin[0].play();
        console.log(begin[0].duration * 1000 + 500);
        // setTimeout(function () {
        //     begin.removeClass('visible');
        // }, begin[0].duration * 1000 + 500);
        setTimeout( function( ) {
            // var loop = $('.digital-loop', $('#digital'));
            // loop.addClass('visible');
            // $('.digital-loop').attr('autoplay', 'autoplay').attr('preload', 'auto').attr('loop', true);
            begin.addClass('visible');
            // $('.loop').attr('preload', 'auto').attr('loop', true);
            // var video =  $(document).getElementsByClassName('begin')[0]
            begin[0].currentTime = 7.18
            begin[0].play();
            begin[0].addEventListener('timeupdate', updateVideo4)
        }, 7180);
    }, 20)
    $('.agency').css("opacity", "0");
    $('.digital').css("opacity", "0");
    $('.events').css("opacity", "0");
    $('.branding').css("opacity", "0");
    $('.contact').css("opacity", "1");
    $('.contact').css("transition", "opacity 1s ease");

    $('a.agency').css("opacity", "0");
    $('a.digital').css("opacity", "0");
    $('a.events').css("opacity", "0");
    $('a.branding').css("opacity", "0");
    $('a.contact').css("opacity", "1");
    $('a.contact').css("transition", "opacity 1s ease");
}

$('#accueil').click(function () {
    clickAgency();
    document.getElementById("mySidenav").style.width = "0";
})

$('#digital1').click(function () {
    clickDigital()
    document.getElementById("mySidenav").style.width = "0";
})

$('#evenementiel').click(function () {
    clickEvent()
    document.getElementById("mySidenav").style.width = "0";
})

$('#branding1').click(function () {
    clickBranding()
    document.getElementById("mySidenav").style.width = "0";
})

$('#contact1').click(function () {
    clickContact()
    document.getElementById("mySidenav").style.width = "0";
})


$('.agency').click(function () {
    clickAgency()
})

$('.digital').click(function () {
   clickDigital()
})

$('.events').click(function () {
    clickEvent()
})

$('.branding').click(function () {
    clickBranding()
})

$('.contact').click(function () {
    clickContact()
    
})

