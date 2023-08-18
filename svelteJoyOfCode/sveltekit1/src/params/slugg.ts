import type { ParamMatcher } from "@sveltejs/kit";

export const match:ParamMatcher = (param)=>{
	// A slug is typically a string containing only lowercase letters, numbers, and hyphens
	const slugRegex = /^[a-z0-9-]+$/;

	//const numberSlugRegex = /^\d+$/; bu da sadece number donmesini istersek

	return typeof param === 'string' && slugRegex.test(param);
}
//Boolean olarak return etmemiz gerekiyor
//Chat gpt ye gidip: Can you write a 'match' function in Javascript that just checks if the 'param' is a slug?

//COK DIKKAT EDELIM SIMDI, BURANIN UYGULANABILMESI ICIN, BIZIM posts/[slug] a gidip  posts/[slug=slugg] diyerek ten 
//matcher i  y azdigimz sayfa ismine esitlememiz gerekiyor