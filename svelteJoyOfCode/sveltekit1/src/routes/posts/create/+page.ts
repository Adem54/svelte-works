
import { error } from "@sveltejs/kit";
import type {PageLoad} from "./$types";

export const load:PageLoad = async ()=>{
	// throw new Error("Yikes");
	throw error(404, {message:'YIkes 🚨'})
}
//Burasini hata vermesi icin bilerek yazdik ki +error.svelte custom page de yazabildigmizi gostermek icin 
//Her sayfann kendisine ozel +error.svelte yazabilecegimzi gostermek icin