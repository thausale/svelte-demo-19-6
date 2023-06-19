<script>
  let input = "";
  let cocktails = [];
  let errorMessage = "";
  let x = 1;
  let y = 1;

  $: ratio = `${x}/${y}`;

  const searchCocktail = async () => {
    errorMessage = "";
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`
      );
      const data = await response.json();
      cocktails = data.drinks;
    } catch (error) {
      errorMessage = error;
    }
  };
</script>

<h1>Cocktails</h1>

<form on:submit|preventDefault={searchCocktail}>
  <input type="text" bind:value={input} />
  {errorMessage}
</form>

<input type="number" bind:value={x} />
<input type="number" bind:value={y} />

<div class="cocktailGrid">
  {#each cocktails as { strDrink, strDrinkThumb }}
    <div class="card" style="--ratio:{ratio}">
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
    aspect-ratio: var(--ratio);
  }

  .cocktailGrid .card img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>
