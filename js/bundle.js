var header = document.getElementById("header-bg");
var footer = document.getElementById("footer-bg");

// initializing the object with colors of the template
var colors = {
    red: '#fe4b64',
    blue: '#5f93fe',
    yellow: '#ffca2a',
    green: '#9ecb45',
    white: '#ffffff',
    gray: '#f5f3f0'
};

// var circle = new createjs.Shape();
// circle.graphics.beginFill(colors.red).drawCircle(0, 0, 100);

var initHeader = function (context, width, height) {
    var x = (width / 2) * 0.2;
    var y = (height) * 0.1;

    context.fillStyle = colors.blue;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo((width / 2) - 58, 0);
    context.lineTo((width / 2) + x, height - 170);
    context.lineTo(0, height);
    context.closePath();
    context.fill();

    context.fillStyle = colors.yellow;
    context.beginPath();
    context.moveTo(0, (height / 2));
    context.lineTo((width / 2) + 150, (height / 2) + 80);
    context.lineTo((width / 2) + x, height - (y + (y / 2)));
    context.lineTo(0, height);
    context.closePath();
    context.fill();

    context.fillStyle = colors.red;
    context.beginPath();
    context.moveTo(width, 0);
    context.lineTo((width / 2) - 60, 0);
    context.lineTo((width / 2) + x, height - y);
    context.lineTo(width, height);
    context.closePath();
    context.fill();
};

var initFooter = function (context, width, height) {

    var y = height * 0.3;
    var x = width * 0.2;
    if (width <= 1300) {
        x = width * 0.05;
        y = height * 0.1;
    } else if (width <= 1700) {
        x = width * 0.1;
        y = height * 0.2;
    }

    context.fillStyle = colors.red;
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, 0);
    context.lineTo(width, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();

    if (width > 766) {
        context.fillStyle = colors.blue;
        context.beginPath();
        context.moveTo(width - x, height);
        context.lineTo(width, height / 2);
        context.lineTo(width, height);
        context.closePath();
        context.fill();

        context.fillStyle = colors.yellow;
        context.beginPath();
        context.moveTo(0, (y * 0.3));
        context.lineTo(x, y - (y * 0.50));
        context.lineTo(x + (x * 0.60), height);
        context.lineTo(0, height);
        context.closePath();
        context.fill();
    }
};

var initBrave = function () {
    var canvas = document.getElementById('brave-bg'),
        context = canvas.getContext('2d'),
        width, height, x, y;


    canvas.height = height = $('#brave-bg').outerHeight(true);
    canvas.width = width = window.innerWidth - 2;

    y = height * 0.05;
    x = width * 0.05;


    if (width >= 766) {
        context.fillStyle = colors.white;
        context.beginPath();
        context.moveTo(0, height - (y * 4));
        context.lineTo(width, height);
        context.lineTo(0, height);
        context.closePath();
        context.fill();

        context.fillStyle = colors.white;
        context.beginPath();
        context.moveTo(0, y * 4);
        context.lineTo(width, 0);
        context.lineTo(0, 0);
        context.closePath();
        context.fill();
    }

    context.fillStyle = colors.green;
    context.beginPath();
    context.moveTo(0, 0);
    if (width >= 766) {
        context.lineTo((width / 2) - x - x, y);
        context.lineTo((width / 2) - x, height - y);
    } else {
        context.lineTo(width, y);
        context.lineTo(width, height - y);
    }
    context.lineTo(0, height);
    context.closePath();
    context.fill();
};

var initMovies = function () {
    var canvas = document.getElementById('movies-bg'),
        context = canvas.getContext('2d'),
        width, height, x, y;


    canvas.height = height = $('.section-movies .movies-container').outerHeight(true);
    canvas.width = width = window.innerWidth - 2;

    y = height * 0.05;
    x = width * 0.05;

    context.fillStyle = colors.blue;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(width, y * 4);
    context.lineTo(width, height - (y * 4));
    context.lineTo(0, height);
    context.closePath();
    context.fill();

    context.fillStyle = colors.yellow;
    context.beginPath();
    context.moveTo(width, 0);
    context.lineTo((width / 2) + (x * 2), y);
    context.lineTo((width / 2) + x, height - y);
    context.lineTo(width, height);
    context.closePath();
    context.fill();
};
var initBackground = function () {
    var canvas = document.getElementById('background'),
        context = canvas.getContext('2d'),
        width, height, x, y;


    canvas.height = height = $('.section-movies').outerHeight(true);
    canvas.width = width = window.innerWidth - 2;

    var fix = 0;

    if (width < 1200) {
        fix = 0.02;
    }

    y = height * (0.07 - fix);
    x = width * (0.07 - fix);

    context.fillStyle = colors.green;
    context.beginPath();
    if(width >= 766) {
        context.moveTo(x, height / 2);
        context.lineTo(x * 2, height - (y * 1.8));
        context.lineTo(width - (x * 2), height);
        context.lineTo(width - x, y);
    } else {
        context.moveTo(0, height / 2);
        context.lineTo(0, height - (y * 1.2));
        context.lineTo(width, height);
        context.lineTo(width, y);
    }
    context.closePath();
    context.fill();

    context.fillStyle = colors.gray;
    context.beginPath();
    if(width >= 766) {

        y = height * (0.05 - fix);
        x = width * (0.05 - fix);

        context.moveTo(x, height / 2);
        context.lineTo(x * 2, height - (y * 2));
        context.lineTo(width - (x * 2), height - (y * 0.5));
        context.lineTo(width - x, y);
    } else {
        context.moveTo(0, height / 2);
        context.lineTo(0, height - y);
        context.lineTo(width, height - (y * 0.5));
        context.lineTo(width, y);
    }


    context.closePath();
    context.fill();
};

window.addEventListener("resize", handleResize);

function handleResize() {
    var windowWidth = window.innerWidth - 2;
    header.width = windowWidth;
    header.height = $('header').height();
    footer.width = windowWidth;
    footer.height = $('footer').outerHeight(true);
    var headerContext = header.getContext('2d');
    var footerContext = footer.getContext('2d');
    footer.style.background = "transparent";

    initHeader(headerContext, header.width, header.height);
    initFooter(footerContext, footer.width, footer.height);
    initBrave();
    initMovies();
    initBackground();
}

$(document).ready(function () {
    var owl = $('.owl-carousel').owlCarousel({
        items: 7,
        margin: 5,
        autoplay: true,
        nav: false,
        dots: false,
        rewind: true,
        autoHeight: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            1024: {
                items: 7
            }
        }
    });

    handleResize(); // First draw
    $('.left-navigation').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.right-navigation').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });
});