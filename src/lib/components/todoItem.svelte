<script>
  export let todo;
  export let index;
  export let removeTodo;
</script>

<div>
  <li>
    {todo.text}
  </li>
  <button on:click={() => removeTodo(index)}> ❌ </button>
</div>

<style>
  li {
    color: brown;
  }

  div {
    display: flex;
    gap: 10px;
  }
</style>
