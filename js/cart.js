'use strict';
console.log('We\'re in business');

var table = document.getElementById('shoppingCart');
table.addEventListener('click', removeItemFromCart);

function purchase() {
  event.preventDefault();
  alert('Thank you for your order. We are working as fast as possible to get your product packaged. You will receive confirmation of shipment and a tracking number shortly.');
  var currentCart = getLocalCart();
  currentCart.splice(0, currentCart.length);
  localStorage.clear();
  setCartIcon();
  renderCart();
}

// Render function
function renderCart() {
  clearCart();
  var cart= getLocalCart();
  showCart(cart);
}

// Remove all of the rows in the shoppingCart table (tbody and tfoot)
function clearCart() {
  var bodyRows = document.querySelectorAll('#shoppingCart tbody tr ');
  for (var i = 0; i < bodyRows.length; i++) {
    if (bodyRows[i]) {
      bodyRows[i].remove();
    }
  }
  var footerRows = document.querySelectorAll('#shoppingCart tfoot tr ');
  for (var i = 0; i < footerRows.length; i++) {
    if (footerRows[i]) {
      footerRows[i].remove();
    }
  }
}

function showCart(cart) {
  var sum = 0;
  var tbody = document.getElementById('cartBody');
  for (var i = 0; i < cart.length; i++) {
    var tr = document.createElement('tr');
    var xtd = document.createElement('td');
    
    // Create remove item link as a hyperlink
    var xa=document.createElement('a');
    xa.id='remove'+i;
    xa.href='javascript:removeItemFromCart('+i+'); ';
    xa.textContent = 'x';
    xtd.appendChild(xa);

    // Add thumbnail of image
    var imgcart = document.createElement('td');
    var imgs = document.createElement('img');
    imgs.classList.add('cartImage');
    imgs.src = cart[i].url;
    imgcart.appendChild(imgs);

    // Add item description
    var Item = document.createElement('td');
    Item.textContent = cart[i].name;

    // Add item price
    var price = document.createElement('td');
    price.textContent = '$ ' + cart[i].price;

    tr.appendChild(xtd);
    tr.appendChild(imgcart);
    tr.appendChild(Item);
    tr.appendChild(price);
    tbody.appendChild(tr);
  }

  var tfooter = document.createElement('tfoot');
  tfooter.setAttribute('id', 'table-footer');
  table.appendChild(tfooter);

  var tr1 = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  td3.textContent = 'Subtotal :';
  var subtotal = document.createElement('td');

  // Funtion to calculate the cart subtotal
  for (i = 0; i < cart.length; i++) {
    sum = sum + parseInt(cart[i].price);
  }

  subtotal.textContent = '$ ' + sum;

  var tr2 = document.createElement('tr');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  td6.textContent = 'Tax :';
  var tax = document.createElement('td');
  var stax = 0.07;
  var staxes = parseFloat((sum * stax).toFixed(2));
  tax.textContent = '$ ' + staxes;

  var tr3 = document.createElement('tr');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');
  var td9 = document.createElement('td');
  td9.textContent = 'Total :';
  var totalValue = sum + staxes;
  var total = document.createElement('td');
  total.textContent = '$ ' + totalValue;

  tr1.appendChild(td1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);
  tr2.appendChild(td4);
  tr2.appendChild(td5);
  tr2.appendChild(td6);
  tr3.appendChild(td7);
  tr3.appendChild(td8);
  tr3.appendChild(td9);
  tr1.appendChild(subtotal);
  tr2.appendChild(tax);
  tr3.appendChild(total);
  tfooter.appendChild(tr1);
  tfooter.appendChild(tr2);
  tfooter.appendChild(tr3);
}

function removeItemFromCart(id) {
  event.preventDefault();
  var tempCart = getLocalCart();
  tempCart.splice(id,1);
  localStorage.setItem('savedCart',JSON.stringify(tempCart));
  renderCart();
  setCartIcon();
  return false;
}

renderCart();