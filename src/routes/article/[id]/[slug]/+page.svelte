<script>
  export let data;
  let { detail_article } = data;
</script>

<svelte:head>
  <title>
    {detail_article.title}
  </title>
</svelte:head>

<section class="w-full max-w-[800px] mx-auto p-6 flex flex-col gap-4">
  <h1 class="text-4xl font-light text-black capitalize">{detail_article.title}</h1>
  <img src={detail_article.banner} alt="" class="w-full h-80 object-cover" />
  <p class="font-light text-lg">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores totam
    deserunt eos repellat voluptate distinctio dolorem accusantium ducimus
    facilis eum cumque beatae, doloribus consequuntur illum sint dolores
    voluptatum, voluptatibus quibusdam!
  </p>

  <p class="font-light text-lg">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores totam
    deserunt eos repellat voluptate distinctio dolorem accusantium ducimus
    facilis eum cumque beatae, doloribus consequuntur illum sint dolores
    voluptatum, voluptatibus quibusdam!
  </p>
</section>
