<script lang="ts">
   import { invalidateAll } from '$app/navigation';
    import type { PageData } from './$types';
    
    export let data: PageData;//Buraya +page.server.ts den hangi data gelmis ise data ya o return edilen data atanacaktir direk olarak

    type Data = 
    {
        success:boolean
        errors:Record<string, string>
    }

    //Simdi ana mantk ayni react taki formlardaki gibi,
    //form lari tutacagimiz bir degisken atayalim , ana data

    let form:Data;
    //form degiskeni addTodo, nun responsu ataniyor ve gelen respojnse uzerinden kulanicya backedn den gelen success-error durumunu yansitmak icin kullaniyor, backend validatioan vs gibi..backendden gelen response verilior ama addTodo gibi acionlarin response u icin yoksa load-yani tum todo lari gonderen response yukardaki data degiskenine ataniyor otomatik olarak!!!!!

    const removeTodo = async (event:Event)=>
    {
        console.log("removeTodooo")
        const formElmnt = event.target as HTMLFormElement;
        const data = new FormData(formElmnt);

        console.log("formElmnt:", formElmnt);
        console.log("formData:", data);
        const response = await fetch(formElmnt.action, {
            //DELETE ISLEMI DE POST REQUESTTIR ve FORM ICERISINDE BIZ EGER ORNEGIN FORM ISLEMINDE YAPTIGIMIZ VE FORM-ATTRIBUTUNDE YAZDIGMZ SUBMIT ISLEMLERINDE... BIZ PARAMETREEN GELEN EVENT UZERINDN EVEN.TARGET ALDIGMIZDA VE BU EVENT.TARGET DIREK FORM DEMEKTIR VE BU FORM ILE BIZ... DIKKAT EDELIM BODY YE DATAYI GONDERIRKEN.. const data = new FormData(formElmnt); new FormData() parametresine form- elemntinin referansi olan event.target i atadgimz degiskeni atama yapiyoruz... ve bu sekilde de dikkat edlim aslinda formu bir obje ve form icerisindeki input larin name lerini de o objelerin birer poropertysi olarak gondermis oluyoruz ve 
            /*
             const formData = await request.formData();
                const todoId = Number(formData.get("id"));
                Bu sekilde bu formdan gondeirlen data ya server imizdaki endpoint icinde erisilebilmis oluyor bu sayede
            */
            method:"DELETE",//method form icinde POST VERILSE DE SORUN OLMUYOR HTTP DE O DA YINE ASLINDA BIR POST METHODU GIBI BU DELETE E GELIYOR
            body:data
        })

        await invalidateAll();
        //Data silindigi zaman sayfayi bizim icin guncellemeye yarar cooook onemlidir.. Bu svelte icerisinden geliyor

    }

    //BESTPRACTISE...ADD-DELETE FEEDBACK ISLEMLERI!!!!
    //SIMDI BIZ DIKKAT EDELIM...POST-DELETE FETCH REQUEST LERINDE ENDPOINTTEN SUCCESS-ERROR MESAJLARI ALIYORUZ VE BIZ BUNLARA GORE KULANICIYA BIR FEEDBACK VERMEK ISTERSEK ONU NASIL VERECEGIZ ONA BAKALIM!!!!
        //addTodo ICERISINDE!!!    form = responseData;
        //DIKKKAT EDELIM..BIZ BURDA NEDEN ADD EKLEME ISLEMINDEKI REQUEST TE NEDEN RESPONSEDATA YI FORMA ATAMA YAPIYORUZ...CUNKU BIZ BUNU DATA NIN GELME SONUCUNA GORE BIR FFEEDBACK MESAJI VERMEK ISTIYORUZ!!!!!!
            /*
            <input type="text" name="todo">
    {#if form?.errors?.todo}
        <p class="error">This field is required!</p>
    {/if}

    form?.errors?.todo iste bu backendden gonderilen, validation, mesaji, yani backendde data gelmediginde gonderilen responsu front-ednde ekrana basmis oluyoruz!!!!HARIKAA BESTPRACTISE...
   ENDPOINT ICERISINDE...TODO DATASI GELMEDIGINDE DONDURULEN RESPOINSE ASAGIDAKI GIBI IDI...BIZ VALIDATION DA BACKENDDEN GELEN MESAJI DA BU SEKILDE BASABILMIS OLUYORUZ!!!
    data.errors.todo = 'required';
      //  return new Response(JSON.stringify(data),{status:400})
        return json(data, {status:400})
            
            */


    const addTodo = async (event:Event)=>
    {
           const formElmnt = event.target as HTMLFormElement; 
           const data = new FormData(formElmnt)
           //Bu FormData constructor objesi form elementlerindeki her bir field i altinda toplayarak, bu FormData sini server a get-veya post request lerde kolay bir sekilde gonderebilecegimz bir islemdir...
           console.dir(formElmnt);
           //formElemnt e gidip bakarsak onun icinde actikon oldugunu goruruz... ve o action in  su an kendi icinde bulundugu sayfayi verdigini gorebilirz, yani addItem icin hazirladigmz form attributundeki action ne ise onu veriyor    action : "http://localhost:5174/todos" YANI ANA DOMAIN den sonra /todos altindaki +server.ts e gidecek bu post-request iste bunun todos klasoru altindaki +server.ts e gitmesi olayini ayarlayan ise, svelte tir bizim sadece todos klasoru altina direk olarak +server.ts yazmamiz yeterli olacaktir...         
           console.log("formData:", data);
           //body de new FormData(formElmnt) 
           /*
                //request objesinin icerisinden form datasi geliyor... 
                const formData = await request.formData();
                const todo = String(formData.get("todo"));
                //Bu todo form daki input un name valuesine verilen isimdir....
                // <input type="text" name="todo">

           */
           const response = await fetch(formElmnt.action, 
           {
                method:"POST",
                body:data
           })

          //dikkat edelim, bu addTodo islemi yani form u send etmek tamamen ayri bir is, ve ayrica biz birde addTodo islemi de yapiyoruz...yani bildigmiz direk olarak fetch-request ile POST-REQEUST YAPARAK DATA GONDERIYRZ KI VERITABANIN KAYIT VEYA UPDATE ISLMI YAPSIN VE TEKRARA BIZE MATNIKLI BIR DATA DA DONDUREBILR!!!YANI FORM GONDERME TAMAMEN FORM ICINE GIRILEN DATA LARIN GONDERILMESI...VE FORM DAKI DATALAR NE ICIN GEREKLI ISE O ISLEM YAPILIR..AMA AYRICA BIZM ADDTODO BUTONMUZ UZERINDEN BIZ..YANINDAKI INPUTA GIRILEN DEGERI BIZ YINE BIR FONKSIYON UZERINDEN GONDERMEK ISTEMISTIK.....POST ISTEGI OLARAK 
          const responseData = await response.json();

          form = responseData;
        //DIKKKAT EDELIM..BIZ BURDA NEDEN ADD EKLEME ISLEMINDEKI REQUEST TE NEDEN RESPONSEDATA YI FORMA ATAMA YAPIYORUZ...CUNKU BIZ BUNU DATA NIN GELME SONUCUNA GORE BIR FFEEDBACK MESAJI VERMEK ISTIYORUZ!!!!!!

          formElmnt.reset();//Ekledikten sonra form inputu silinsin , ici temizlensin istiyoruz
          console.log("responseDATA: ", responseData);
          //{success:false, errors:{todo: "required"}}
          //fetcher.js?v=f665c63d:54     POST http://localhost:5174/todos 400 (Bad Request) CUNKU ICERIK GONDERILMEDEN ADD TODO BUTONUNA BASILDI!!!!
          //icerisine data ekleyerek yaparsak da o zaman da  //{success:true, errors:{}} geliyor
          
          //SUNU ANLAYALIM...ADDTODO BUTONUNA BASILINCA POST ISTEGI...DIKKAT EDELIM...BIZ ACTION="" BOS BIRAKIYORUZ AYNI SAYFAYA YONLENDIRMIS OLUYORUZ...VE NEREYE GIDIYOR BIZIM SU AN ICINDE BULUNDUGUMZ SAYFA HANGISI IDI
          //"http://localhost:5174/todos" BU SAYFA IDI ISTE BU SAYFANIN SERVER I NERDE ISE YANI ENDPOINT LERININ OLDUGU, API ENDPOINTLERININ OLDUGU SAYFAY GIDIYOR...HARIKA...ISTE BIZ BURDA FORM DA 2 SEKILDE DE YAPABILIYORUZ ISTER ACTION I BOS BIRAK DIREK KENDI TODOS KLASORU ALTINDA.. +SERVER.TS BURDA API-ENDPOINTLERINI HAZIRLA..YANI BURAYA REQUST GONDER...CUNKU BURASI AYNI ZAMANDA VERITABANI ILE BAGLANTISI OLAN  YERDIR..
          //ISTERSEK DE DIREK ACTION DA GIDECEGI SAYFAYI YAZARIZ..YANI /login yazarsak o zaten main-url nin sonuna login yazarak gider...ve orda da nasil bir muaemeleye girmesini istersek o muameleye girmesini saglayabiliriz!!!!!

          //Bir problemimiz var o da , biz data ekliyoruz ama biz sayfayi kendgimiz yeniledigmz zaman ancak, datalar geliyor..yoksa data lar , yani eklenen datalar gelmiyor...

          //HARIKA BESTPRACTISE...
          await invalidateAll();
          //Causes all load functions belonging to the currently active page to re-run. Returns a Promise that resolves when the page is subsequently updated.
    }
    /*

    new FormData(formElmnt) NEDIR?

    In the code snippet you provided, new FormData(formElmnt) creates a new instance of the FormData object using the formElmnt variable.
    The FormData object is a built-in JavaScript object that provides a way to easily construct a set of key/value pairs representing form data. It is commonly used to capture data from HTML forms.

    In this case, formElmnt is obtained from the event.target property, which represents the target element that triggered the event. In this context, it refers to the HTML form element that the event is associated with.

    By passing formElmnt to the FormData constructor, you are creating a new FormData instance that captures the form data from the HTML form element. This allows you to access and manipulate the form data before sending it to a server or performing any other operations.

    */
</script>

<pre>
    { JSON.stringify( data, null, 2 )}
</pre>
<!--
    Bu icindde bulundgumuz sayfayi biz calistirdfigmzda karsiimza bu gelecek..yani biz routes altindaki klasorler ve o klasorler altindaki + ile baslayan dosyalar ki eger o dosyalar +page ise sadece klasor ler uzerindn url ler belirleniyor
    http://localhost:5174/todos
-->

<ul>
    {#each data.todos as todo }
        <li>{todo.id}</li>
        <li>{todo.text}</li>
        <form action="" on:submit|preventDefault ={removeTodo} method="POST">

            <input type="hidden" name="id" value={todo.id}>
            <!--id nin gonderilme sekline iyi dikkat edelim.....HARIKA BESTPRACTISE...-->
            <button class="delete" type="submit">DelTodo-X</button>
        </form>
    {/each}
</ul>

<!--BURDA BIZ BU ISLEMI DE FORM DA Y APTIK AMA BU ISLEMIN BIZ, YINE KENDI SAYFASINA GITMESINI ISTIYRODUK CUNKU DIREK BURDA HANDLE EDECEKTIK ZATEN-->
<form action="" on:submit|preventDefault={addTodo} method="POST">

    <input type="text" name="todo">
    <!-- ISTE SVELTTE HTML ICERIINDE HARIKA IF KULLANIMI ILE YAIPLAN POSTREQUEST SONUCUNA GORE EKRANA FEEDBACK MESAJI BASABILMEK  -->
    {#if form?.errors?.todo}
        <p class="error">This field is required!</p>
    {/if}

    <button type="submit">Add Todo</button>

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
    SIMDI YUKARDA YAPTIKLARIMIZ HARIKA ISLER ANCAK BUNLARI BIZ JAVASCRIPT YARDIMI ILE YAPABILDIK!!!!
    AMA BU DEVELOPER EXPERINCE OLARAK COK DA HARIKA BIR ISLEM DEGIL ASLINDA NEDEN PEKI!!!HEMEN ONA BAKLAIM BU SADECE JAVASCRIPT ILE CALISIYOR, CUNKU BIZ IM FORMUN DEFAULT BEHAVIOUR INI MESELA PREVENT ETMEMIZ GEREKTI..SERVER IMZ HEMEN YAN SAYFAMIZDA OLMASINA RAGMEN, BURDA HERSEYI YINE KENDIMIZIN IMPELMENT ETMEMIZ GEREKTI ARTI...FETCH LERI YINE KULLANMAK ZORUNDAYIZ AYNI .SVELTTE SAYFASINDA VS GIBI BIRCOK EKSTRA ISLEM YAPMAMIZ GEREKIYORDU ASLINDA....  AMA

    ISTE BURDA DEVREYE SVELTEKIT FORM ACTIONS DEVREYE GIRIYOR VE TUM BU PROBLEMLERI BIZIM ICIN COZMUS OLUYOR!!!
    NORMALDE BIZ SERVER.TS ICINDE ENDPOINTLERIMIZI YAZIYORUZ GET-POST-DELTE-UPDATE VS AMA FORMACTIONS BU FIKIRI ALIYOR BIR ADIM OTEYE TASIYARAK, METHODLARI DEFINE 

    You can see delete, post and whatever else you want but form actions takes this idea a step further and you can define methods that map to an action inside a plus page or server TS file

    Biz +page.Server.ts iceriisnde, formumuzla eslesen action actions objeleri export edebiliriz

    ACTIONS ISLEMLERI ICIN BIZ TODO2 KALSORU ALTINA YAPIYORUZ ORDAN TAKIP EDELIM!!!

-->