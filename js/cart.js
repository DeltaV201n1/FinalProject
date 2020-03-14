'use strict';
console.log('We\'re in business');


var table = document.getElementById('shoppingCart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Render function
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// Remove all of the rows in the shoppingCart table (tbody)
function clearCart() {

 var tableRows=document.querySelectorAll('#shoppingCart tbody tr ')
 for (var i=0;i<= tableRows.length;i++)
 {
   if(tableRows[i]){
     tableRows[i].remove();
   }
 }


}

function showCart() {
  var tbody= document.getElementsByTagName(tbody);
   for (var i=0;i<=cart.length ;i++){
     var tr = document.createElement('tr');
      var xtd=document.createElement('td');
          xtd.textContent='x'; 
          xtd.id=i;
          xtd.addEventListener('click', removeItemFromCart);

      var =document.createElement('td');
          quantity.textContent=cart[i].; 

      var Item=document.createElement('td');
          Item.textContent=cart[i].Item;

  var table = document.getElementById('shoppingCart');
  var tfooter = document.createElement('tfoot');
  tfooter.setAttribute('id', 'table-footer');
  table.appendChild(tfooter);
  tfooter = document.getElementById('table-footer');

  var tr = document.createElement('tr');
  tfooter.appendChild(tr);
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  tr.appendChild(td1);
  tr.appendChild(td2);
  td3.textContent = 'subtotal:';
  tr.appendChild(td3);

  var total = 0;
  for (var x = -0; x < cart.length ; x++)
  {
    td = document.createElement('td');
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
      sum = sum + ;
    }
    td.textContent = sum; 
    tr.appendChild(td);
    total += sum;

 
  tbody.appendChild(tr);
  tr.appendChild(xtd);
  tr.appendChild(quantity);
  tr.appendChild(Item);
 

   } 
 
}

function removeItemFromCart(event) {
  var deleteRow=event.target.id;
    cart.removeItem(deleteRow); 
    cart.saveToLocalStorage(deleteRow);
    renderCart();
}

renderCart();

