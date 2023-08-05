<script>
	let cartItems = [
	  { name: "Item 1", quantity: 2, price: 10 },
	  { name: "Item 2", quantity: 3, price: 15 },
	  // More items...
	];
	let discountPercentage = 10;
	let taxPercentage = 5;
	
	// Function to calculate the total price with discount and tax
	const calculateTotalPrice = (items, discount, tax=null) => {
	  // Hide the reference to taxPercentage inside the function
	  const calculateTax = () => {
		 return (calculateSubTotal(items) * taxPercentage) / 100;
	  };
 
	  const calculateSubTotal = () => {
		 return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
	  };
 
	  const subTotal = calculateSubTotal();
	  const discountAmount = (subTotal * discount) / 100;
	  const totalBeforeTax = subTotal - discountAmount;
	  const taxAmount = calculateTax();
	  return totalBeforeTax + taxAmount;
	};
 
	// Reactive declaration to update the total price
	$: total = calculateTotalPrice(cartItems, discountPercentage);
 
	//$: total2 = calculateTotalPrice(cartItems, discountPercentage,taxPercentage);
	
 </script>
 
 <main>
	<h1>Shopping Cart</h1>
	{#each cartItems as item}
	  <p>{item.name} - Quantity: {item.quantity} - Price: {item.price}</p>
	{/each}
	<p>Discount: {discountPercentage}%</p>
	<p>Tax: {taxPercentage}%</p>
	<p>Total Price: ${total}</p>

	<hr>

<!-- <p>Total Price: ${total2}</p> -->
 </main>
 