<script lang="ts">
   import { enhance } from '$app/forms';
    import { invalidateAll } from '$app/navigation';
   import type { SubmitFunction } from '@sveltejs/kit';

 

   import type { ActionData, PageData } from './$types';
 
 
   // import type { ActionData } from './$types'
     //import type { PageData } from './$types';
     
    export let data:PageData;
    //data direk olarak +page.server icindeki load methodundan gelen data yi aliyor
   // export let form:ActionData;
    export let form:ActionData;
    //Ama form ise dikkat edelim.. 

//FORM INPUT ALANINA BIR DEGER GIRIP DE FORMU SUMBIT ETTIGMIZDE- ADD TODO DEDGIIMZDE HEM SUBMIT TEN ONCE HEMD E SUBMITTEN SONRA CALISAN ALANLARIMIZ  MEVCUT BU HARIKA BIR USER-EXPREINCE SAGLIYOR BIZE VE PARAMEREDE GELEN INPUT ILE BIZE BIRCOK METHOD DA GELIYOR KULLLANABILECEGIMIZ, ACTION, RESULT, FORM, DATA , UPDATE GIBI METHODLAR VAR USE-CASE DURUMLARINA GORE HARIKA USER-EXPERIENCE I ENHANCE EDEBILECGIMZ FIRSATLAR SUNUYOR BIZE!!!!
//MESELA ORNEGIN KULLANICININ SAYFASI ACIK AMA, HALA BIZE ISTEK GONDERILIYOR DIYELIM KI KULLANICI SAYFASINDAN YANI KULLANICI SAYFASI ACIK BIRARAKK CIKIYOR VE GET-REQUES CALISIYOR MESELA, O ZAMAN +PAGE.SERVER.TS E GIDERIZ, ORDA BIR SLOW-RESPONSE U SIMULE EDEN SLEEP FUNCTION TANIMLARIZ

    const addTodo:SubmitFunction = (input)=>{
        //do something before the form submits
        //Validation yapabilirz burda
            console.log("input: ", input)
        //Custome callback function  kullaniliyor
        return async (options)=>{
            //do something after the form submit
            console.log("otpions: ", options)
        }

    }
 </script>
 
 <pre>
     { JSON.stringify( form, null, 2 )}
 </pre>
 <!--
     Bu icindde bulundgumuz sayfayi biz calistirdfigmzda karsiimza bu gelecek..yani biz routes altindaki klasorler ve o klasorler altindaki + ile baslayan dosyalar ki eger o dosyalar +page ise sadece klasor ler uzerindn url ler belirleniyor
     http://localhost:5174/todos
 -->
 
 <ul>
     {#each data.todos as todo }
         <li>{todo.id}</li>
         <li>{todo.text}</li>
         <!-- ?removeTodo bi bor query-param ve sveltekit bunun bir action oldugunu bilmiyor iste svelte kit in bunun bir fonksiyon ve invoke edilmek istendigini anlamsi icin  ? den sonra / koymamiz gerekir ?/removeTodo-->

         <!-- 
               import { enhance } from '$app/forms';
               use:enhance form attribute de kullaninca bu sekilde geliyhor 
         -->
         <form action="?/removeTodo"  method="POST"  use:enhance >
 
             <input type="hidden" name="id" value={todo.id}>
             <!--id nin gonderilme sekline iyi dikkat edelim.....HARIKA BESTPRACTISE...-->
             <button class="delete" type="submit">DelTodo-X</button>
         </form>
     {/each}
 </ul>
 
 <!--BURDA BIZ BU ISLEMI DE FORM DA Y APTIK AMA BU ISLEMIN BIZ, YINE KENDI SAYFASINA GITMESINI ISTIYRODUK CUNKU DIREK BURDA HANDLE EDECEKTIK ZATEN-->
 <!--
    FORM-ACTION LARIN GETIRRISI ISTE BU UYGULAMAMIZ DAHA DIRENCLI HALE GETIRIYOR , DAHA SUSTAINABLE HALE GETIRIYOR

    BIZ ADDTODO ILE ILGILI HERHANGI BIR JAVASCRIPT KODU YAZMAMAMIZA RAGMEN, YANI BU SAYFADA SCRIPT ICERISINDE HERHANGI BIR JAVASCRIT METHODU YAZMAMAIZA RAGMEN ADDTODO METHDOU DIREK SERVER DAN BURDA KULLANLMIS OLDU VE SAYFAYI RENDER EDIYOR SAYFAYI YENILIYOR..ISTE BU HARIKA VE AWESOME BIR DURUM!!!!!!!!

 -->
 <!-- ?/addTodo sveltekit onun invoke edilmesi gereken bir function oldugunu anliyor +page.Server.ts dosyasinda .HARIKA BIR OZELLIK!!!! BUNU INSPECT YAPARAK NETWORK KISMINDA DA GOREBILIRIZ ARKADA SVELTEKIT BUNU QUERY-PARAMETRESI OLARAK HANDLE EDIYOR KENDISI  SADECE ARKADA URL BIR FONKSIYONU TETIKLIYOR, BIR FONKSIYONU CAGIRIYOR ISTE BU YONTEMLE SVELTEKIT ISTEDGIIN KADAR ACTION, ISTEDGIIN KADAR SERVER TARAFINDAN ENDPOINT CAGIRABILIRSIN, REQUEST GONDEREBILIRSIN!!!!ISTEDIGIN KADAR BUTONU ACTION EDEBILIRSIN!!!-->

 <!--
    USE:ENHANCE
    use:enhance sayesinde tum action larim sayfa render edilmeden, sayfa yenilenmeden gerceklesiyor ve bu harika bir user-experience sagliyor,
    sayfayi yenilemek yerine daha dogrusu server dan invoke edilen bir fonksiyon dan sonra netwwork e bakacak olursak eger
    javascript available oldugu icin javascript i kullanacak yani client-side rendering i kullaniyor

    Biz use:enhance y i kullanigmiz zaman , biz formu submti ettigmiz zaman, use:enhance form data sini update ediyor
       export let form:ActionData;
       BU DA FORM UN $ LI SAYFASINDA .STORE U UPDATE EDECEK VE O DA $PAGE_STATUS OZELLIGIINI UPDATE EDDIYOR
       BU ASLINDA FORMU RESET EDIP FONKISYONU TEKRAR CALISTIRMIS OLUYOR GIBI VE BIZIM KENDIMIZIN DIKKAT EDERSEK AWAIT INVALIDATE() O KULLANMAMIZA RAGMEN GERCEKLETIGINI GOREBILIRIZ, VE KENDISI REDIRECT ISLEMINI GERCEKLESTIRIYOR
       ENHANCE ASLINDA ARKA DA YINE FETCH ISLEMI, YINE FORM-PREVENT-DEFAULT GIBI ISLEMLER YAPIYOR

       USE-ENHANCE ACTION IN BEHAVIOUR UNU CUSTOMIZE EDEBILIRIZ!!!
       BUNU BIR FORM SUBMIT EDILMEDEN ONCE, CALISACAK OLAN BIR SUBMIT FONKSIYONU SAGLAYARAK YAPABILIRIZ
       YANI BU SAYEDE CLIENT-SIDE VALIDATIAN VEYA HER NEISE KULLANABLIIRZ
       VE RESULTA ERISECEK BIR CALLBACK DE KULLANABILRIZ
       use:enhance={addTodo}
 -->
 <form action="?/addTodo"  method="POST" use:enhance={addTodo}>
 
     <input type="text" name="todo">
     <!-- ISTE SVELTTE HTML ICERIINDE HARIKA IF KULLANIMI ILE YAIPLAN POSTREQUEST SONUCUNA GORE EKRANA FEEDBACK MESAJI BASABILMEK  -->
     
     {#if form?.missing}
         <p class="error">This field is required!</p>
     {/if}
 
     <button type="submit">Add Todo</button>
 
     <!--Biz action attribute unu spesifiklestirebiliyoruz.ve mevcut d efault olarak gelen action i bu sekilde form un action ini butona gore override edebiliyoruz, spesifiklestirebiliyoruz..HARIKA BIR OZELLIK BU BUTTON DAN GIDINCE AYNI YERDE ORNEGIN CLEARTODOS POST REQUEST INI GONDERIRKEN AYNI FORMA ICINDE FORM UN ACTION I YANI FORM UN NORMAL ADD TODO SUBMIT INE TIKLANINCA ISE O ZAMAN +PAGE.SERVER DA GIDIP ADDTODO POSTUNA GIDIYOR  -->
     <button 
     formaction="?/clearTodos"
     class="secondary" type="submit">Clear</button>
 </form>
 

 <!--Success durumunda da bu sekilde ekrana success:True mesaji basabiliriz!!!-->
 {#if form?.success}
     <p class="success">Added Todo!</p>
 {/if}
 
 
 <style>
     .delete {
         
         margin-top:.3rem;
         border:none;
         background-color:blueviolet;
         font-weight: bold;
         font-size: 1.2rem;
         color: tomato;
         padding:.4rem 0rem;
         padding-left: 1.5rem;
         padding-right: 1.5rem;
         border-radius: .2rem;
     }
     .error {
         color:tomato;
     }
 
     .success {
         color:green;
         background-color: aqua;
         width:10rem;
     }
    
 </style>
<!--
    JAVASCRIPT I SAYFADA KULLANABILIRSEK O ZAMAN USEREXPERIENCE I YUKSELTEBILIRIZ-ENHANCE EDEBILIRIZ--
    SINGLE PAGE APPLICATION EXPERIENCE INI PRESERVER EDEBILIRZ
    NE GIBI CLIENT-SIDE VALIDATION VEYA DIGER USER-EXPERIENCE LERI MESELA
    SIMDI BURDA SUNU DUSUNELIM BIZIM SITEMIZDE JAVASCRIPT IN HERHANGI BIR DURUMDA CALISMADIGI DURUMLAR OLDUGUNDA, UYGULAMAMIZ HARIKA DIRENCLI HER SARTTA CALISAN BIR UYGULAMA OLACAKTIR ISTE BU ZATEN SVELTEKIT I AYRICALIKLI KILAN BIR DURUMDUR
    ILK TODOS ORNEGIN DE HERSEYI MANUEL YAPMISTIK AMA SVELTEKIT ILE BUNLARI BIZIM YERIMIZIE HANDLE EDIYOR VE BIZ BURDA SVELTE-ACTIONS DAN FAYDLANIYORUZ NORMAL ACTION LAR DEGIL Y OKSA...BUNU IYI ANLAYALIM
-->