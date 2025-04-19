import './style.css'
import Dropdown from './Dropdown'

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 class="text-3xl font-bold mb-2">Vite App</h1>
  </div>
  
`

Dropdown(
  document.querySelector('#app > div'), 
  'Dropdown menu', 
  {
    menu1: 'C',
    menu2: 'Java',
    menu3: 'Python'
  }
)
