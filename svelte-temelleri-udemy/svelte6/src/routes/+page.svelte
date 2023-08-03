
<script lang="ts">
	import Header from "./Header.svelte";
	import { products } from "$lib/store";
	import type { ProductType } from "$lib/store";
   import { card } from "$lib/store";


//Bizim bir alisveris sepetimiz olacak ve sayfamizda urunlerimiz olacak, bu urunleri de tabi ki store iceriisnde tutacagiz, isteddimgz tum componentlerde kullanabilmek icin


const addToCard = (id:any)=>
{
	//Urun quantity 0 dan buyuk ise sepete eklesin!!!!
	let findProduct:any = $products.find(item=>(item.id === id && item.quantity > 0));
	//store-update isleminde ki parametre card.update(data=>) data store dan gelen card dizisidir
	findProduct && card.update(currentCard=>[findProduct, ...currentCard]);
	products.update((currentProducts:ProductType[])=>{
		//Kesinlikle data nin return edilmesi gerekiyor!!! Eger suslu parantez le acarsak kendimz return etmeliyiz ve de burda datayi muhafaza etmek gerekiyor onu unutmayalim...
		//store-update isleminde ki parametre products.update((data burdkai  data store dan gelen products dizisidir
		//products da qunaitity 0 dan buyuk oldugu durumda stoke dan dussun, 0 ise zaten dusecek birsey kalamamis oluyor!!
		let productsData = currentProducts.map(prod=>(prod.id === id && prod.quantity > 0) ? {...prod, quantity:prod.quantity-1}: {...prod});

		return productsData;

		//Ozellikle svelte de de biz update islemlerinde genellikle ilk once mevcut data nin kopyasini alip o kopya data uzerinde yapacagimz islemleri yapip sonra da o kopya datayi return etme mantiginda dusunebilirz 
		//bir dizi icinde n find ile bulunan obje direk o dizi icindeki obje dir ve o bulunan obje nin properties inde yapilan degisiklik, direk o obje ye yansiyacaktir....
	});
}

</script>

<!--
	DIKKAT EDILECEK NOKTALAR......
	Store dan gelecek olan data uzerinde, yapacagimz set,update islemlerinde direk o data uzerinden bunlari yapabiliirz.. ornegin products.updated(prev=>) products.set() ama store dan gelen datayi okuyabilmek icin 1- ya subscribe ile o store a abone oluruz ve onu dinleriz 
	let productData: ProductType[] = [];
  		products.subscribe((value) => {
    productData = value;
  });

  <ul>
  {#each productData as product(product.id)}
    <li>{product.title}</li>
  {/each}
</ul>

ya da 2- o store u $products ile kullanarak otomatk subscribe olmasini saglariz!!!!!-->
<section>
	<Header/>
		{#each $products as product(product.id)}
		<div>
			<h2>Title: {product.title}</h2>
				<span>Quantity: {product.quantity}</span>
				<span>Price: {product.price}</span>
			<button disabled={!product.quantity} on:click={()=>addToCard(product.id)}>AddToCart</button>
			<!--product.quantity 0 olunca false oluyor !product.quantity olunca 0 olunca true oluyor ve butonumuz disabled ozelligi kazanmis oluyor!!!!-->
			<!-- <button disabled={product.quantity==0 ? true : false} on:click={()=>addToCard(product.id)}>AddToCart</button> -->
			<!--Dikkat edersek eger product quantity si 0  olursa o zaman da artk buttona basilamasin diyoruz-->
			
		</div>
		<hr>
		{/each}
</section>

<!--
	Elimizde urunlerimiz var, ve bu urunlerden stok adetleri vs de var, bunlardan addCard dedigimzde sepet icerisine ekleyecek ve sepet icerisine eklenen veri data si cikacak...					
-->