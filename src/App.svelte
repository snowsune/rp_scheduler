<script>
  let count = $state(0);
  let message = $state('Hello from Svelte!');
  
  function handleClick() {
    count += 1;
    message = `Clicked ${count} times!`;
  }
</script>

<div class="svelte-app">
  <h1>RP Scheduler</h1>
  <p>Scheduler here!</p>
  
  <div class="features">
    <h2>Features Coming Soon</h2>
    <ul>
      <li>Schedule RP stuff!</li>
    </ul>
  </div>
  
  <div class="demo">
    <h2>Svelte Demo (Vixi dosn't know!)</h2>
    <p>{message}</p>
    <p>Count: {count}</p>
    <button onclick={handleClick}>Click me!</button>
  </div>
</div>

<style>
  .svelte-app {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .features {
    background: #e9ecef;
    padding: 1rem;
    border-radius: 8px;
    margin: 2rem 0;
  }
  
  .demo {
    background: #e3f2fd;
    padding: 1rem;
    border-radius: 8px;
    margin: 2rem 0;
    border: 2px solid #2196f3;
    text-align: center;
  }
  
  button {
    background: #2196f3;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background: #1976d2;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
  }
  
  li:last-child {
    border-bottom: none;
  }
</style>