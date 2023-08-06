


<script>
   import User from "./User.svelte";
// KEY LERI MUTLAKA KULLANMALIYIZ-SVELTE IN DIZI ICINDEKI ELEMENTLERE ISLEM 
// YAPARKEN HANGI ELEMNTE ISLEM YAPACAGINI BILEBILMESI ICIN 
//#EACH KULLANIMINDA INDEX LERI DE KULLANABILIYORUZ 
//#EACH :ELSE KULLANIMI DIZI ICINDE ELEMAN OLMADIGI DURUMLAR ICIN HARIKA PRATIKLIK SAGLIYOR BIZE 
//EACH ARRAY(5) ILE BIZ FOR DONGUSU YAPTIMIZ VE ORNEGIN BIR KODU BELIRLI SAYIDA TEKRAR ETMEK ISTEDIGIMZ DURUMLAR ICIN KULLANABILIRIZ!!!!	
	let users = [
		{id:1,name:"Adem", surname:"Erbas", emoji:"😄"},
		{id:2,name:"Sercan", surname:"Kavas", emoji:"😇"},
		{id:3,name:"Satlik", surname:"Ergesov", emoji:"🤩"},
		{id:4,name:"Muhsin", surname:"Selvi", emoji:"😡"},
	];
	const handleSubstract = ()=>{
		users = users.slice(1);
		console.log("users: ", users);
		//original users array inin 1. elemanini silecek her seferinde!!
	}

	
</script>
<!--Svelte de dizileri each ile dondururken, her dondurdugmuz eleman icin
	 uniq key belirtmemiz gerekiyor, bunu reactta key={id} seklinde attribute de yaziyorduk..
	  Svelt de de ayni mantik var, verecegimz key, dizmizi dondurdugmuz each blogu iceriisnde
	   uniq-benzersiz olmalidir, yoksa hata aliriz, key kullanmamiz gerekiyor cunku biz 
		dizi icinddeki bir obje nin icinde degisiklik yaptimgz zaman svelte in dizi iincdeki
		 hangi elemntte degisiklik yapildigini anlayip, buna gore dom da da 
		 degisiklik yapabilmesi icin gerekiyor-->
<button on:click={handleSubstract}>Substract</button>
<ul>
	<!--bu sekilde index degerini alabiliyoruz-->
	{#each users as user, index (user.id)}<!--DIKKAT EDELIM (user.id) olarak key imizi belirtmis olduk!!!--> 
		<li>{user.name} - {user.surname} - {user.emoji}</li>
		<h4>{index}</h4>
	{/each}
</ul>
<hr>
<h2>User!!</h2>
<ul>
<!--descructing kullanarak da dizimizin icindeki degerleri yazdirabiliriz..-->
	{#each users as {id,name,surname}, index(id)}<!--descrutcting ile id  yi key olarak belirtmis olduk!!-->
		<User {name} {surname} {index}/>
	{:else}<!--each :else cok onemli bir kavramdir, eger dondurdugmuz dizi icerisinde eleman
		 bulunmaz ise o zaman dizi icerisnde hic element yoktur diye mesaj yazdirabilmemizi sagliyor!!!!-->
	<h2>There is no data in users!</h2>	
	{/each}
</ul>
<!--Peki bizim elimzde dizi yok ama bir degisken var ve o degiskene bagli olark tekrar
	 ettiererek ekrana basmak istedimz bir html imiz var o zaman nasil yapariz-->
<hr>
<!--Dikkat edelim 5 elemanli isi bos dizi olusturuyor Array(5) constructor kullandigmz zamn-->
{#each Array(5) as _, index(index)}<!--burda keyimizi index olarak verdik-->
	<h6>{index}</h6>
{/each}



