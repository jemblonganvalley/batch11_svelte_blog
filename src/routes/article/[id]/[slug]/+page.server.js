import { article_content } from "$lib"

export async function load({ params }){
    let {id, slug} = await params;

    let detail_article = await article_content.filter((e)=>{
        return e.id == id
    });

    return {
        detail_article : detail_article[0]
    }

}


