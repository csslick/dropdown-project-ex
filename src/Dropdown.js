const Dropdown = (element, title, options) => {
  const dropdownHtml = `
    <div class="dropdown relative flex w-[250px] flex-col bg-amber-200">
      <!-- 드롭다운을 열고 닫는 버튼 -->
      <button class="dropdown-toggle flex items-center justify-between rounded-lg bg-linear-to-r from-[#B13EFB] to-[#FF188C] px-4 py-[10px] font-bold text-white hover:cursor-pointer hover:opacity-80" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
        ${title}
        <svg class='transition' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" /></svg>
      </button>
      <!-- menu 목록 -->
      <ul class="dropdown-menu hidden absolute top-[54px] w-full rounded-lg bg-white shadow-lg">
        <li><a class="dropdown-item flex px-4 py-[10px] hover:bg-[#F1F2F5]" href="#">${options.menu1}</a></li>
        <li><a class="dropdown-item flex px-4 py-[10px] hover:bg-[#F1F2F5]" href="#">${options.menu2}</a></li>
        <li><a class="dropdown-item flex px-4 py-[10px] hover:bg-[#F1F2F5]" href="#">${options.menu3}</a></li>
      </ul>
    </div>
  `
  element.insertAdjacentHTML('beforeend', dropdownHtml)

  // 방금 추가된 드롭다운 요소를 찾기
  const newDropdown = element.querySelector('.dropdown:last-child');

  // 토글 버튼-새로 추가된 드롭다운 내부에서 버튼을 찾음
  const toggleBtn = newDropdown.querySelector('.dropdown-toggle');
  // 드롭다운 메뉴
  const dropdownMenu = newDropdown.querySelector('.dropdown-menu');
  // 토글 버튼 이벤트
  toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');

    // 토글 버튼 svg 아이콘을 180도 회전시키거나 원래대로 되돌림
    toggleBtn.querySelector('svg').classList.toggle('rotate-180');
  });

}

export default Dropdown