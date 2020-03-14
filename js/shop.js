'use strict';
console.log('We\'re in business');

var productElements = document.getElementById('imgSection');
var productIndex1 = 0;
var productIndex2 = 1;
var productIndex3 = 2;
var baseballProds = [];
var softballProds = [];
var footballProds = [];
var hockeyProds = [];
var goalieProds = [];
var volleyballProds = [];
var tennisProds = [];

// Constructor
function Product(name, url, price, sport, description) {
    this.name = name;
    this.productUrl = url;
    this.price = price;
    this.sport = sport;
    this.description = description;
    if(this.sport == 'base') {
        baseProds.push(this);
    } else if(this.sport == 'soft') {
        softProds.push(this);
    } else if(this.sport == 'foot') {
        footProds.push(this);
    } else if(this.sport == 'hockey') {
        hockeyProds.push(this);   
    } else if(this.sport == 'volley') {
        volleyProds.push(this);
    } else if(this.sport == 'tennis') {
        tennisProds.push(this);
    } else if(this.sport == 'hockeyg') {
        goalieProds.push(this);
    }
}

new Product('Boy\'s Adidas BB Shoes', 'img/adidasbbshoe.JPG', '', 'basket', '');
new Product('Girl\'s Asics VB Shoes', 'img/asicvbshoe.jpg', '', 'volley', '');
new Product('Rawlings Bucket of 24 Baseballs', 'img/baseball.jpeg', '', 'base', '');
new Product('Easton Ghost Bat', 'img/basebat.jpg', '', 'base', '');
new Product('Nike Batting Glove', 'img/basebatglove.jpg', '', 'base', '');
new Product('Mizuno Catching Gear', 'img/basecatch.jpg', '', 'base', '');
new Product('Mizuno Catcher\'s Mitt', 'img/basecatchmitt.jpeg', '', 'base', '');
new Product('Wilson Baseball Glove', 'img/baseglove.jpg', '', 'base', '');
new Product('Mizuno Batting Helmet', 'img/basehelmet.jpg', '', 'base', '');
new Product('Nike Baseball Pants', 'img/basepant.jpeg', '', 'base', '');
new Product('Spalding Basketball', 'img/basketball.jpg', '', 'basket', '');
new Product('Nike Shooting Sleeve', 'img/bblseeve.jpg', '', 'basket', '');
new Product('Boy\'s Nike BB Shoes', 'img/blknikebbshoe.jpg', '', 'basket', '');
new Product('Girl\'s Nike BB Shoes', 'img/blpknikebbshoe.jpg', '', 'basket', '');
new Product('Girl\'s Nike BB Shoes', 'img/brpknikebbshoe.jpg', '', 'basket', '');
new Product('Adidas Compression Shirt', 'img/fbcompress.jpeg', '', 'foot', '');
new Product('Schutt Elbow Pads', 'img/fbelbow.jpg', '', 'foot', '');
new Product('Under Armour Football Gloves', 'img/fbglove.jpg', '', 'foot', '');
new Product('Riddell Helmet', 'img/fbhelmet', '', 'foot', '');
new Product('Schutt Mouthguard', 'img/fbmouthguard.jpg', '', 'foot', '');
new Product('Riddell Football Pads', 'img/fbpad.jpg', '', 'foot', '');
new Product('Nike Football Pants', 'img/fbpants.jpg', '', 'foot', '');
new Product('Wilson Football', 'img/football.jpg', '', 'foot', '');
new Product('Bauer Goalie Chest Pad', 'img/hockeychestpad.jpg', '', 'hockeyg', '');
new Product('Bauer Goalie Elbow Pads', 'img/goalelbowpad.jpg', '', 'hockeyg', '');
new Product('CCM Goalie Leg Pads', 'img/goallegpads.jpg', '', 'hockeyg', '');
new Product('Bauer Goalie Stick', 'img/goalstick.jpg', '', 'hockeyg', '');
new Product('CCM Chest Pad', 'img/hockeychestpad.jpg', '', 'hockey', '');
new Product('CCM Elbow Pads', 'img/hockeyelbowpad.jpg', '', 'hockey', '');
new Product('CCM Gloves', 'img/hockeygloves.jpeg', '', 'hockey', '');
new Product('Bauer Goalie\'s Mask', 'img/hockeygoalmask.jpg', '', 'hockeyg', '');
new Product('Bauer Helmet', 'img/hockeyhelmet.jpg', '', 'hockey', '');
new Product('CCM Knee Pads', 'img/hockeykneepad.jpg', '', 'hockey', '');
new Product('Bauer Pants', 'img/hockeypant.jpg', '', 'hockey', '');
new Product('Bauer Stick', 'img/hockeystick.jpeg', '', 'hockey', '');
new Product('LP Girl\s Nike BB Shoes', 'img/ltpknikebbshoe.jpg', '', 'basket', '');
new Product('Girl\'s Mizuno VB Shoes', 'img/mizunovbshoe.jpg', '', 'volley', '');
new Product('Girl\'s Nike VB Shoes', 'img/nikevbshoe.jpg', '', 'volley', '');
new Product('Nike Pro VB Shorts', 'img/nikevbshort.jpg', '', 'volley', '');
new Product('Easton Prowess Bat', 'img/sbbat.jpeg', '', 'soft', '');
new Product('Easton Catcher\'s Kit', 'img/sbcatcherkit.jpg', '', 'soft', '');
new Product('Mizuno Catcher\'s Mitt', 'img/sbcatchermitt.jpg', '', 'soft', '');
new Product('Schutt Field Mask', 'img/sbfieldmask.jpg', '', 'soft', '');
new Product('Franklin Glove', 'img/sbglove.jpg', '', 'soft', '');
new Product('Mizuno Batting Helmet', 'img/sbhelmet.jpeg', '', 'soft', '');
new Product('Mizuno Pants', 'img/sbpant.jpeg', '', 'soft', '');
new Product('12 Rawlings Softballs', '/img/softball.jpg', '', 'soft', '');
new Product('Boy\'s Under Armour Shoes', 'img/uabbshoe.jpg', '', 'basket', '');
new Product('Under Armour Mouthguard', 'img/uamouthguard.jpg', '', 'hockey', '');
new Product('Under Armour VB Shorts', 'img/uavbshort.jpg', '', 'volley', '');
new Product('Nike VB Knee Pads', 'img/vbkneepad.jpg', '', 'volley', '');
new Product('Spalding Volleyball', 'img/volleyball.jpg', '', 'volley', '');
new Product('Girl\'s Babolat Tennis Shoes', 'img/babolatpk.jpg', '', 'tennis', '');
new Product('Boy\s Nike Tennis Shoes', 'img/niketns.jpeg', '', 'tennis', '');
new Product('3 Pack Wison Tennis Balls', 'img/tennisball.jpeg', '', 'tennis', '');
new Product('Wilson Federer Racket', 'img/wilsonfedrkt.jpg', '', 'tennis', '');
new Product('Wilson Racket', 'img/wilsonrkt.jpg', '', 'tennis', '');
new Product('Girl\'s Wilson Tennis Shoe', 'img/wilsontns.jpg', '', 'tennis', '');
new Product('Boy\'s Babolat Tennis Shoes', 'img/babolatrd.jpeg', '', 'tennis', '');
// new Product('', '', '', '', '');
// new Product('', '', '', '', '');

