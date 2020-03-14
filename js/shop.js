'use strict';
console.log('We\'re in business');

var baseProds = [];
var basketProds = [];
var footProds = [];
var goalieProds = [];
var hockeyProds = [];
var softProds = [];
var tennisProds = [];
var volleyProds = [];
var allProds = [baseProds, basketProds, footProds, goalieProds, hockeyProds, softProds, tennisProds, volleyProds];
var tempCart = [];

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

// Create all Product objects
new Product('Boy\'s Adidas BB Shoes', 'img/adidasbbshoe.JPG', '10', 'basket', 'New');
new Product('Boy\'s Asics Tennis Shoes', 'img/asicstns.jpeg', '13', 'tennis', 'New');
new Product('Girl\'s Asics VB Shoes', 'img/asicvbshoe.jpg', '13', 'volley', 'New');
new Product('Rawlings Bucket of 24 Baseballs', 'img/baseball.jpeg', '25', 'base', 'New');
new Product('Easton Ghost Bat', 'img/basebat.jpg', '45', 'base', 'New');
new Product('Nike Batting Glove', 'img/basebatglove.jpg', '7', 'base', 'New');
new Product('Mizuno Catching Gear', 'img/basecatch.jpg', '50', 'base', 'New');
new Product('Mizuno Catcher\'s Mitt', 'img/basecatchmitt.jpeg', '20', 'base', 'Used');
new Product('Wilson Baseball Glove', 'img/baseglove.jpg', '33', 'base', 'New');
new Product('Mizuno Batting Helmet', 'img/basehelmet.jpg', '10', 'base', 'New');
new Product('Nike Baseball Pants', 'img/basepant.jpeg', '9', 'base', 'New');
new Product('Spalding Basketball', 'img/basketball.jpg', '10', 'basket', 'New');
new Product('Nike Shooting Sleeve', 'img/bblseeve.jpg', '5', 'basket', 'New');
new Product('Boy\'s Nike BB Shoes', 'img/blknikebbshoe.jpg', '13', 'basket', 'New');
new Product('Girl\'s Nike BB Shoes', 'img/blpknikebbshoe.jpg', '13', 'basket', 'New');
new Product('Girl\'s Nike BB Shoes', 'img/brpknikebbshoe.jpg', '13', 'basket', 'New');
new Product('Adidas Compression Shirt', 'img/fbcompress.jpeg', '9', 'foot', 'New');
new Product('Schutt Elbow Pads', 'img/fbelbow.jpg', '3', 'foot', 'New');
new Product('Under Armour Football Gloves', 'img/fbglove.jpg', '5', 'foot', 'New');
new Product('Riddell Helmet', 'img/fbhelmet', '30', 'foot', 'New');
new Product('Schutt Mouthguard', 'img/fbmouthguard.jpg', '1', 'foot', 'New');
new Product('Riddell Football Pads', 'img/fbpad.jpg', '10', 'foot', 'Used');
new Product('Nike Football Pants', 'img/fbpants.jpg', '9', 'foot', 'New');
new Product('Wilson Football', 'img/football.jpg', '7', 'foot', 'New');
new Product('Bauer Goalie Chest Pad', 'img/hockeychestpad.jpg', '20', 'hockeyg', 'New');
new Product('Bauer Goalie Elbow Pads', 'img/goalelbowpad.jpg', '10', 'hockeyg', 'New');
new Product('CCM Goalie Leg Pads', 'img/goallegpads.jpg', '25', 'hockeyg', 'Used');
new Product('Bauer Goalie Stick', 'img/goalstick.jpg', '15', 'hockeyg', 'New');
new Product('CCM Chest Pad', 'img/hockeychestpad.jpg', '13', 'hockey', 'New');
new Product('CCM Elbow Pads', 'img/hockeyelbowpad.jpg', '8', 'hockey', 'New');
new Product('CCM Gloves', 'img/hockeygloves.jpeg', '10', 'hockey', 'New');
new Product('Bauer Goalie\'s Mask', 'img/hockeygoalmask.jpg', '14', 'hockeyg', 'New');
new Product('Bauer Helmet', 'img/hockeyhelmet.jpg', '14', 'hockey', 'New');
new Product('CCM Knee Pads', 'img/hockeykneepad.jpg', '9', 'hockey', 'New');
new Product('Bauer Pants', 'img/hockeypant.jpg', '15', 'hockey', 'New');
new Product('Bauer Stick', 'img/hockeystick.jpeg', '13', 'hockey', 'New');
new Product('LP Girl\s Nike BB Shoes', 'img/ltpknikebbshoe.jpg', '13', 'basket', 'New');
new Product('Girl\'s Mizuno VB Shoes', 'img/mizunovbshoe.jpg', '13', 'volley', 'New');
new Product('Girl\'s Nike VB Shoes', 'img/nikevbshoe.jpg', '13', 'volley', 'New');
new Product('Nike Pro VB Shorts', 'img/nikevbshort.jpg', '7', 'volley', 'New');
new Product('Easton Prowess Bat', 'img/sbbat.jpeg', '34', 'soft', 'New');
new Product('Easton Catcher\'s Kit', 'img/sbcatcherkit.jpg', '50', 'soft', 'Used');
new Product('Mizuno Catcher\'s Mitt', 'img/sbcatchermitt.jpg', '15', 'soft', 'New');
new Product('Schutt Field Mask', 'img/sbfieldmask.jpg', '9', 'soft', 'New');
new Product('Franklin Glove', 'img/sbglove.jpg', '13', 'soft', 'New');
new Product('Mizuno Batting Helmet', 'img/sbhelmet.jpeg', '10', 'soft', 'New');
new Product('Mizuno Pants', 'img/sbpant.jpeg', '9', 'soft', 'New');
new Product('12 Rawlings Softballs', '/img/softball.jpg', '13', 'soft', 'New');
new Product('Boy\'s Under Armour Shoes', 'img/uabbshoe.jpg', '13', 'basket', 'New');
new Product('Under Armour Mouthguard', 'img/uamouthguard.jpg', '4', 'hockey', 'New');
new Product('Under Armour VB Shorts', 'img/uavbshort.jpg', '7', 'volley', 'New');
new Product('Nike VB Knee Pads', 'img/vbkneepad.jpg', '4', 'volley', 'New');
new Product('Spalding Volleyball', 'img/volleyball.jpg', '13', 'volley', 'New');
new Product('Girl\'s Babolat Tennis Shoes', 'img/babolatpk.jpg', '10', 'tennis', 'New');
new Product('Boy\'s Nike Tennis Shoes', 'img/niketns.jpeg', '10', 'tennis', 'New');
new Product('3 Pack Wison Tennis Balls', 'img/tennisball.jpeg', '1', 'tennis', 'New');
new Product('Wilson Federer Racket', 'img/wilsonfedrkt.jpg', '9', 'tennis', 'New');
new Product('Wilson Racket', 'img/wilsonrkt.jpg', '20', 'tennis', 'New');
new Product('Girl\'s Wilson Tennis Shoe', 'img/wilsontns.jpg', '8', 'tennis', 'New');
new Product('Boy\'s Babolat Tennis Shoes', 'img/babolatrd.jpeg', '10', 'tennis', 'New');
// new Product('', '', '', '', '');
// new Product('', '', '', '', '');

function displayImages() {
    
    // Get index os Selected Sport
    var sportIndex = document.getElementById("sport").selectedIndex;

    // That index coincides with that sport's array in the allProds array
    var chosenSport = allProds[sportIndex];
    var imageSection = document.getElementById('imgSection');
    for (var i = 0; i < chosenSport.length; i++) {
        var imgDiv = document.createElement('div');
        imgDiv.classList.add('singleImgCont');
        var prodImg = document.createElement('img');
        prodImg.src = imageSection[i].productUrl;
        prodImg.alt = '${imageSection[i].sport} equipment image';
        var prodForm = document.createElement('form');
        var nameLabel = document.createElement('label');
        nameLabel.innerHTML = 'Item: ${chosenSport[i].name}';
        

        var prodUL = document.createElement('ul');
        var nameLI = document.createElement('li');
        nameLI.innerHTML = 'Item: ${chosenSport[i].name}';
        prodUL.appendChild(nameLI);
        var priceUL = createElement('ul');
        priceUL.innerHTML = 'Price: ${chosenSport[i].price}';
        prodUL.appendChild(priceUL);
        var descrLI = document.createElement('li');
        descrLI.innerHTML = 'Description: ${chosenSport[i].description}';
        prodUL.appendChild(descrLI);
        var addButton = createElement('button');
        addButton.innerHTML = 'Add to Cart';
        addButton.addEventListener('click', addProduct());
        prodImg.appendChild(prodUL);
        imgDiv.appendChild(prodImg);
        imageSection.appendChild(imgDiv);
    }
}

function addProduct(event) {
    event.preventDefault();
    addSelectedItemToCart(event);
    cart.saveToLocalStorage();
    updateCounter();
    updateCartPreview();
}

function addSelectedItemToCart() {
    var selectItem = this.event;
    var prodForm = document.getElementById('items');
    var prodName = prodForm.options[prodForm.selectedIndex].value;
    var newProd = [prodName, ];
    cart.push(newProd);
}

localStorage.setItem('savedProduct', JSON.stringify());

displayImages();