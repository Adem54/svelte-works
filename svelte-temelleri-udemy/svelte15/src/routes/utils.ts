
export function imagePreview(file:any)//e.target.files[0] bunu gonderecegiz
{

	if(!file)return;//Burda hata durumunda reject i halletmis oluyoruz..
	
	const reader =  new FileReader();

	//Bunu geriye promise olarak dondurecek sekilde ayarlamak istiyoruz neden promise olarak donduruyoruz, cunku okuma isleminin ne kadar surecegni bilmiyoruz ondan dolayi da promise olarak donduruyoruz, okuma islemi de zaman aliyor cunku
	return new Promise((resolve:any, reject:any)=>{

		reader.addEventListener("load", resolve(reader.result))//resolve olarak donuyourz burda eger basarili olursa
			reader.readAsDataURL(file)	
	})
}