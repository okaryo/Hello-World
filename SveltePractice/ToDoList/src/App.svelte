<script>
  let todoItems = [];
  let newTodo = "";

  function addTodo() {
    newTodo = newTodo.trim();
    if (!newTodo) return;

    todoItems = [...todoItems, { text: newTodo, complete: false }];
    newTodo = "";
  }

  function toggleDone(index) {
    todoItems[index].complete = !todoItems[index].complete;
  }

  function removeTodo(index) {
    todoItems = todoItems.filter((_, i) => i !== index);
  }
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>

<form on:submit|preventDefault={addTodo}>
  <input type="text" bind:value={newTodo} />
  <button type="submit">Add Todo</button>
</form>
<ul>
  {#each todoItems as todo, index}
    <li>
      <input
        id={index}
        type="checkbox"
        bind:checked={todo.complete}
        on:click={() => toggleDone(index)}
      />
      <span class={todo.complete ? 'done' : ''}>{todo.text}</span>
      <button
        id={index}
        on:click|preventDefault={() => removeTodo(index)}
      >
        delete
      </button>
    </li>
  {/each}
</ul>
