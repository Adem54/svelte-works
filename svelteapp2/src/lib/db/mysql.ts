

import mysql from "mysql2/promise";

let mysqlconn:any = null;

export function mysqlconnFn() {
  if (!mysqlconn) {
    // used for development with MAMP
    // mysqlconn = mysql.createConnection({
    //   host: "127.0.0.1",
    //   user: "root",
    //   password: "",
    //   database: "statedata",
    // });
    mysqlconn = mysql.createConnection({
      //host: "162.241.218.208",
      host: "localhost",
      user: "root",
      password: "",
      database: "ffd",
    });
  }

  return mysqlconn;
}
//ONEMLI!!!!-In a production site, you would create a pool of database connections, using the functions createPool and getConnection rather than createConnection.
/*
try {
	$db = new PDO("mysql:host=localhost;dbname=ffd","root","");
	 echo "Successfull connection";
	
	$query= $db->query("SELECT * FROM CUSTOMERS");
	$query->execute();
	$data = $query->fetchAll(PDO::FETCH_ASSOC);
	var_dump($data); 
} catch (PDOException $e) {
	echo $e->getMessage();
}

*/