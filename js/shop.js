'use strict';
console.log('We\'re in business');

setCartIcon();
var baseProds = [];
var basketProds = [];
var footProds = [];
var goalieProds = [];
var hockeyProds = [];
var softProds = [];
var tennisProds = [];
var volleyProds = [];
var allProds = [baseProds, basketProds, footProds, hockeyProds, goalieProds, softProds, tennisProds, volleyProds];

// Constructor
function Product(name, url, price, sport, description) {
    this.name = name;
    this.productUrl = url;
    this.price = price;
    this.sport = sport;
    this.description = description;
    if(this.sport == 'baseball') {
        baseProds.push(this);
    } else if(this.sport == 'basketball') {
        basketProds.push(this);
    }  else if(this.sport == 'football') {
        footProds.push(this);
    } else if(this.sport == 'hockey') {
        hockeyProds.push(this);   
    } else if(this.sport == 'goalie') {
        goalieProds.push(this);
    } else if(this.sport == 'softball') {
        softProds.push(this);
    } else if(this.sport == 'tennis') {
        tennisProds.push(this);
    } else if(this.sport == 'volleyball') {
        volleyProds.push(this);
    }
}

// Create all Product objects
new Product('Boy\'s Adidas BB Shoes', 'img/adidasbbshoe.JPG', '10', 'basketball');
new Product('Boy\'s Asics Tennis Shoes', 'img/asicstns.jpeg', '13', 'tennis');
new Product('Girl\'s Asics VB Shoes', 'img/asicvbshoe.jpg', '13', 'volleyball');
new Product('Rawlings Bucket of 24 Baseballs', 'img/baseball.jpeg', '25', 'baseball');
new Product('Easton Ghost Bat', 'img/basebat.jpg', '45', 'baseball');
new Product('Nike Batting Glove', 'img/basebatglove.jpg', '7', 'baseball');
new Product('Mizuno Catching Gear', 'img/basecatch.jpg', '50', 'baseball');
new Product('Mizuno Catcher\'s Mitt', 'img/basecatchmitt.jpeg', '20', 'baseball');
new Product('Wilson Baseball Glove', 'img/baseglove.jpg', '33', 'baseball');
new Product('Mizuno Batting Helmet', 'img/basehelmet.jpg', '10', 'baseball');
new Product('Nike Baseball Pants', 'img/basepant.jpeg', '9', 'baseball');
new Product('Spalding Basketball', 'img/basketball.jpg', '10', 'basketball');
new Product('Nike Shooting Sleeve', 'img/bbsleeve.jpg', '5', 'basketball');
new Product('Boy\'s Nike BB Shoes', 'img/blknikebbshoe.jpg', '13', 'basketball');
new Product('Girl\'s Nike BB Shoes', 'img/blpknikebbshoe.jpg', '13', 'basketball');
new Product('Girl\'s Nike BB Shoes', 'img/brpknikebbshoe.jpg', '13', 'basketball');
new Product('Adidas Compression Shirt', 'img/fbcompress.jpeg', '9', 'football');
new Product('Schutt Elbow Pads', 'img/fbelbow.jpg', '3', 'football');
new Product('Under Armour Football Gloves', 'img/fbglove.jpg', '5', 'football');
new Product('Riddell Helmet', 'img/fbhelmet.png', '30', 'football');
new Product('Schutt Mouthguard', 'img/fbmouthguard.jpg', '1', 'football');
new Product('Riddell Football Pads', 'img/fbpad.jpg', '10', 'football');
new Product('Nike Football Pants', 'img/fbpants.jpg', '9', 'football');
new Product('Wilson Football', 'img/football.jpg', '7', 'football');
new Product('Bauer Goalie Chest Pad', 'img/hockeychestpad.jpg', '20', 'goalie');
new Product('Bauer Goalie Elbow Pads', 'img/goalelbowpad.jpg', '10', 'goalie');
new Product('CCM Goalie Leg Pads', 'img/goallegpads.jpg', '25', 'goalie');
new Product('Bauer Goalie Stick', 'img/goalstick.jpg', '15', 'goalie');
new Product('CCM Chest Pad', 'img/hockeychestpad.jpg', '13', 'hockey');
new Product('CCM Elbow Pads', 'img/hockeyelbowpad.jpg', '8', 'hockey');
new Product('CCM Gloves', 'img/hockeygloves.jpeg', '10', 'hockey');
new Product('Bauer Goalie\'s Mask', 'img/hockeygoalmask.jpg', '14', 'goalie');
new Product('Bauer Helmet', 'img/hockeyhelmet.jpg', '14', 'hockey');
new Product('CCM Knee Pads', 'img/hockeykneepad.jpg', '9', 'hockey');
new Product('Bauer Pants', 'img/hockeypant.jpg', '15', 'hockey');
new Product('Bauer Stick', 'img/hockeystick.jpeg', '13', 'hockey');
new Product('LP Girl\s Nike BB Shoes', 'img/ltpknikebbshoe.jpg', '13', 'basketball');
new Product('Girl\'s Mizuno VB Shoes', 'img/mizunovbshoe.jpg', '13', 'volleyball');
new Product('Girl\'s Nike VB Shoes', 'img/nikevbshoe.jpg', '13', 'volleyball');
new Product('Nike Pro VB Shorts', 'img/nikevbshort.jpg', '7', 'volleyball');
new Product('Easton Prowess Bat', 'img/sbbat.jpeg', '34', 'softball');
new Product('Easton Catcher\'s Kit', 'img/sbcatcherkit.jpg', '50', 'softball');
new Product('Mizuno Catcher\'s Mitt', 'img/sbcatchermitt.jpg', '15', 'softball');
new Product('Schutt Field Mask', 'img/sbfieldmask.jpg', '9', 'softball');
new Product('Franklin Glove', 'img/sbglove.jpg', '13', 'softball');
new Product('Mizuno Batting Helmet', 'img/sbhelmet.jpeg', '10', 'softball');
new Product('Mizuno Pants', 'img/sbpant.jpeg', '9', 'softball');
new Product('12 Rawlings Softballs', '/img/softball.jpg', '13', 'softball');
new Product('Boy\'s Under Armour Shoes', 'img/uabbshoe.jpg', '13', 'basketball');
new Product('Under Armour Mouthguard', 'img/uamouthguard.jpg', '4', 'hockey');
new Product('Under Armour VB Shorts', 'img/uavbshort.jpg', '7', 'volleyball');
new Product('Nike VB Knee Pads', 'img/vbkneepad.jpg', '4', 'volleyball');
new Product('Spalding Volleyball', 'img/volleyball.jpg', '13', 'volleyball');
new Product('Girl\'s Babolat Tennis Shoes', 'img/babolatpk.jpg', '10', 'tennis');
new Product('Boy\'s Nike Tennis Shoes', 'img/niketns.jpeg', '10', 'tennis');
new Product('3 Pack Wilson Tennis Balls', 'img/tennisball.jpeg', '1', 'tennis');
new Product('Wilson Federer Racket', 'img/wilsonfedrkt.jpg', '9', 'tennis');
new Product('Wilson Racket', 'img/wilsonrkt.jpg', '20', 'tennis');
new Product('Girl\'s Wilson Tennis Shoe', 'img/wilsontns.jpg', '8', 'tennis');
new Product('Boy\'s Babolat Tennis Shoes', 'img/babolatrd.jpeg', '10', 'tennis');

// function getAllProds() {
//     for (i=0; i<allProds.length; x++)
//         for (j=0; j<i.length; j++)
//         return;
// }

var basket = new Basket([]);

function Item(name, url, price) {
    this.name = name;
    this.url = url;
    this.price = price;
}

function Basket(items) {
    this.items = items;
}

Basket.prototype.saveItem = function() {
    localStorage.setItem('savedCart', JSON.stringify(this.items));
};

Basket.prototype.addProduct = function(e) {
    e.preventDefault();
    var newProduct = new Item(event.srcElement[0].value, event.srcElement[1].value, event.srcElement[2].value);
    var currentItems = getLocalCart();
    currentItems.push(newProduct);
    basket.items.push(newProduct);
    localStorage.setItem('savedCart', JSON.stringify(currentItems));
    setCartIcon();

}

Basket.prototype.removeItem=function(id){
    this.items.splice(id,1);
   
}


function displayImages() {
    // Get Selected Sport
    var selectedSport = document.getElementById('sport').value;
    var chosenSport = allProds[selectedSport];
    var imageSection = document.getElementById('imgSection');
    imageSection.innerHTML = '';
    for (var i = 0; i < chosenSport.length; i++) {
        var imgDiv = document.createElement('div');
        imgDiv.classList.add('singleImgCont');
        var prodImg = document.createElement('img');
        prodImg.classList.add('productImage');
        prodImg.src = chosenSport[i].productUrl;
        prodImg.alt = `${chosenSport[i].sport} equipment image`;

        // Add image info as a form
        var prodForm = document.createElement('form');
        prodForm.classList.add('itemForm');
        prodForm.addEventListener('submit', basket.addProduct);
       
        // Create hidden input to be passed in input
        var nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'hidden');
        nameInput.setAttribute('id', 'name');
        nameInput.setAttribute('value', chosenSport[i].name);
        prodForm.appendChild(nameInput);
        var nameSpan = document.createElement('p');
        nameSpan.innerHTML = chosenSport[i].name;
        prodForm.appendChild(nameSpan);

        var urlInput = document.createElement('input');
        urlInput.setAttribute('type', 'hidden');
        urlInput.setAttribute('id', 'url');
        urlInput.setAttribute('value', chosenSport[i].productUrl);
        prodForm.appendChild(urlInput);

        var priceInput = document.createElement('input');
        priceInput.setAttribute('type', 'hidden');
        priceInput.setAttribute('id', 'price');
        priceInput.setAttribute('value', chosenSport[i].price);
        prodForm.appendChild(priceInput);
        var priceSpan = document.createElement('span');
        priceSpan.innerHTML = '$';
        var priceData = document.createElement('span');
        priceData.innerHTML = chosenSport[i].price + '<br/><br/>';
        priceSpan.appendChild(priceData);
        prodForm.appendChild(priceSpan);

        var submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.classList.add('subButton');
        submitButton.value = 'Add to Cart';
        prodForm.appendChild(submitButton);

        imgDiv.appendChild(prodImg);
        imgDiv.appendChild(prodForm);
        imageSection.appendChild(imgDiv);
    }
}

function setCartIcon() {
    var cartIcon = document.getElementById('lblCartCount');
    var cartCount=getLocalCart().length;
    cartIcon.textContent = cartCount;
}
function getLocalCart() {
    var newItem = JSON.parse(localStorage.getItem('savedCart')) || [];
    return newItem;
  }
//   // chart code thanks to https://www.chartjs.org/docs/latest/
//   var ctx = document.getElementById('chart').getContext('2d');
//   // eslint-disable-next-line no-undef
//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       // what does labels do?
//       labels: get('sport'),
//       // what does datasets do?
//       // it's an array of objects
//       datasets: [{
//         // what does this label do?
//         // key, legend
//         label: '# of Votes',
//         // what does this data do?
//         // actually the values in the chart
//         data: getPizzaArray('timesClicked'),
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true,
//             stepSize: 1
//           }
//         }]
//       }
//     }
//   });
