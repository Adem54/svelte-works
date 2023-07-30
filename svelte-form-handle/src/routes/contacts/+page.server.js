
let contacts = [
	{
		id:1,
		name:"Adem Erbas",
		email:"adem5434e@gmail.com",
		company:"Netsense",
		job:"Systemutvikler"
	}
];


export const load = ()=>
{
	return {//Burda return edilen data .svelte dosyasinda export let data; y azinca direk zaten data degiskenine atanmis ooluyor... 
		contacts
	}
}

//Bu contacts data sini biz bzim database imiz gibi dusnelim
//Yani normalde senaryolarin cogunda biz, load icerisinde data fetch edecegiz api den endpointten datayi fetch edip o datayi dondurecegiz ve return edecegiz...