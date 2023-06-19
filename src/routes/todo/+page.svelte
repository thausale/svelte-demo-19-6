<script>
  // Imports here
  import TodoItem from "$lib/components/todoItem.svelte";

  let todos = [
    { text: "tv kijken", checked: false },
    { text: "gras afrijden", checked: false },
    { text: "haag scheren", checked: false },
  ];

  let input = "";

  function submitHandler(e) {
    const todo = { text: input, checked: false };
    todos.push(todo);
    todos = todos;
  }

  function removeTodo(index) {
    todos.splice(index, 1);
    todos = todos;
  }

  // $: console.log(input);
</script>

<h1 class="title">Todo app</h1>

<form on:submit|preventDefault={submitHandler}>
  <input type="text" bind:value={input} />
  <button type="submit">submit</button>
</form>

{#if !todos.length}
  <h2>No todos</h2>
{/if}

<ul>
  {#each todos as todo, index}
    <TodoItem {todo} {index} {removeTodo} />
  {/each}
</ul>

<style>
  h1 {
    background-color: aquamarine;
  }
</style>
