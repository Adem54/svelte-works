

<script>

	//Reactive
	//State timiz guncellendiginde, dom un da bundan haberdar olmasi ve bu degiskenin kullanildigi heryerde domun da otomatik olarak guncellenmesi
//React ile biz bu islemi useState ile yonetiyorduk const [name,setName] = useState("");
//Svelte te ise  bi< script icerisinde  normal toplevel bir degisken olusturdugmuzda, bu reaktif oluyor ama farkli orneklerde bakalim nasil ele aliniyor onu gorelim!!

	let count=0;

	const handleClick = ()=>{
		count+=1;//Sveltte eger reaktif bir degiskeni degistirmek istiyorusak atama operatoru, yani = operatorunu kullanmak zorundayiz yani bu isi, count++ seklinde yapamayiz..bunu bilmek onemli..
		//state leri guncellemek icin = assign operatorunu kullanmak zorundayiz,bunda dikket etmeliyiz!!!!
	
	}

	let myCount = count;//Burda count un ilk basta degeri 0 oldugu icin myCount her zaman 0 olacaktir

	//Reactive-computed variable olusturmak!!!!!
	//yani reactive degerimiz olan count u baska bir variable ile takip etmek istiyoruz
	//Bu artik bizim reactive-computed variable imiz, bize sunu garanti ediyor ona atadigmz degisken her degistiginde bunu dom a  haber veriyor ve dom da gerekli yerlerde guncelliyor ve biz e onun en guncel halini donduruyor!!!
	$:myCount2 = count;//Burasi aktif olarak counta bagli olarak her zaman degisecektir, cunku $: kullanildiginda kullanilan ifade ile birlikte count aslinda bir referans tip gibi, mutable davranis sergileyerek, artik myCount2 countun referansin almis oluyor count ta tabki referans tip gibi davraniyor ve bu sekilde de, artik myCount2 dogrudan count degerini takip ediyor arkada, memorty de ayni adresi gostermis oluyorlar!!!

	//Bu aslinda computed variable diye adlanidiriliyor ve reactta bu islemi useMemo ile kullaniliyordu const myCount2 = useMemo(()=>count, [count]) sekline kullaniliyordu!!!

	//Computed variable lar icerisine expression lar da yazabiliyoruz , console.log icinde bize...count un guncel halini gondurmus oluyor!!!!
	$:console.log("count: ", count);
	$:console.log("myCount2: ", myCount2);

//Dikkat edelim biz direk console ile count un dinamik olarak degerini console da direk yazarak alamiyorum, hem count un hem de myCount2 un dinamik degerini console da direk alamiyoruz ondan dolayi yine $: kullnarak dinamik olarak console da degisken degerini de gorebiliriz bu harikia bir islem!!!!!
	console.log("******************")
	console.log("counttttt: ", count);
	console.log("myCount22222: ", myCount2);

	//Bu sekilde de hangi variable i gormek istersek bu kod blogu icinde o state in en guncel halini en son guncellenmis halini bize verecektir!!!
	$:{
		console.log("COUNT:&&&_ ",count);
		console.log("myCount2:&&&_ ",myCount2);
	}

	//$:computed variable icin kullandigmiz reactivity-
	//Reactive Declarations demektir $: kullandigmiz zaman  ve de biz bu reactive declerartoin i if blogu ile birlikte de kullanabiliyoruz

	//Sadece count degeri 5 oldugu zaman calisacaktir...Yani bu $:reactive decleartion ile birlikte sanki bir method var arkada ve her, bir interaktif lik oldugunda yani bir degisken buton-event ile update edildiginde burasi  da o update edilen degerden haber aliyor ve bunu uyglama genelinde gecerlli hale getrierek bize de guncellenmis degeri sunmaktadir
	$:if(count == 5) 
	{
		console.log(`count-value is : ${count}`);
	}

	const users = [
		{id:1,name:"Adem", surname:"Erbas"},
		{id:2,name:"Adem", surname:"Erbas"},
		{id:3,name:"Adem", surname:"Erbas"},
		{id:4,name:"Adem", surname:"Erbas"},
	]
</script>
<h1>{count == 5 ? ("COUNT IS "+count) : "" }</h1>

{#if count === 10}
	<h2>{count} times clicked 1.level..</h2>
{:else if count === 15}
<h2>{count} times clicked 2.level..</h2>
{:else}
<h2>{count} times clicked default....</h2>
{/if}
<button on:click={handleClick}>You clicked the button {count} time!</button>
<h3>{myCount}</h3>
<h3>{myCount2}</h3>