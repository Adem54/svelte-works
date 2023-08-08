<script>
	let html = '<p>Write some text!</p>';
</script>
<!--
	<div contenteditable="true" on:input={editDivContent}>Hello</div>
	svelte bize bu sekilde method yazmana gerek yyok asagiki gibi yapabilecegimzi 
	soyluyor!!!
	<div contenteditable="true"  bind:innerHTML={html} />
-->
<!-- <div contenteditable="true"  bind:innerHTML={html} /> -->
<div contenteditable="true"  bind:innerText={html} />
<!-- <div contenteditable="true"  bind:textContent={html} /> -->
<!--HARIKA BIR OZELLIK VE BUNU KULLANARAK, RESIZABLE TEXT YAPABILIRIZ. BIZIM BELIRLEDGIMZ
ALANA KADAR HEIGHT YUKSELSIN BELLI BIR YUKSEKLIKTEN SONRA ISE SCROLL CIKSIN SEKLINDE 
KULLANABIILIRIZ BUNU !!!! Bu islemi sadece innerText ile yapabilyoruz cunku new line lari 
ancak innerText kullanarak alabiliyoruz!!!
-->
<pre>{html}</pre>
<hr>
<style>
	[contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}
</style>
