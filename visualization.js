function randn_bm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}

function getRandomData() {
    let ret = [];
    for (let i = 0; i < 50000; i++) {
        let r1 = (randn_bm() - 0.5) / 4;
        let r2 = i / 1e6 + r1;
        let point = {
            location: new google.maps.LatLng(40.71427 + r1, -74.00597 + r2),
            weight: Math.random() * 1000
        };
        ret.push(point);
    }
    return ret;
}

const cm_matter = ['rgba(0, 255, 255, 0)',
    "RGBA(254,238,176,0.9)", "RGBA(254,236,175,0.9)", "RGBA(254,235,174,0.9)", "RGBA(254,233,172,0.9)", "RGBA(254,232,171,0.9)", "RGBA(253,231,170,0.9)", "RGBA(253,229,168,0.9)", "RGBA(253,228,167,0.9)", "RGBA(253,226,165,0.9)", "RGBA(253,225,164,0.9)", "RGBA(253,224,163,0.9)", "RGBA(253,222,161,0.9)", "RGBA(252,221,160,0.9)", "RGBA(252,219,159,0.9)", "RGBA(252,218,157,0.9)", "RGBA(252,217,156,0.9)", "RGBA(252,215,155,0.9)", "RGBA(252,214,154,0.9)", "RGBA(252,212,152,0.9)", "RGBA(252,211,151,0.9)", "RGBA(251,210,150,0.9)", "RGBA(251,208,149,0.9)", "RGBA(251,207,147,0.9)", "RGBA(251,205,146,0.9)", "RGBA(251,204,145,0.9)", "RGBA(251,203,144,0.9)", "RGBA(251,201,142,0.9)", "RGBA(250,200,141,0.9)", "RGBA(250,199,140,0.9)", "RGBA(250,197,139,0.9)", "RGBA(250,196,138,0.9)", "RGBA(250,194,136,0.9)", "RGBA(250,193,135,0.9)", "RGBA(249,192,134,0.9)", "RGBA(249,190,133,0.9)", "RGBA(249,189,132,0.9)", "RGBA(249,187,131,0.9)", "RGBA(249,186,130,0.9)", "RGBA(248,185,128,0.9)", "RGBA(248,183,127,0.9)", "RGBA(248,182,126,0.9)", "RGBA(248,181,125,0.9)", "RGBA(248,179,124,0.9)", "RGBA(247,178,123,0.9)", "RGBA(247,176,122,0.9)", "RGBA(247,175,121,0.9)", "RGBA(247,174,120,0.9)", "RGBA(247,172,119,0.9)", "RGBA(246,171,118,0.9)", "RGBA(246,170,117,0.9)", "RGBA(246,168,116,0.9)", "RGBA(246,167,115,0.9)", "RGBA(245,165,114,0.9)", "RGBA(245,164,113,0.9)", "RGBA(245,163,112,0.9)", "RGBA(245,161,111,0.9)", "RGBA(245,160,110,0.9)", "RGBA(244,159,109,0.9)", "RGBA(244,157,108,0.9)", "RGBA(244,156,107,0.9)", "RGBA(243,155,106,0.9)", "RGBA(243,153,105,0.9)", "RGBA(243,152,104,0.9)", "RGBA(243,150,104,0.9)", "RGBA(242,149,103,0.9)", "RGBA(242,148,102,0.9)", "RGBA(242,146,101,0.9)", "RGBA(241,145,100,0.9)", "RGBA(241,144,99,0.9)", "RGBA(241,142,99,0.9)", "RGBA(241,141,98,0.9)", "RGBA(240,139,97,0.9)", "RGBA(240,138,96,0.9)", "RGBA(240,137,96,0.9)", "RGBA(239,135,95,0.9)", "RGBA(239,134,94,0.9)", "RGBA(239,133,93,0.9)", "RGBA(238,131,93,0.9)", "RGBA(238,130,92,0.9)", "RGBA(237,129,92,0.9)", "RGBA(237,127,91,0.9)", "RGBA(237,126,90,0.9)", "RGBA(236,124,90,0.9)", "RGBA(236,123,89,0.9)", "RGBA(236,122,89,0.9)", "RGBA(235,120,88,0.9)", "RGBA(235,119,88,0.9)", "RGBA(234,118,87,0.9)", "RGBA(234,116,87,0.9)", "RGBA(233,115,86,0.9)", "RGBA(233,114,86,0.9)", "RGBA(232,112,85,0.9)", "RGBA(232,111,85,0.9)", "RGBA(232,109,85,0.9)", "RGBA(231,108,84,0.9)", "RGBA(231,107,84,0.9)", "RGBA(230,105,84,0.9)", "RGBA(229,104,84,0.9)", "RGBA(229,103,83,0.9)", "RGBA(228,101,83,0.9)", "RGBA(228,100,83,0.9)", "RGBA(227,99,83,0.9)", "RGBA(227,98,83,0.9)", "RGBA(226,96,83,0.9)", "RGBA(225,95,82,0.9)", "RGBA(225,94,82,0.9)", "RGBA(224,92,82,0.9)", "RGBA(224,91,82,0.9)", "RGBA(223,90,82,0.9)", "RGBA(222,89,82,0.9)", "RGBA(221,87,82,0.9)", "RGBA(221,86,83,0.9)", "RGBA(220,85,83,0.9)", "RGBA(219,84,83,0.9)", "RGBA(219,82,83,0.9)", "RGBA(218,81,83,0.9)", "RGBA(217,80,83,0.9)", "RGBA(216,79,83,0.9)", "RGBA(215,78,84,0.9)", "RGBA(215,77,84,0.9)", "RGBA(214,76,84,0.9)", "RGBA(213,74,84,0.9)", "RGBA(212,73,85,0.9)", "RGBA(211,72,85,0.9)", "RGBA(210,71,85,0.9)", "RGBA(209,70,85,0.9)", "RGBA(208,69,86,0.9)", "RGBA(207,68,86,0.9)", "RGBA(206,67,86,0.9)", "RGBA(206,66,87,0.9)", "RGBA(205,65,87,0.9)", "RGBA(204,64,87,0.9)", "RGBA(203,63,88,0.9)", "RGBA(202,62,88,0.9)", "RGBA(201,61,88,0.9)", "RGBA(200,60,89,0.9)", "RGBA(198,59,89,0.9)", "RGBA(197,58,89,0.9)", "RGBA(196,58,90,0.9)", "RGBA(195,57,90,0.9)", "RGBA(194,56,90,0.9)", "RGBA(193,55,91,0.9)", "RGBA(192,54,91,0.9)", "RGBA(191,53,91,0.9)", "RGBA(190,53,92,0.9)", "RGBA(189,52,92,0.9)", "RGBA(188,51,92,0.9)", "RGBA(187,50,93,0.9)", "RGBA(185,49,93,0.9)", "RGBA(184,49,93,0.9)", "RGBA(183,48,94,0.9)", "RGBA(182,47,94,0.9)", "RGBA(181,46,94,0.9)", "RGBA(180,46,94,0.9)", "RGBA(178,45,95,0.9)", "RGBA(177,44,95,0.9)", "RGBA(176,44,95,0.9)", "RGBA(175,43,96,0.9)", "RGBA(174,42,96,0.9)", "RGBA(173,42,96,0.9)", "RGBA(171,41,96,0.9)", "RGBA(170,40,97,0.9)", "RGBA(169,40,97,0.9)", "RGBA(168,39,97,0.9)", "RGBA(166,39,97,0.9)", "RGBA(165,38,97,0.9)", "RGBA(164,38,98,0.9)", "RGBA(163,37,98,0.9)", "RGBA(161,37,98,0.9)", "RGBA(160,36,98,0.9)", "RGBA(159,35,98,0.9)", "RGBA(158,35,98,0.9)", "RGBA(156,35,99,0.9)", "RGBA(155,34,99,0.9)", "RGBA(154,34,99,0.9)", "RGBA(153,33,99,0.9)", "RGBA(151,33,99,0.9)", "RGBA(150,32,99,0.9)", "RGBA(149,32,99,0.9)", "RGBA(147,31,99,0.9)", "RGBA(146,31,99,0.9)", "RGBA(145,31,99,0.9)", "RGBA(144,30,99,0.9)", "RGBA(142,30,99,0.9)", "RGBA(141,30,99,0.9)", "RGBA(140,29,99,0.9)", "RGBA(138,29,99,0.9)", "RGBA(137,29,99,0.9)", "RGBA(136,28,99,0.9)", "RGBA(134,28,99,0.9)", "RGBA(133,28,99,0.9)", "RGBA(132,28,99,0.9)", "RGBA(130,27,99,0.9)", "RGBA(129,27,98,0.9)", "RGBA(128,27,98,0.9)", "RGBA(126,27,98,0.9)", "RGBA(125,27,98,0.9)", "RGBA(124,26,98,0.9)", "RGBA(122,26,97,0.9)", "RGBA(121,26,97,0.9)", "RGBA(120,26,97,0.9)", "RGBA(118,26,97,0.9)", "RGBA(117,26,96,0.9)", "RGBA(116,25,96,0.9)", "RGBA(114,25,96,0.9)", "RGBA(113,25,95,0.9)", "RGBA(111,25,95,0.9)", "RGBA(110,25,95,0.9)", "RGBA(109,25,94,0.9)", "RGBA(107,25,94,0.9)", "RGBA(106,24,93,0.9)", "RGBA(105,24,93,0.9)", "RGBA(103,24,92,0.9)", "RGBA(102,24,92,0.9)", "RGBA(101,24,92,0.9)", "RGBA(99,24,91,0.9)", "RGBA(98,24,91,0.9)", "RGBA(97,23,90,0.9)", "RGBA(95,23,89,0.9)", "RGBA(94,23,89,0.9)", "RGBA(93,23,88,0.9)", "RGBA(91,23,88,0.9)", "RGBA(90,23,87,0.9)", "RGBA(89,23,86,0.9)", "RGBA(87,22,86,0.9)", "RGBA(86,22,85,0.9)", "RGBA(84,22,85,0.9)", "RGBA(83,22,84,0.9)", "RGBA(82,22,83,0.9)", "RGBA(81,22,83,0.9)", "RGBA(79,21,82,0.9)", "RGBA(78,21,81,0.9)", "RGBA(77,21,80,0.9)", "RGBA(75,21,80,0.9)", "RGBA(74,21,79,0.9)", "RGBA(73,20,78,0.9)", "RGBA(71,20,78,0.9)", "RGBA(70,20,77,0.9)", "RGBA(69,20,76,0.9)", "RGBA(67,20,75,0.9)", "RGBA(66,19,74,0.9)", "RGBA(65,19,74,0.9)", "RGBA(63,19,73,0.9)", "RGBA(62,19,72,0.9)", "RGBA(61,18,71,0.9)", "RGBA(60,18,70,0.9)", "RGBA(58,18,70,0.9)", "RGBA(57,17,69,0.9)", "RGBA(56,17,68,0.9)", "RGBA(54,17,67,0.9)", "RGBA(53,16,66,0.9)", "RGBA(52,16,65,0.9)", "RGBA(51,16,64,0.9)", "RGBA(49,15,63,0.9)", "RGBA(48,15,63,0.9)", "RGBA(47,15,62,0.9)"];
const cm_balance = ['rgba(0, 255, 255, 0)',
    "RGBA(23,28,66,0.9)", "RGBA(24,29,69,0.9)", "RGBA(25,31,72,0.9)", "RGBA(26,32,75,0.9)", "RGBA(27,34,79,0.9)", "RGBA(28,35,82,0.9)", "RGBA(29,36,85,0.9)", "RGBA(30,38,88,0.9)", "RGBA(31,39,91,0.9)", "RGBA(32,40,95,0.9)", "RGBA(33,42,98,0.9)", "RGBA(34,43,101,0.9)", "RGBA(35,44,104,0.9)", "RGBA(36,46,108,0.9)", "RGBA(36,47,111,0.9)", "RGBA(37,48,115,0.9)", "RGBA(38,49,118,0.9)", "RGBA(38,51,122,0.9)", "RGBA(39,52,125,0.9)", "RGBA(39,53,129,0.9)", "RGBA(40,55,132,0.9)", "RGBA(40,56,136,0.9)", "RGBA(40,57,140,0.9)", "RGBA(41,59,143,0.9)", "RGBA(41,60,147,0.9)", "RGBA(41,61,151,0.9)", "RGBA(41,63,154,0.9)", "RGBA(41,64,158,0.9)", "RGBA(40,66,162,0.9)", "RGBA(40,67,166,0.9)", "RGBA(39,69,169,0.9)", "RGBA(38,70,173,0.9)", "RGBA(37,72,176,0.9)", "RGBA(35,74,179,0.9)", "RGBA(33,76,182,0.9)", "RGBA(30,78,184,0.9)", "RGBA(28,80,187,0.9)", "RGBA(25,82,188,0.9)", "RGBA(21,84,189,0.9)", "RGBA(18,87,190,0.9)", "RGBA(16,89,190,0.9)", "RGBA(13,91,190,0.9)", "RGBA(11,94,190,0.9)", "RGBA(10,96,190,0.9)", "RGBA(9,98,190,0.9)", "RGBA(10,100,190,0.9)", "RGBA(11,102,189,0.9)", "RGBA(12,104,189,0.9)", "RGBA(14,106,189,0.9)", "RGBA(16,108,189,0.9)", "RGBA(19,110,188,0.9)", "RGBA(21,112,188,0.9)", "RGBA(24,114,188,0.9)", "RGBA(27,116,187,0.9)", "RGBA(29,118,187,0.9)", "RGBA(32,120,187,0.9)", "RGBA(35,122,187,0.9)", "RGBA(38,123,187,0.9)", "RGBA(40,125,186,0.9)", "RGBA(43,127,186,0.9)", "RGBA(46,129,186,0.9)", "RGBA(48,131,186,0.9)", "RGBA(51,132,186,0.9)", "RGBA(53,134,186,0.9)", "RGBA(56,136,186,0.9)", "RGBA(59,138,186,0.9)", "RGBA(61,139,186,0.9)", "RGBA(64,141,186,0.9)", "RGBA(67,143,186,0.9)", "RGBA(69,144,186,0.9)", "RGBA(72,146,186,0.9)", "RGBA(75,148,186,0.9)", "RGBA(78,149,186,0.9)", "RGBA(80,151,187,0.9)", "RGBA(83,153,187,0.9)", "RGBA(86,154,187,0.9)", "RGBA(89,156,187,0.9)", "RGBA(92,157,187,0.9)", "RGBA(95,159,187,0.9)", "RGBA(98,161,188,0.9)", "RGBA(101,162,188,0.9)", "RGBA(104,164,188,0.9)", "RGBA(107,165,189,0.9)", "RGBA(110,167,189,0.9)", "RGBA(113,168,189,0.9)", "RGBA(117,170,190,0.9)", "RGBA(120,171,190,0.9)", "RGBA(123,173,191,0.9)", "RGBA(126,174,191,0.9)", "RGBA(129,176,192,0.9)", "RGBA(133,177,193,0.9)", "RGBA(136,178,193,0.9)", "RGBA(139,180,194,0.9)", "RGBA(142,181,195,0.9)", "RGBA(145,183,196,0.9)", "RGBA(149,184,196,0.9)", "RGBA(152,186,197,0.9)", "RGBA(155,187,198,0.9)", "RGBA(158,189,199,0.9)", "RGBA(161,190,200,0.9)", "RGBA(164,192,201,0.9)", "RGBA(167,193,202,0.9)", "RGBA(170,195,203,0.9)", "RGBA(173,196,204,0.9)", "RGBA(176,198,205,0.9)", "RGBA(179,199,206,0.9)", "RGBA(182,201,208,0.9)", "RGBA(185,202,209,0.9)", "RGBA(188,204,210,0.9)", "RGBA(191,206,211,0.9)", "RGBA(194,207,212,0.9)", "RGBA(197,209,214,0.9)", "RGBA(200,210,215,0.9)", "RGBA(202,212,216,0.9)", "RGBA(205,214,217,0.9)", "RGBA(208,215,219,0.9)", "RGBA(211,217,220,0.9)", "RGBA(214,219,221,0.9)", "RGBA(217,220,223,0.9)", "RGBA(219,222,224,0.9)", "RGBA(222,224,226,0.9)", "RGBA(225,226,227,0.9)", "RGBA(228,227,229,0.9)", "RGBA(230,229,230,0.9)", "RGBA(233,231,231,0.9)", "RGBA(236,233,233,0.9)", "RGBA(239,235,234,0.9)", "RGBA(241,237,236,0.9)", "RGBA(241,237,236,0.9)", "RGBA(240,234,233,0.9)", "RGBA(239,232,230,0.9)", "RGBA(238,230,228,0.9)", "RGBA(237,227,225,0.9)", "RGBA(236,225,222,0.9)", "RGBA(235,222,219,0.9)", "RGBA(234,220,216,0.9)", "RGBA(233,218,213,0.9)", "RGBA(232,215,211,0.9)", "RGBA(231,213,208,0.9)", "RGBA(231,211,205,0.9)", "RGBA(230,208,202,0.9)", "RGBA(229,206,199,0.9)", "RGBA(228,203,196,0.9)", "RGBA(227,201,193,0.9)", "RGBA(227,199,190,0.9)", "RGBA(226,196,187,0.9)", "RGBA(225,194,185,0.9)", "RGBA(224,192,182,0.9)", "RGBA(224,189,179,0.9)", "RGBA(223,187,176,0.9)", "RGBA(222,185,173,0.9)", "RGBA(221,183,170,0.9)", "RGBA(221,180,167,0.9)", "RGBA(220,178,164,0.9)", "RGBA(219,176,161,0.9)", "RGBA(219,173,158,0.9)", "RGBA(218,171,155,0.9)", "RGBA(217,169,152,0.9)", "RGBA(217,166,150,0.9)", "RGBA(216,164,147,0.9)", "RGBA(215,162,144,0.9)", "RGBA(215,160,141,0.9)", "RGBA(214,157,138,0.9)", "RGBA(213,155,135,0.9)", "RGBA(212,153,132,0.9)", "RGBA(212,150,129,0.9)", "RGBA(211,148,127,0.9)", "RGBA(210,146,124,0.9)", "RGBA(210,144,121,0.9)", "RGBA(209,141,118,0.9)", "RGBA(208,139,115,0.9)", "RGBA(208,137,112,0.9)", "RGBA(207,134,110,0.9)", "RGBA(206,132,107,0.9)", "RGBA(206,130,104,0.9)", "RGBA(205,127,101,0.9)", "RGBA(204,125,99,0.9)", "RGBA(203,123,96,0.9)", "RGBA(203,120,93,0.9)", "RGBA(202,118,90,0.9)", "RGBA(201,116,88,0.9)", "RGBA(200,114,85,0.9)", "RGBA(200,111,82,0.9)", "RGBA(199,109,80,0.9)", "RGBA(198,106,77,0.9)", "RGBA(197,104,75,0.9)", "RGBA(197,102,72,0.9)", "RGBA(196,99,70,0.9)", "RGBA(195,97,67,0.9)", "RGBA(194,94,65,0.9)", "RGBA(193,92,62,0.9)", "RGBA(192,90,60,0.9)", "RGBA(192,87,58,0.9)", "RGBA(191,85,56,0.9)", "RGBA(190,82,53,0.9)", "RGBA(189,80,51,0.9)", "RGBA(188,77,49,0.9)", "RGBA(187,74,47,0.9)", "RGBA(186,72,46,0.9)", "RGBA(185,69,44,0.9)", "RGBA(184,67,42,0.9)", "RGBA(183,64,41,0.9)", "RGBA(182,61,40,0.9)", "RGBA(181,59,39,0.9)", "RGBA(179,56,38,0.9)", "RGBA(178,53,37,0.9)", "RGBA(177,51,36,0.9)", "RGBA(175,48,36,0.9)", "RGBA(174,45,36,0.9)", "RGBA(172,43,36,0.9)", "RGBA(171,40,36,0.9)", "RGBA(169,38,36,0.9)", "RGBA(167,35,36,0.9)", "RGBA(165,33,36,0.9)", "RGBA(164,31,37,0.9)", "RGBA(162,29,37,0.9)", "RGBA(160,27,37,0.9)", "RGBA(158,25,38,0.9)", "RGBA(155,23,38,0.9)", "RGBA(153,21,39,0.9)", "RGBA(151,20,39,0.9)", "RGBA(149,18,40,0.9)", "RGBA(146,17,40,0.9)", "RGBA(144,16,40,0.9)", "RGBA(141,15,41,0.9)", "RGBA(139,15,41,0.9)", "RGBA(136,14,41,0.9)", "RGBA(134,14,41,0.9)", "RGBA(131,14,41,0.9)", "RGBA(128,14,41,0.9)", "RGBA(126,14,41,0.9)", "RGBA(123,14,40,0.9)", "RGBA(120,14,40,0.9)", "RGBA(117,14,40,0.9)", "RGBA(115,14,39,0.9)", "RGBA(112,14,38,0.9)", "RGBA(109,14,38,0.9)", "RGBA(107,14,37,0.9)", "RGBA(104,14,36,0.9)", "RGBA(101,14,35,0.9)", "RGBA(99,14,35,0.9)", "RGBA(96,14,34,0.9)", "RGBA(93,14,33,0.9)", "RGBA(91,14,32,0.9)", "RGBA(88,13,31,0.9)", "RGBA(86,13,30,0.9)", "RGBA(83,13,28,0.9)", "RGBA(80,12,27,0.9)", "RGBA(78,12,26,0.9)", "RGBA(75,12,25,0.9)", "RGBA(73,11,24,0.9)", "RGBA(70,11,22,0.9)", "RGBA(68,10,21,0.9)", "RGBA(65,10,20,0.9)", "RGBA(62,9,19,0.9)", "RGBA(60,9,17,0.9)"];
const gradient = cm_matter;


var map;
var reset_data;

function initMap() {
    // Styles a map in night mode.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 10,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });

    let initData = getRandomData();
    // leak the reference
    let heatmap = new google.maps.visualization.HeatmapLayer({
        data: initData,
        dissipating: true,
        map: map,
        radius: 20,
        gradient: gradient
    });

    function _reset_data(data) {
        heatmap.setData(data);
        console.log("reset");
    }

    reset_data = _reset_data;
}

function visualizeTaxi() {
    let low = $("#taxiPriceRangeLow")[0].value;
    let high = $("#taxiPriceRangeHigh")[0].value;
    let showDensity = $("#taxiShowDensity").is(":checked");
    console.log("visualizeTaxi", "low", low, "high", high, "show density", showDensity);
    $.ajax({
        url: "/query1",
        type: "get",
        data: {
            minFare: low,
            maxFare: high,
            // showDensity: showDensity
        },
        success: function(response) {
            // let data = JSON.parse(response); // already is JSON
            let map_points = response.map(function(item) {
                return {
                    location: new google.maps.LatLng(item.pickup_latitude, item.pickup_longitude),
                    weight: showDensity ? 1 : item.fare_amount
                };
            });
            reset_data(map_points);
        }
    });
}

function visualizeAirbnb() {
    let keyword = $("#airbnbKeyword")[0].value;
    let min_review = $("#airbnbMinReview")[0].value;
    console.log("visualizeAirbnb", 'keyword', keyword, 'min_review', min_review);
    let data = {
        "search": keyword.length ? keyword : "",
        "minReviews": min_review.length ? min_review : 0,
    };
    $.ajax({
        url: "/query2",
        type: "get",
        data: data,
        success: function(response) {
            // let data = JSON.parse(response);     // already is JSON
            let map_points = response.map(function(item) {
                return {
                    location: new google.maps.LatLng(item.location.coordinates[1], item.location.coordinates[0]),
                    // location: new google.maps.LatLng(item.latitude, item.longtitude),
                    weight: item.price
                }
            });
            reset_data(map_points);
        }
    });
}


$(function () {
    $("#visualizeTaxiButton").click(visualizeTaxi);
    $("#visualizeAirbnbButton").click(visualizeAirbnb);
});
