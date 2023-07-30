import { mysqlconnFn } from "$lib/db/mysql";
//$ TANIMLAMAYI DA OGRENELIM!!!!!!

export const GET = async ({request, url})=>{

	let mysqlconn = await mysqlconnFn();
	//console.log("mysqlconn: ",mysqlconn)

	let results = await mysqlconn.query("SELECT * FROM customers;");

	console.log("MYDATAAAAAA-&&&&: ",results);
	
	return new Response(JSON.stringify({message:"MY-Successfull-message", data:results[0]}),{status:200})
}


