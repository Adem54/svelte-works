
<div class="card">
	<slot>
		This card element is empty!
	</slot>
</div>

<!--Bir componentimz icerisinde slot kullanmak demek oluyor ki bu component kullanirken children alabilir demektir, yani bu componentin acilip kapanma etiketleri ile d ekullanilablir istenirse de tek sekilde de kullanilablir 

yani <Card></Card> seklinde kullanilarak araya herhangi html elemnti veya direk baska bir component koyulmasi saglanarak eger ornegin tum sayfalarda kullanilacak bu sekilde ortak alanlar var ise, ozellikle reusability acisinda bu kullaniim harika bessptracitse dirrr
Ama yok eger <Card></Card> bu sekilde arasina hicbirsey yazilmaz veya <Card/> bu sekilde kullanilir ise o zaman Card componenti iceriisnde slot lar arasina ne yazildi ise o ifade gozukecektir!!!!
-->
<style>
	.card {
		width:15rem;
		height: 5rem;
		background-color: bisque;
		border:1px solid;
		border-radius: .3rem;
		margin-bottom: 1rem;
	}
</style>