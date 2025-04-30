import './style.css'
import Dropdown from './Dropdown'

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 class="text-3xl font-bold mb-2">Dropdown Menu</h1>
    <nav class='flex'></nav>
  </div>
  
`

Dropdown(
  '#app nav', 
  'Dropdown menu', 
  ['C','Java','Python','JavaScript']
)

Dropdown(
  '#app nav', 
  'Dropdown menu', 
  ['menu1', 'menu2', 'menu3']
)
