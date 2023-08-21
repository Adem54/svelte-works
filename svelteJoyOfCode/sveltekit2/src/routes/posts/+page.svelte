<script lang="ts">
   import type { PageData } from "./$types";
	//Bu data {data:posts} a esittir
		export let data:PageData;//sveltekit type ini otomatik olarak atama yapiyor
		//$:posts = data.posts;
		//$:{posts} = data; YANLIS-SYNTAX HATASI- PARANTEZ ICINE ALINMALI-REACTIVE-DESCRUCTION
		$:({posts} = data);//$:posts = data.posts; AYN SEYDIR

</script>

{#each posts as post , index(post.id)}
	<h3>{post.title}</h3>
	<p>{post.body}</p>
	<br>
{/each}
<!--
	Peki bize bu ne kazandirdi olayi tam olarak anlayabiliyor muyuz, iste bu bize, javascript kodunun fetch isleminden once yuklenmesini saglayarak,  bizim artik client-side rendering degil seo- islemimizin server-side renering den faydalanarak, network u acip bizim html sayfamizi gosteren dosya uzerine tikladgimz da artik data larin gelmis hali ile arama motoruna gosterilecek sekilde hazir oldugunu gorebiliriz.....	
	Ayrica inspect-network kisminda single fetch islemleri de gorurruz											
												
												
-->

<!--
Bir problemimiz var burda SEO problemi, eger biz herhangi bir sayfamiza gidersek client-side daki 
ve saga tiklayip view-source dersek eger, biz sadece sayfa yenilenmeden once y ani data nin server dan gelmemis halini goruruz ok ama yani sadecew markup html taglari goruryouz
biz sayfaya baska sayfadan geldigmz zaman(sayfay i yenileyince degil,) o zamn o inspect yaparak networkde syafa ismini incleersek
o sayfa nin neye karsilik geldgini goruruz , cunku client-side rendering i kullaniyoruz

SEO nun cok daha verimli olmasi icin server side rendering yapilmalidir, cunku client-side rendering ile 
google arama motorlari, sayfamiz a  yuklenen  ve sayfamizda gozuken kisim olarak sadece, client-side rendering de yuklenen 
kismi gorecektir
Biz server-side rendering yapmadikca, searach engine sayfamizda bos html taglari gorecektir, henuz daha datanin gelmemis halini
Bundan dolayi da javascript in once yuklenmesi, data datayi fetch etmeden once javascriptin yuklenmesi gerekiyor
server-side rendering sayesinde, heryerde spinner kullanmaktan kurtulacagiz, client-side rendering yapmaktansa
server-side rendering in avantajini sveltekit te kullanacagiz, ve data  yi sayfa load edilmeden once fetch edecegiz
ve bu sekilde hem daha hizli hem de daha direncli bir uygulama olacak
Peki bunu sveltekitte nasil yapacagiz  
+page.svelte in yanina bir sibling +page.ts file ekleyecegiz ve bu, laod function i export edecek ve bunun sayesinde javascript
fetch isleminden once yuklenmis olacak ve bu sayded arama motorlari da, javascript te sayfaya dahil edilmis sekilde, 
okuyabilecek ve bu kullanici-userexperience acisindan cok daha faydalidir
-->