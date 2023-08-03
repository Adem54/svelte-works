

import { Writable, writable } from "svelte/store";


let defaultProducts:ProductType[] = 
[
	{id:1, title:"bicycle", quantity:12, price:2400},
	{id:2, title:"notatblokk", quantity:7, price:670},
	{id:3, title:"PC", quantity:19, price:4200},
	{id:4, title:"Tablet", quantity:23, price:1600},
];

export type ProductType= {
	id:number,
	title:string,
	quantity:number,
	price:number
}


export const products:Writable<ProductType[]> = writable(defaultProducts);

export const card:Writable<ProductType[]> = writable([]);
