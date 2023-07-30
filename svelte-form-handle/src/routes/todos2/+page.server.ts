import { addTodo, clearTodos, getTodos, removeTodo } from '$lib/db/server';
import { fail, type Actions } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';

export const load:any = (async () => {
   
    //Data uzak api den fetch edilerek alinir burda genellikle biz bunu simdilik sadece getTodos() diyerek aldik!!!!
    const todos = getTodos();
  
    return {todos};
});


//MESELA ORNEGIN KULLANICININ SAYFASI ACIK AMA, HALA BIZE ISTEK GONDERILIYOR DIYELIM KI KULLANICI SAYFASINDAN YANI KULLANICI SAYFASI ACIK BIRARAKK CIKIYOR VE GET-REQUES CALISIYOR MESELA, O ZAMAN +PAGE.SERVER.TS E GIDERIZ, ORDA BIR SLOW-RESPONSE U SIMULE EDEN SLEEP FUNCTION TANIMLARIZ

async function sleep(ms:number){
    return new Promise((resolve)=>setTimeout(() => {
        
    }, ms))
}
//slow network gonderilme islemini simule edebiilriz bu sayede, bu sleep function i hemen asagidaki action endpoint function larindan addTodo icinde kullanabiliriz ve bu sekilde slow- response u simule ederiz





//Burda biz yukardakileri aynen kullanabilirz simdi buray form actions islemlerini ekleyecegiz
//ACTIONS

//import type { Actions } from '@sveltejs/kit';
//YANI BIZ HIC EKSTRA SERVER.TS DE ENDPOINTLERI YAZMADAN DIREK +PAGE.SERVER.TS DE SVELTEKIT IN FORMACTIONLARI ILE HANDLE EDEBILIYORUZ!!!!! TUM +SERVER.TS DE YAPTGIMZ ENDPOINT ISLEMLERINI ASAGDIDA YAPMIS OLDUK!!!!

export const actions:Actions = 
{
    //Eger ki formda herhangi bir aciton olmazsa bu defualt action i kullanilacak
    //Ama eger form da isimlendirilmis herhangi bir action kullanilrsa o zaman default actioni kullanamayiz!!!
    //Ornegin mesela biz todo yu temizleyip sonra da baska islemler yapmak istersek orneign 3-4 tane farkli action yapmak istersek ve farkli farkli formlar olusturup onlardan da action lar gondermek istersek iyice isler karisacak onun icin iste form actions lar sayesinde sveltekit ile gelen formactions lar sayesinde biz o tarz senaryolarin hepsinin ustesinden gelebilms olacagiz..
    //Cunku problem su simdi anladim, tum methodlar belkide POST olacak ve bizim server.ts de bu sefer ne yapmamiz gerekecek query parametrler le yeni POST METODLARI YAZMAMIZ GEREKECEK AMA hani  http://localhost:5174/todos  http://localhost:5174/todos?
    //ya da hidden input alanlari olusturup ordan name ler uzerinden data gondermeye calisaagiz ve iyice server da karisik isler yapilmaya baslaniyor iste bu drumda devreye form-actions lar giriyor!!!!

    // default:()=>{

    // },
    //ERROR-SOLUTION:Error: When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions-EGER KI NAMED ACTION LAR KULLANILYYOR ISE  O ZAMAN DEFAULT ACTION KULLANILAMAZ Y OKSA BU SEKILDE HATA VERECEKTIR!!!!

    addTodo:async({request})=>{
        const formData = await request.formData();
        const todo = String(formData.get("todo"));
        
        //Eger todo yok ise durumudna backend validation i yaparken sveltekit den gelen fail methodunu kullanabiliriz direk olarak!
        if(!todo){
            //import { fail, type Actions } from '@sveltejs/kit';
            //Biz tabi valu de dondurmek istiyoruz ki formun sifirlanmasi durumunda, sonra onu yeniden kullanabiliriz!!!
            console.log(fail(400, {todo, missing:true}) )
            //ActionFailure { status: 400, data: { todo: '', missing: true } }
            return fail(400, {todo, missing:true}) 
            //Simdi tamamen bu islemi sveltekit yardimi ile yapmis oluyuoruz
        }

        await sleep(2000);//Burayi beklet calistirdiktan sonra asagi in
        //Biz burayi kullandigmiz zaman artik onde input todosuna data eklenip de  addTodo ya tiklaninca herhangi bir degisme olmuyor!!!!!


       addTodo(todo);//import { addTodo, clearTodos, getTodos } from '$lib/db/server';-  db de yapilan islemi buraya aliyoruz.!!!

       //return { success:true, data:todo }
       return { success:true }



    },
    removeTodo:async({request})=>
    {
        const formData = await request.formData();
        const todoId = Number((formData).get("id"));

        removeTodo(todoId);

        return {success:true};

    },

    clearTodos: ()=>
    {
        clearTodos();//Bunu direk lib/db/server.ts den aliyoruz!!!!
    }
}


//https://www.youtube.com/watch?v=XNbCp7ZJi-8&t=2113s--HARIKA VIDEO.. 
//43. DAKIKA DA KALDIK EN SON ...