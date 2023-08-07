
<script lang="ts">
   import { imagePreview } from "./utils";



let image:any;

const changeHandle = async (e:any)=>{
	console.log("File:", e.target.files)
	//FileList i bize verecektir, yani sectimigiz dosya ile ilgii her turlu bilgiyi alabiliriz 
	//Eger secilen dosyayi ekran da gostermek istersek o zaman dosya okuma api sini kullanacagimz javascript tarafinda

	// if(!e.target.files[0])
	// {
	// 	image:false;
	// 	//Bunda sonrasini calistirmamasi icin de 
	// 	return;	
	// }
	// const reader =  new FileReader();
	// //reader imiza event vererek load oldugunda ne yapmasjni istiyorsak onu soyuleriz
	// reader.addEventListener("load", function(){
	// 	image = this.result;
	// 	console.log("image: ", image);
	// })
	// reader.readAsDataURL(e.target.files[0]);
	//Bizim icin secilen image i, file i okyacak
	image = await imagePreview(e.target.files[0]);
}
</script>


<input type="file" accept="image/*" on:change={changeHandle}>
<!-- accept="image/*"sadece image turu kabul et demek,
	 ama tum image type larini kabul et, demektir
	Dosya da birsey sectigmizde ya da secimi iptal ettigimzde onchange methodu calisiyor
	

-->

{#if image}
	<img src={image} alt=""/>
{/if}