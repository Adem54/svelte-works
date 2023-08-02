//Biz writeable store olsuturacagiz cunku hem update hem de read etemek istiyoruz

import { Writable, writable } from "svelte/store";

let defaultCount = 10;
export const count: Writable<number> = writable(defaultCount);

//Onemli birsey olustrudgumz store u export etmemiz gerekiyor ki diger componentler de kullanabilsin!!
//tsconfig.json da asagidaki typescript in preserver  yapmaya izin vermiyor default olarak, typescript in hata vermesini onlemek icin de asagidaki ayari yapariz
// {
//   "compilerOptions": {
// 	"preserveValueImports": false
//  }
// }