var header = document.getElementById("header-bg");
var footer = document.getElementById("footer-bg");
var stage = new createjs.Stage(header);

var headerShapes = {
    blueShape: new createjs.Shape(),
    blueShapePoints: {},
    redShape: new createjs.Shape(),
    redShapePoints: {},
    yellowShape: new createjs.Shape(),
    yellowShapePoints: {},
};

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

function createShape(shape, color, points, startX, startY, lines) {
    shape.graphics.beginFill(color)
        .moveTo(startX, startY);

    points.point1 = shape.graphics
        .lineTo(lines[0].x, lines[0].y)
        .command;

    points.point2 = shape.graphics
        .lineTo(lines[1].x, lines[1].y)
        .command;

    points.point3 = shape.graphics
        .lineTo(lines[2].x, lines[2].y)
        .command;

    shape.graphics.closePath();
}

function updatePoints(old, news) {
    old.forEach( function (point, index) {
        createjs.Tween.get(point)
            .to(news[index], 0);
    });
}

function showContent() {
    $('header .logo img, header .main-menu').removeClass('hidden');
    setTimeout(function() {
        $('header .content-right .subtitle').removeClass('hidden');
    }, 200);
    setTimeout(function() {
        $('header .content-right .line-left').addClass('show');
        $('header .content-right .title').removeClass('hidden');
    }, 300);

    setTimeout(function() {
        $('header .content-right .btn-subscribe').removeClass('hidden');
        $('header .content-right .btn-subscribe + p').removeClass('hidden');
    }, 400);

    setTimeout(function() {
        $('header .ipad').removeClass('hidden');
    }, 600);

    setTimeout(function() {
        $('header .iphone').removeClass('hidden');
    }, 800);
}

var initHeader = function (context, width, height) {
    var x = (width / 2) * 0.2;
    var y = (height) * 0.1;


    var point1 = {},
        point2 = {},
        point3 = {};


    point1.x = (width / 2);
    point1.y = 0;

    point2.x = (width / 2) + x;
    point2.y = height - (y + (y / 2));

    point3.x = 0;
    point3.y = height;

    if (!headerShapes.yellowShapePoints.point1) {
        var origin = {
            x: 0,
            y: 0
        };
        createShape(
            headerShapes.yellowShape,
            colors.yellow,
            headerShapes.yellowShapePoints,
            origin.x,
            origin.y,
            [point1, point1, origin]
        );
        createjs.Tween.get(headerShapes.yellowShapePoints.point3)
            .wait(700)
            .to(point3, 500);

        createjs.Tween.get(headerShapes.yellowShapePoints.point2)
            .wait(1100)
            .to(point2, 500);
        stage.addChild(headerShapes.yellowShape);
    } else {
        updatePoints(
            [
                headerShapes.yellowShapePoints.point1,
                headerShapes.yellowShapePoints.point2,
                headerShapes.yellowShapePoints.point3
            ],
            [point1, point2, point3]
        );
    }


    point1.x = (width / 2);
    point1.y = 0;

    point2.x = (width / 2) + x;
    point2.y = (height / 2) + 170;

    point3.x = 0;
    point3.y = (height/2) + 58;


    if (!headerShapes.blueShapePoints.point1) {

        createShape(
            headerShapes.blueShape,
            colors.blue,
            headerShapes.blueShapePoints,
            0,
            0,
            [point1, point1, {x:0, y: 0}]
        );
        createjs.Tween.get(headerShapes.blueShapePoints.point3)
            .to(point3, 600)
            .call(showContent);
        createjs.Tween.get(headerShapes.blueShapePoints.point2)
            .wait(700)
            .to(point2, 400);
        stage.addChild(headerShapes.blueShape);
    } else {
        updatePoints(
            [
                headerShapes.blueShapePoints.point1,
                headerShapes.blueShapePoints.point2,
                headerShapes.blueShapePoints.point3,
            ],
            [point1, point2, point3]
        );
    }


    point1.x = width;
    point1.y = 0;

    point2.x = (width / 2) - 60;
    point2.y = 0;

    point3.x = (width / 2) + x;
    point3.y = height - y;

    var point4 = {
        x: width,
        y: height
    };

    if (!headerShapes.redShapePoints.point1) {
        headerShapes.redShapePoints.point1 = headerShapes.redShape.graphics
            .beginFill(colors.red)
            .moveTo(point1.x, point1.y)
            .command;

        headerShapes.redShapePoints.point2 = headerShapes.redShape.graphics
            .lineTo(point1.x, point1.y)
            .command;

        headerShapes.redShapePoints.point3 = headerShapes.redShape.graphics
            .lineTo(point4.x, point4.y)
            .command;

        headerShapes.redShapePoints.point4 = headerShapes.redShape.graphics
            .lineTo(point4.x, point4.y)
            .command;

        headerShapes.redShape.graphics.closePath();

        createjs.Tween.get(headerShapes.redShapePoints.point2)
            .to(point2, 400);
        createjs.Tween.get(headerShapes.redShapePoints.point3)
            .wait(500)
            .to(point3, 400);

        stage.addChild(headerShapes.redShape);
    } else {
        updatePoints(
            [
                headerShapes.redShapePoints.point1,
                headerShapes.redShapePoints.point2,
                headerShapes.redShapePoints.point3,
                headerShapes.redShapePoints.point4
            ],
            [point1, point2, point3, point4]
        );
    }

    stage.update();
    // context.fillStyle = colors.blue;
    // context.beginPath();
    // context.moveTo(0, 0);
    // context.lineTo((width / 2) - 58, 0);
    // context.lineTo((width / 2) + x, height - 170);
    // context.lineTo(0, height);
    // context.closePath();
    // context.fill();
    //
    // context.fillStyle = colors.yellow;
    // context.beginPath();
    // context.moveTo(0, (height / 2));
    // context.lineTo((width / 2) + 150, (height / 2) + 80);
    // context.lineTo((width / 2) + x, height - (y + (y / 2)));
    // context.lineTo(0, height);
    // context.closePath();
    // context.fill();
    //
    // context.fillStyle = colors.red;
    // context.beginPath();
    // context.moveTo(width, 0);
    // context.lineTo((width / 2) - 60, 0);
    // context.lineTo((width / 2) + x, height - y);
    // context.lineTo(width, height);
    // context.closePath();
    // context.fill();
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

$(".animsition").animsition({
  inClass: 'fade-in',
  outClass: 'fade-out',
  inDuration: 300,
  outDuration: 800,
  linkElement: '.a-link',
  // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
  loading: true,
  loadingParentElement: 'body', //animsition wrapper element
  loadingClass: 'animsition-loading',
  loadingInner: '', // e.g '<img src="loading.svg" />'
  timeout: false,
  timeoutCountdown: 5000,
  onLoadEvent: true,
  browser: ['animation-duration', '-webkit-animation-duration'],
  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
  overlay: false,
  overlayClass: 'animsition-overlay-slide',
  overlayParentElement: 'body',
  transition: function (url) {
    window.location.href = url;
  }
});

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
    createjs.Ticker.addEventListener('tick',stage);
    $('.left-navigation').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.right-navigation').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });
});
