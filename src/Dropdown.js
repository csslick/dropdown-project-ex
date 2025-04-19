const Dropdown = () => {
  const dropdownHtml = `
    <div class="dropdown relative flex w-[250px] flex-col bg-amber-200">
      <!-- 드롭다운을 열고 닫는 버튼 -->
      <button class="dropdown-toggle flex justify-between rounded-lg bg-linear-to-r from-[#B13EFB] to-[#FF188C] px-4 py-[10px] font-bold text-white hover:cursor-pointer hover:opacity-80" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
        메뉴 선택
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" /></svg>
      </button>
      <!-- menu 목록 -->
      <ul class="dropdown-menu absolute top-[54px] w-full rounded-lg bg-white shadow-lg">
        <li><a class="dropdown-item flex px-4 py-[10px] hover:bg-[#F1F2F5]" href="#">HTML</a></li>
        <li><a class="dropdown-item flex px-4 py-[10px] hover:bg-[#F1F2F5]" href="#">CSS</a></li>
        <li><a class="dropdown-item flex px-4 py-[10px] hover:bg-[#F1F2F5]" href="#">JavaScript</a></li>
      </ul>
    </div>
  `
}

export default Dropdown