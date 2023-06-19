<script>
  export let data;

  let cocktails = data.drinks;
</script>

<div class="cocktailGrid">
  {#each cocktails as { strDrink, strDrinkThumb }}
    <div class="card">
      <img src={strDrinkThumb} alt="" />
      <p>{strDrink}</p>
    </div>
  {/each}
</div>

<style>
  .cocktailGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
  }

  .cocktailGrid .card {
    aspect-ratio: 1/1;
  }

  .cocktailGrid .card img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>
