import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { addTodo, removeTodo } from '$lib/db/server';


type Data = {
    success:boolean
    errors:Record<string, string>
}//return edilecek data ty pe i bu


export const POST: RequestHandler = async ({request}) => {
    
    //request objesinin icerisinden form dataasi geliyor... 
    const formData = await request.formData();
    const todo = String(formData.get("todo"));//Bu todo form daki input un name valuesine verilen isimdir....
            // <input type="text" name="todo">
    const data:Data = {
        success:false,
        errors:{}
    }

    if(!todo){
        data.errors.todo = 'required';
      //  return new Response(JSON.stringify(data),{status:400})
        return json(data, {status:400})
        //json - sveltkitten gelen bir librarydir

    }

    //DIKKAT EDELIM..BURDA VERITABANI ISLEMLERINI  YAPIYORUZ..AMA VERITABANI METODLARI VS BASKA YERDE TUTUYORUZ
    addTodo(todo);
    data.success = true;


//    return new Response(JSON.stringify({message:"Success"}), {status:200});
    return json(data);

};

export const DELETE:RequestHandler = async({request})=>{
    const formData = await request.formData();
    const todoId = Number(formData.get("id")); //name="id" oldugu icin get("id") aliyor  <input type="hidden" name="id" value={todo.id}>
        //Number() casting yapariz cunku string olarak donecek
        
    removeTodo(todoId);
    return json({success:true})
}


//Burda ise, get-post server islemleri olacak, ama suna dikkat edelim...BURDA VERITABANI ISLEMLERI GERCEKLESIYOR!!!!