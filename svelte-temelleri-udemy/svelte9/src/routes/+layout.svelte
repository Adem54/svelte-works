
<!--
	Dikkat edelim tum sayfalarda ortak kullanilacak olan header, footer alanlarini icinde sabit bir sekilde yazarak sadece dinamik olmasin istdgimz ve her bir page-sayfa da sayfaya gore doldurulmasini  istedigmiiz alan i slot olarak birakirsak bizim artik hicbirsey yapamamiza gerek yok biz sadece svelte in root mantiginda once ana dizin e yani routes in hemen altina +page.svelte ile ayni seviye ye +layout.svelte olsutururuz ve icerisini bu sekilde ortak olacak kisimlari  yazar ve her sayfa nin kendi icinde dolacak olan alan i da slot olarak belirleriz ardindan artik biz svelte route islemi mantigina gore olusturacagimz her bir sayfa icin bir folder-klasor olusturup o klaso isimlendirmesine gore adres cubugunda syaflarimizi gorecegiz ve isimlendirmesini ornegin about-contact seklinde yaptimgz klasor lerin her birisinin icerisine +page.svelte seklinde dosyayi svelte dosyasini olsuturmamiz gerekiyor ki dosyalarimizi svelte okiyabilsin ve de +layout.svelte i de bizim hicbirsey yapmamiza gerek kalmadan taniyabilsin!!!!!
-->
<main>
	<header>
		This is header part!
	</header>
	<hr>
	<slot/>
<hr>
	<footer>
		This is footer part!
	</footer>
</main>

<style>
	/* Burda biz nasil global olarak style yazabilecegimzi de gormus oluyoruz!!!!*/
	:global(:root)
	{
		font-family: sans-serif;
		font-size: 1.3rem;
		color:blue;
	}

	main{
		background-color: lightcoral;
	}
</style>