<script lang="ts">
	//Simdiye kadar ki bind islemlerinde tek bir input alani tek bir degiskene bind ediliyor, tek bir degiskeni etkilyordu
	//Burda 1 den fazla input alaninin tek degeri etkilemesini gorecegiz..

	//Kullanici dizi icindeki urunlerden seccim yapsin checkbox ile birden fazla secim y apsin ve siparis ile bu secimler asagida yazdiracagiz, kullanici hangilerini secti ise onlari yazdiracagiz

	//Elimizde 3 tane checkbox type i li input alani var ve bu uc alan da tek myOrder dizisini ilgilendiriyor dikkat edelim..Kullnici checked yaptigi item in myOrders icerisine atilmasini istiyoruz
let menu = ["desert", "pizza", "taco"];
let myOrders:any = [];
</script>

<section>
<h1>Menu</h1>
{#each menu as item (item) }
	<label for="test">
		<!--bind:group isleminin uygulanabilmesi icin, value olarak da item i vermemiz gerekiyor ki bind:group islemi tam olarak uygulansin-->
		<input type="checkbox" name="item"
		value={item} 
		bind:group={myOrders}
		>
		{item}
	</label>
{/each}

<h2>My Orders</h2>
{#each myOrders as order(order) }

<li>{order}</li>
{:else} <!--Eger hic secilen siparis yok ise, o zaman da kullaniciya asagidaki mesaji versin!!! bunu each-else ile yapiyorduk!!-->
<h2>There is no order!!</h2>	
{/each}
</section>