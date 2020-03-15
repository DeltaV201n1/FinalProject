'use strict';
console.log('We\'re in business');

var sum=0;
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
  var tbody= document.getElementsByTagName('tbody');
   for (var i=0;i<=cart.length ;i++){
     var tr = document.createElement('tr');
      var xtd=document.createElement('td');
          xtd.textContent='x'; 
          xtd.id=i;
          xtd.addEventListener('click', removeItemFromCart);



      var imgcart=document.createElement('td');
          imgcart.textContent=cart[i].productUrl; 
  
      var Item=document.createElement('td');
          Item.textContent=cart[i].name;

      var price=document.createElement('td');
          price.textContent=cart[i].price;
   }  
      
  var table = document.getElementById('shoppingCart');
  var tfooter = document.createElement('tfoot');
  tfooter.setAttribute('id', 'table-footer');
  table.appendChild(tfooter);
  tfooter = document.getElementById('table-footer');

  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
      td2.textContent = 'subtotal:';
  
      for( i=0;i<cart.length;i++) {
      
      var subtotal=document.createElement('td')
          sum=sum+cart[i].price;
          
     }

     subtotal.textContent=sum;

     var tr = document.createElement('tr');
     var td3 = document.createElement('td');
     var td4 = document.createElement('td');

  var tax= document.createElement('td');
  var stax = 0.07;
  var staxes=sum*stax
      tax.textContent=staxes;

      var tr = document.createElement('tr');
      var td4 = document.createElement('td');
      var td5 = document.createElement('td');
 

  var total=document.createElement('td');
      total=staxes+sum;

  tbody.appendChild(tr);
  tr.appendChild(xtd);
  tr.appendChild(imgcart);
  tr.appendChild(Item);
  tr.appendChild(price);
  tfooter.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(subtotal);
  tr.appendChild(tax);
  tr.appendChild(total)
   } 
 


function removeItemFromCart(event) {
  var deleteRow=event.target.id;
    cart.removeItem(deleteRow); 
    cart.saveToLocalStorage(deleteRow);
    renderCart();
}

function CartIcon()
{

var CartIcon=document.getElementById('lblCartCount')
    CartIcon.textContent=cart.length;

}

renderCart();

