

<script>
	
	let id = "myId";
	//Eger attribute-nitelik ismi ile ona verdigmiz degeri degisken ile veriyorsak ve attribute ismi ile attribute verdgimz degisken ismi ayni ise o zaman kisa bir sekilde kullanabiliriz...  

	//Bu sekilde de cok pratik  yaklasimlarda bulunabiliriz...Yani bir html elementi ve ona ait attribute ler dendiginde hemen aklmiza su gelmedlir, bir html elementi obje ise, o elementin attribute leri o objenin properties leri gibidir
	let img = {
		src:"https://www.befunky.com/images/prismic/f5ca4181-01da-4237-92bf-b6938359503e_hero-blur-image-5.jpg?auto=avif,webp&format=jpg&width=896",
		alt:"house",
		title:"nice-house"
	}
	
</script>

<h1 {id}>Welcome to SvelteKit</h1>

<img src={img.src} alt={img.alt} title={img.title}>
<!--Asagidaki gibi de yine pratik bir sekilde kullanabiliyoruz!!-->
<img {...img}>

<hr>

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius cumque incidunt fugiat impedit optio accusantium deleniti doloribus, soluta at quam commodi nobis tempora maiores cum saepe repudiandae totam odit. Veritatis?</p>

<div><span>  This is my span text!  </span></div>
<style lang="scss">

	div {
		span {
			color:green;
			font-size:2rem;
			border:1px solid;
		}
	}

	#myId {
		color:tomato;
		background-color: yellow;
	}

	
	p {
		width:40%;
		font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color:sandybrown;
		text-align: justify;
	}
	/*
		Biz p elemmentine css yazdigmiizda arkada bu p elementine ozel bir class atamasi yapiyor! Bu da su demektir, bu component icerisinde yazdigmz ornegin h1, p elementi icin yazdigm css ozellikleri sadece bu componenti etkileyecektir, ici ice componentler kullansak bile, componentler icerisinde kullandigmiz css kodlari birbirine karsimayacaktir, her component icerisinde kullanilan css o componente ozgudur
		Component scope var yani
		<p class="s-y_bCXRrkrYfP" data-svelte-h="svelte-1ti0xvm">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius cumque incidunt fugiat impedit optio accusantium deleniti doloribus, soluta at quam commodi nobis tempora maiores cum saepe repudiandae totam odit. Veritatis?
		</p>
	*/


	/* Peki bir componentimiz icerisinde global bir css tanimlamak istersek nasil yapariz? asagidaki gibi yazabilirz
	
	:global(p){color:aqua;} biz bunu yazinca arkada  yani compile edildiginde browser da su sekilde cevrilmis oluyor p {color:aqua;} ama tabi ki yukardaki tanimladigmz p ye ozel bir class olsturuldugu icin class specifity, genel p elementi specifity sinden buyuk oldugu icin, yukardaki p elementinde ne atanmis ise o color rengi uygulaanacaktir
	Tum p elementlerine ortak kod yazmak istersek o zaman bu global i kullanmak daha dogru olacaktir

	*/
	:global(p){color:aqua;}

/*
Svelte icerisinde SAss kullanimi!!
Once asagidki paket kurulur..
$ npm i -D svelte-preprocess sass
Sonra svelte.config icerisine asagidaki import  yapilir
import preprocessor from "svelte-preprocess";
ve de asagidaki kodda eklenir 
const config = {
	preprocess:preprocessor(), bu satir eklenir config.svelte icerisinde
Bundan sonra artik style taglari arasinda sass kullanabilmek icin onu style attributunde belirtmemiz gerekiyor
<style lang=scss ></>
Tabi sass in kendisini de projeye npm install -g sass veya less kullanacaksak da npm install -g less diye kurmamiz da gerekyor	
*/

</style>

