
<script>
   import BindGroup from "./BindGroup.svelte";
   import BindTextArea from "./BindTextArea.svelte";
import CheckBoxBind from "./CheckBoxBind.svelte";
   import SelectBind from "./SelectBind.svelte";

//Text-inputu bind etme islemi, ve dinamik olarak two way bindgins, kullanicidan gelen degeri dinamik olarak baska bir degiskene aktarma islemi svelte te asagida fullname ile myFullName islemleri ile gosteriliyor
let name = "";
let surname = "";
let fullname = name + " " + surname;
$:myFullName = name + " " + surname;
</script>

<section style="margin:2rem;">

	<SelectBind/>
	<br><br>
	<hr>
	<BindTextArea/>
	<BindGroup/>
	<br><br>
	<hr>
<CheckBoxBind/>	
<br><br>
<hr>
<input type="text" bind:value={name}>
<input type="text" bind:value={surname}>
<h1>name: {name} - {surname}</h1>
</section>
<h2>My fullname is {fullname}</h2>
<h2>My fullname is {myFullName}</h2>

