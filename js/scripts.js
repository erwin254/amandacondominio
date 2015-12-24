function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(-37.8019602,-72.7152184),
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 400) 
        $('.menu-main').addClass('fixed-menu');
     else 
        $('.menu-main').removeClass('fixed-menu');
});

$(document).ready(function(){
    /* Configuración carrusel*/
    $('.slider-int , .slider-ext').slick({
        infinite: true,
        slidesToShow:3,
        slidesToScroll:1,
        centerPadding: '40px',
        autoplay:true,
        autoplaySpeed: 3000,
        responsive: [
        {
            breakpoint: 992,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 579,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    
    var mover = 50;
    $('ul.navigation, .sidebar-left').on('click', 'a', function(e) {       
        e.preventDefault();
        console.log(this.innerHTML);
        if (this.innerHTML == "Inicio")
            mover = 0;
        else
            mover = 50;
        
        $('.sidebar-left').removeClass('sidebar-open');
        $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - mover
        }, 800);
    });
});