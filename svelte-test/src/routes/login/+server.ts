import type { RequestHandler } from './$types';
import fs from 'fs';

import { DB_HOST,DB_USER,DB_PORT,DB_PASSWORD } from '$env/static/private'



function readInfo(fileContent:any)
{
    // Split the file content into lines
let lines = fileContent.split('\n');
console.log("lines: ", lines);//Sayfa icerisindeki her bir satir bir string bir eleman olarak dizi icerisine atilmis olyor

// Create an empty object to store the parsed values
const databaseConfig:any = {};

let cleanedLines = lines.map((line:string) => line.replace('\r', ''));
console.log("cleanedLines: ", cleanedLines);


for (const line of cleanedLines) {
  if (line.includes('=')) {
    const [key, value] = line.split('=');
    databaseConfig[key] = value;
  }
}

console.log(databaseConfig);

// Now, you can access the values using the object properties
console.log(databaseConfig.database); // Output: 'ffd'
console.log(databaseConfig.host); // Output: 'localhost'
console.log(databaseConfig.user); // Output: 'admin'
console.log(databaseConfig.password); // Output: ''
console.log(databaseConfig.port); // Output: '3306'
}




export const GET: RequestHandler = async () => {


 

    const directoryPath = process.env.ffd_ini;
    console.log("directoryPath: ", directoryPath);
    
    try {
      const files = fs.readdirSync(directoryPath);
      console.log("files: ",files);
      console.log("files-length: ",files.length);
      let myPath = directoryPath+"/"+files[0];
      const fileContent = fs.readFileSync(myPath, 'utf-8');
        console.log("MFILEEEEContent  : ",fileContent);
        readInfo(fileContent);
     
    }catch (error) {
      console.error('Error reading files:', error);
    }
    

	
    return new Response(JSON.stringify({host:DB_HOST, user:DB_USER, port:DB_PORT, password:DB_PASSWORD}));
};

//BESTPRACTISE BIZ DATALARI BU SEKILDE TUABILIYROUZ!!!