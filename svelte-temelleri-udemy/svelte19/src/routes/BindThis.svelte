

<script lang="ts">

let divElement:any;
console.log("divElement: ", divElement);
$:{
	console.log("divElementtttt: ", divElement);
	/*
	HARIKA BESTPRACTISE..DOGRUDAN HTML ELEMENTLERIMIZIN REFERANSINI ALIP DEGISKENE ATAMA ISLEMI 
	YANI document.getElementbyId veya document.qerySelector ile referans alms isleminin 
	sveltteki karsiligidir.....HARIKA BESPTRACTISE!!!!!!!!!
	bind:this={divElement} bu ifade ile div elemntinin kendisnin referansini alip, bir degiskene 
	atamis oluyoruz..Ama dikkat edelim, divElement degiskeni once undefined olarak okunur, cunku
	script kisminde o sekilde tanimlaniyor, ardindan ise div , html in tamamen yuklenmesi beklnir
	html tamamen yuklenip div tamamen okunduktan sonra artik divElement degiskenine, div elementinin 
	referansini atayacaktir!!!!
	BIZIM HTML ELEMNTLERININ REFERANSLARINA ERSTGIMZ BASKA BIRYERDE EVENT-HANDLING-FUNCTIONSLARIN 
	PARAMETRELERINE GELEN DEFAULT EVENT OBJESI UZERINDEN EVENT.TARGET DIYEREK O DINLENEN ELEMENTIN 
	REFERANSINI ELDE EDEREK DOGRUDAN O ELEMENTI HER TURLU MANIPULE EDEBILIYORDUK....BU DA ONEMLI!!
	*/
}
//Ozellikle bu tur case lerde reaktif-expression i if ile kullanabilirz 
//Ne zaman divElement i atanirsa, referans olarak o zaman bize goster diyebilriiz

$:if(divElement){
	console.log("myDivElement: ", divElement);
	console.log("myDivElement-innerText: ", divElement.innerText);
	console.log("myDivElement-innerHTML: ", divElement.innerHTML);
	//Bu yontem sayesinde, dom a direk mudahele edebiliriz, Normalde svelte tarafinda 
	//yapmayip burda yapmak istedigmz seyler olabilir!!!!! Boyle durumlarda bize harika effektiflik 
	//kazandiiriyor 
	divElement.addEventListener("click", function(event:any){
		console.log("event.target: ", event.target);
		// console.log("this: ", this.innerHTML);
	})
}

</script>

<div id="div-content" class="div-content" bind:this={divElement}>Content</div>