var pswpElement = document.querySelectorAll('.pswp')[0];

// Build items array
// Digital Paintings
// var items = [
//     {
//         src: 'https://placekitten.com/600/400',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'https://placekitten.com/1200/900',
//         w: 1200,
//         h: 900
//     }
// ];

var digitalPaintings = [
    {
        src: 'images/digital/14.jpg',
        w: 1500,
        h: 962
    },
    {
        src: 'images/digital/15.jpg',
        w: 1000,
        h: 741
    },
    {
        src: 'images/digital/16.jpg',
        w: 1500,
        h: 947
    },
    {
        src: 'images/digital/1.png',
        w: 1000,
        h: 682
    },
    {
        src: 'images/digital/2.png',
        w: 1500,
        h: 869
    },
    {
        src: 'images/digital/13.png',
        w: 2041,
        h: 1170
    },
    {
        src: 'images/digital/3.png',
        w: 1500,
        h: 758
    },
    {
        src: 'images/digital/4.png',
        w: 1000,
        h: 1294
    },
    {
        src: 'images/digital/5.png',
        w: 1000,
        h: 881
    },
    {
        src: 'images/digital/6.png',
        w: 1000,
        h: 1284
    },
    {
        src: 'images/digital/7.png',
        w: 1000,
        h: 892
    },
    {
        src: 'images/digital/8.png',
        w: 1000,
        h: 1000
    },
    {
        src: 'images/digital/9.png',
        w: 800,
        h: 1096
    },
    {
        src: 'images/digital/10.png',
        w: 1000,
        h: 838
    },
    {
        src: 'images/digital/11.png',
        w: 600,
        h: 740
    },
    {
        src: 'images/digital/12.png',
        w: 600,
        h: 600
    },
    
];

var printDesigns = [
    {
        src: 'images/print/1.png',
        w: 1000,
        h: 571
    },
    {
        src: 'images/print/2.png',
        w: 1000,
        h: 571
    },
    {
        src: 'images/print/3.png',
        w: 1500,
        h: 727
    },
    {
        src: 'images/print/4.png',
        w: 1500,
        h: 727
    },
    {
        src: 'images/print/5.jpg',
        w: 2000,
        h: 1125
    },
    {
        src: 'images/print/6.jpg',
        w: 2116,
        h: 1125
    },
    {
        src: 'images/print/7.jpg',
        w: 1164,
        h: 1125
    },
    {
        src: 'images/print/8.png',
        w: 878,
        h: 508
    },
    {   
        src: 'images/print/9.png',
        w: 878,
        h: 508
    },
    {  
        src: 'images/print/10.png',
        w: 878,
        h: 508
    },
    {   
        src: 'images/print/11.png',
        w: 878,
        h: 508
    },
    {
        src: 'images/print/12.png',
        w: 547,
        h: 563
    },
   
];

var sketch = [
    {
        src: 'images/sketches/1.jpg',
        w: 1000,
        h: 1178
    },
    {
        src: 'images/sketches/2.jpg',
        w: 1000,
        h: 1397
    },
    {
        src: 'images/sketches/3.jpg',
        w: 1000,
        h: 1167
    },
    {
        src: 'images/sketches/4.jpg',
        w: 1000,
        h: 1321
    },
];    

var market = [
    {
        src: 'images/marketing/1.png',
        w: 2000,
        h: 1125
    },
    {
        src: 'images/marketing/2.png',
        w: 2000,
        h: 1125
    },
    {
        src: 'images/marketing/3.png',
        w: 2000,
        h: 1125
    },
    {
        src: 'images/marketing/4.png',
        w: 2000,
        h: 1125
    },
    {
        src: 'images/marketing/5.png',
        w: 2000,
        h: 1125
    },
    {
        src: 'images/marketing/6.png',
        w: 2000,
        h: 1125
    },
    {
        src: 'images/marketing/7.png',
        w: 2000,
        h: 1125
    },
    {
        src: 'images/marketing/8.png',
        w: 2000,
        h: 1125
    },
    {
        src: 'images/marketing/9.png',
        w: 2000,
        h: 1125
    }
];   

var cartoon = [
    {
        src: 'images/caricature/1.jpg',
        w: 1929,
        h: 1000
    },
    {
        src: 'images/caricature/2.jpg',
        w: 1294,
        h: 1000
    },
    {
        src: 'images/caricature/3.jpg',
        w: 1294,
        h: 1000
    },
    {
        src: 'images/caricature/4.jpg',
        w: 1294,
        h: 1000
    },
    {
        src: 'images/caricature/5.jpg',
        w: 1294,
        h: 1000
    },
    {
        src: 'images/caricature/6.jpg',
        w: 1294,
        h: 1000
    },
    {
        src: 'images/caricature/7.jpg',
        w: 1294,
        h: 1000
    },
    {
        src: 'images/caricature/8.jpg',
        w: 1294,
        h: 1000
    },
    {
        src: 'images/caricature/9.jpg',
        w: 1294,
        h: 1000
    },
    {
        src: 'images/caricature/10.jpg',
        w: 1294,
        h: 1000
    },
];   

var logos = [
    {
        src: 'images/logo/1.jpg',
        w: 478,
        h: 299
    }, 
    {
        src: 'images/logo/2.jpg',
        w: 478,
        h: 299
    },
    {
        src: 'images/logo/3.jpg',
        w: 478,
        h: 299
    },
    {
        src: 'images/logo/4.jpg',
        w: 478,
        h: 299
    },
    {
        src: 'images/logo/5.jpg',
        w: 478,
        h: 299
    },
];    

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
$('#digital-paintings-img').click(function(){
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, digitalPaintings, options);
	gallery.init();
});

$('#print-design-img').click(function(){
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, printDesigns, options);
	gallery.init();
});

$('#sketch-img').click(function(){
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, sketch, options);
	gallery.init();
});

$('#marketing-banners-img').click(function(){
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, market, options);
	gallery.init();
});

$('#caricature-img').click(function(){
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, cartoon, options);
	gallery.init();
});

$('#logo-design-img').click(function(){
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, logos, options);
	gallery.init();
});