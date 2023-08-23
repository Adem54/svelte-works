import type { LayoutServerLoad } from "./$types";
import { getPosts } from "$lib/DB";

//Burda biz server da calisacak olan DB dosyasini kullanmayi simule ettik 
//Normalde biz simdilik cok ugrasmamak icin, DB de fetch yaparak data cektik ama 
//bizim ismini DB vermekte ki amacimz orda ya dogrudan mysql-postgresql gibi bir database baglanarak 
//datayi direk veritabanindan cekme mantiginda islem yapmak ya da ORM prisma, entityframework gibi 
//ORM ler araciligi ile datayi cekebilkmekti ama burda sunu anlyalim, bu tarz veritabani ile baglanarak 
//direk veritabanindan vericekme, veya orm-aracini kullanma islemleri bunlar server da yapilan islemlerdir
//Iste +layout.svelte.ts isminde dosya kullanarak biz client-route umuz +page.svelte in  yaninda 
//ve routemuza aktarilacak datayi load ettgimz, sayfa da server da yapilabilecek islemleri yapabilme
//kapatsitesine sahip olmus olyoruz....BU COOK ONEMLI!!!
export const load: LayoutServerLoad = async (event) => 
{
	let { fetch } = event;
	//hatirlayacak olursak server da relative path

	const postList = await getPosts();
	return {
		postList
	}
};