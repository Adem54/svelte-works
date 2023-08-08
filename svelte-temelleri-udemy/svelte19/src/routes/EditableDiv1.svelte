
<script lang="ts">
/*
Harika bestpractise..Burda dikkat edersek, biz, icerigi degistirilemez bir 
bir html elemntinin icerigini degistirilebilir hale getirip icerigini degistirebiliyoruz
*/
let divContent= ``;

//innerHTML,textContent, innerText
const editDivContent = (event:any)=>{
	//console.log("event: ", event.target.innerHTML);
	//console.log("event: ", event.target.innerText);
	console.log("event: ", event.target.textContent);
	//divContent = event.target.innerHTML;
	//divContent = event.target.innerText;
	divContent = event.target.textContent;
}
</script>

<div contenteditable="true" on:input={editDivContent}>Hello</div>
<p>{divContent}</p>