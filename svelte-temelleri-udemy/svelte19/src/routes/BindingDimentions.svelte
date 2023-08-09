<script lang="ts">
	let w:any;
	let h:any;
	let size = 42;
	let text = 'edit text';
</script>

<input type="range" bind:value={size} />
<input bind:value={text} />

<p>size: {w}px x {h}px</p>
<!--Dikkat edersk biz, range type input sayesinde arttirip azaltiyoruz-->
<!-- Ayrica da dikkat edecek olursak eger, biz div in width ve heightini bind ile baglayarak da 
doguradan alabiliyoruz!!!!
-->
<div bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {size}px">{text}</span>
	<!--css-style icerisinde dinamik bir deger verilmis burda buna dikkat edelim..BESTPRACTISE!!!!-->
</div>
<!--
	Every block-level element has clientWidth, clientHeight, offsetWidth and offsetHeight bindings:
	<div bind:clientWidth={w} bind:clientHeight={h}>
  		<span style="font-size: {size}px">{text}</span>
	</div>
	These bindings are readonly — changing the values of w and h won't have any effect.
	display: inline elements cannot be measured with this approach; nor can elements that
	 can't contain other elements (such as <canvas>). In these cases you will 
		need to measure a wrapper element instead.
		display:inline elementlerde bu yaklasimla olcemiyoruz, ondan dolayi da inline elementleri block bir kapsayici element 
		icerisine alarak bu yaklasim i kullanabiliriz. Ama inline-block elementleri olcebliyoruz, sadece inline elementleri 
		olcemeyebilirz
-->

<style>
	input {
		display: block;
	}
	div {
		display: inline-block;
	}
	span {
		word-break: break-all;
	}
</style>

<!--

-->