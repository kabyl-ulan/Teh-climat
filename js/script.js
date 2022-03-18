$(".price__conditions").slick({
    slidesToShow: 4,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})

$(".certificates__item").slick({
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})

$(".bren-icon").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
})

$('.review__videos').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '20px',
    dots: true,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '15px',
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '100px'
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '15px'
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '10px'
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                centerPadding: '0'
            }
        },
    ]
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-red";
}
