import type { PageLoad } from "./$types";
export const load:PageLoad = async (event:any)=>{
let { fetch } = event;
//hatirlayacak olursak server da relative path
const response = await fetch("/api/posts");
const posts = await response.json();
return {
	posts
}
//Gelen dizi icindeki posts array data sini obje icerisinde dizi olacak sekilde gondermis oluyourz..
}
//Bu load fonksiyonu return ettigi data, bu +page.ts in siblingi olan +page.svelte icin available, olacak, 
//Yani burda sadece biz return olarak o datayi dondurecegiz ve bu otomatik olarak, +page.svelte sayfasina data 
//parametresi olarak gonderilmis olacak