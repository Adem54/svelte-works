<h1>Forms</h1>

<form action="/login" method="GET">
	<input type="text" name="user">
	<input type="password" name="password">
	<button type="submit">Login</button>
</form>
<!--
	1- bir form icindeki buton type i default olarak submit tir, ama form disindaki butonlarin type i default olarak button dur
	2-Eger action ve method yerine hicbirsey kullanilmaz ise, o zaman default olarak, button a tiklaninda kendi sayfasina gonderecektir, 2. side default method  ise GET METHODDUR
	GET-METHODU
	server a request gonderiyor, form data sini url- in sonuna eklyerek server a request gonderir ve biz bu url i adres cubugunda goruruz 
	Bunlara ayni zamanda query de diyoruz
	Kullanici input alanlarina test ve 123 girdiginde , name attribute u gonderilen degerlerin key i olarak gonderilyor ondan dolayi name buttonlari hayat i onem tasiyor server tarafindan gelen datalari biz name attribute leri uzerinden taniyoruz
	http://localhost:5173/login?user=test&password=123
	Ama bu insecure, guvensizdir,
	Ayrica buyuk boyutlu data gondermek icin GEt methodu kullanisli degildir, body icerisinde data gonderemiyoruz,  
	Get methodu sayfa gecislerinin yonetmek acisinda, yani biraz daha client-side rendering i yonetmek acisindan faydalidir aslinda ama tabi ki get methodu ile de public olan, bazi request islemlerimizi de yapabilyoruz 
	Post methodu ise , request body de ne gonderilirse onlari, return ediyor ki bu form da post emtodunda, bu iki input datamiz, name leri key olacak sekilde body icerisine eklenerek gonderiliyor...GET-ILE POST UN FARKINI COK IYI ANLAMALIYIZ!!
	Eger test amacli form a birseyler yazip submit edersek ve, sayfa uzeirnden ispect yapip network menusune gidersek orda, yapilan post istegi uzerine tiklayip payload alanina gidince , post methodun data larimizi name key leri ile body icerisine atip da gonderdigini gorebiliriz
	user: MYTEST
	password: 321

 -->