<<<<<<< HEAD
/*Bu uzak api den gelecek data nin ismi post lar yani title, body si olan, ornegin,
 sosial media da atilan postlar manasinda gelen data post datasi oldugu icin 
 bu ismi verdik yoksa post request ler manasinda degil yanlis anlasilmasin!!!!
 https://jsonplaceholder.typicode.com/posts bu endpoint posts data larini 
 respoinse edecek biz e ondan dolayi burda ismi posts oloarak verioruz
*/
import { get,post } from "../routes/request";

let url = "https://jsonplaceholder.typicode.com/posts";
export const getPosts = ()=>get(url);
/*Bu sekilde yapiyoruz yoksa, direk cagiracak requesti, 
yani direk yazarsak requesti yazdigmz gibi cagirir ondan
 dolayi bu sekilde yine bir method icinde cagiriyorzki getPosts()
  ne zaman cagirilirsa o zaman bu request gonderilsin!!!!
*/
=======
//Bu uzak api den gelecek data nin ismi post lar yani title, body si olan, ornegin, sosial media da atilan postlar manasinda gelen data post datasi oldugu icin bu ismi verdik yoksa post request ler manasinda degil yanlis anlasilmasin!!!!
//https://jsonplaceholder.typicode.com/posts bu endpoint posts data larini respoinse edecek biz e ondan dolayi burda ismi posts oloarak verioruz

import {get,post} from "../routes/request";

let url = "https://jsonplaceholder.typicode.com/posts";
export const getPosts = ()=>get(url);
//Bu sekilde yapiyoruz yoksa, direk cagiracak requesti, yani direk yazarsak requesti yazdigmz gibi cagirir ondan dolayi bu sekilde yine bir method icinde cagiriyorzki getPosts() ne zaman cagirilirsa o zaman bu request gonderilsin!!!!
>>>>>>> 8382b31d499b82bef99b4f8ced1ac221936ec335
export const addPost = (data:any)=>post(url, data);