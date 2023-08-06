

<script lang="ts">
   import { json } from "@sveltejs/kit";
import { onMount } from "svelte";




	//https://jsonplaceholder.typicode.com/users
	let users:any=[];
	let isLoading = true;
	//Bu sekilde onMount icerisinde data yi cekebiliyoruz
	let endpointUrl  = "https://jsonplaceholder.typicode.com/users";
	onMount(()=>{
		fetch(endpointUrl).then(res=>res.json()).then(data=>{users=data;}).finally(()=>isLoading=false);
	})

	const getPosts =  new Promise((resolve, reject)=>{
		setTimeout(()=>{
			return resolve("The post data is fetched");
		}, 1000)
	})

//Bu sekilde then bloklari kullanarak, datayi cekip sonra bu datayi , direk html icerisinde svelte in bize sunmus oldugu imkanlar dahilinde yapiyoruz
	const fetchData =()=> fetch(endpointUrl).then(res=>res.json()).catch(e=>console.error(e));
	

	const fetchData2 = async () => {
    try {
      const response = await fetch(endpointUrl);
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      throw e; // Re-throw the error to be caught in the `{:catch}` block
    }
  };

  let promiseData = fetchData2();

</script>

<!--loading in hanlde edilmesini burda manuel olarak , sveltten bagimsiz olarak yaptik, ama svelte in bize sundugu imkan sayesinde bunu yapmamiza gerek yok!!!Asagidaki orneklerde direk svelte kendisi bunu hallediyor bizim icin!!!!!-->
<h1 style="color:tomato;">{isLoading ? "My data is loading!!!!!!!!!!" : ""}</h1>
<hr>

{#await getPosts}
	<h3>Post data is fetching......</h3>
{:then data} 
	<p>
		Value: {data}
	</p>
{:catch error}
<p>Error: {error}</p>	
{/await}

<hr>

<!--EGer hicbir zaman reject edilmeyecek bir request imiz var ise o zaman onu da asagiki gibi kullanabiliriz!!!!Ama loading handle yok bu kullanimda , eger data gelene kadar hibrisey gozukmesin dersek, bu sekilde de kullanabilioruz asenkron islemlerimzi-->

{#await getPosts then value}
<p>
	MyValue: {value}
</p>
{/await}

<hr>
<h1>fetchData</h1>
{#await fetchData() }

	<h2>Loading data...</h2>
{:then data } 
<h1>HEADER PART</h1><!--Eger istersekki. html icindeki diger alanlarda ,fetch edilen data geldikten sonra gozuksun o zaman da o sekil de olmasini istedgmiz alanlari da header-footer gibi alanlari da biz, svelte in bize saglamis oldugu await kismindaki data nin geldigi zaman calisacak kisimda kullanabiliriz!!!!!-->
	{#each data as item, index(item.id) }
		<span style="color:blue; font-weight:bold; font-size:1.4rem; display:block;">{item.name} -- {item.email}</span>
	{/each}
	<h1>FOOTER PART</h1>	
{:catch error}
	<h2>Something went wrong!</h2>	
{/await}


<hr>

{#await promiseData}
  <h2>Loading data...</h2>
{:then data}
  
  {#each data as item,index(item.id) }
	<h4>{item.name} - {item.username}</h4>
  {/each}
{:catch error}
  <h2>Something went wrong!</h2>
{/await}


