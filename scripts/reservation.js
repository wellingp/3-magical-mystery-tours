//Script to add items to the cart.

let package1 = document.getElementById('package1');
let package2 = document.getElementById('package2');
let package3 = document.getElementById('package3');

let item = document.getElementById('item');
let cost = document.getElementById('price');
let tax = document.getElementById('tax');
let total = document.getElementById('total');
let discount = document.getElementById('discount');

let cartOccupancy = 0;

package1.addEventListener('click', () => {
   item.textContent = 'Package 1 (Single)';
   cost.textContent = '£65.00';
   tax.textContent = '£13.00';
   discount.textContent = '';
   total.textContent = 'Total: £78.00';
   cartOccupancy = 1;
});

package2.addEventListener('click', () => {
   item.textContent = 'Package 2 (Group of 2)';
   cost.textContent = '£130.00';
   tax.textContent = '£26.00';
   discount.textContent = '';
   total.textContent = 'Total: £156.00';
   cartOccupancy = 1;
});

package3.addEventListener('click', () => {
   item.textContent = 'Package 3 (Group of 4)';
   cost.textContent = '£260.00';
   tax.textContent = '£52.00';
   discount.textContent = 'Group Discount -£26';
   total.textContent = 'Total: £286.00';
   cartOccupancy = 1;
});