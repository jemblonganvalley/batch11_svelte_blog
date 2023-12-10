<script>
  export let data;
  let { article_content } = data;
</script>

<svelte:head>
  <title>
    Web Atricle Saya
  </title>
</svelte:head>

<section class="w-full max-w-[1200px] mx-auto p-6">
  <h1>Home</h1>

  <div class="grid grid-cols-3 w-full gap-6">
  {#each article_content as ac (ac.id)}
    <a href={`/article/${ac.id}/${ac.slug}`}>
      <div class="card w-11/12 bg-base-100 shadow-xl">
        <figure class="h-36">
            <img src={ac.banner} alt={ac.title} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{ac.title}</h2>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Detail</button>
          </div>
        </div>
      </div>
    </a>
  {/each}
</div>

</section>
