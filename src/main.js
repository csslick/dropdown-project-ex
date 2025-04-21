import './style.css'
import Dropdown from './Dropdown'

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 class="text-3xl font-bold mb-2">Vite App</h1>
    <nav class='flex'></nav>
  </div>
  
`

Dropdown(
  '#app nav', 
  'Dropdown menu', 
  ["c", "java", "python", "javascript"]
)

Dropdown(
  '#app nav', 
  'Dropdown menu', 
  ["html", "css", "react", "vue"]
)
