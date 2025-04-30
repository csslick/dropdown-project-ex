import './style.css'
// import Dropdown from './Dropdown'
import Accordion from './Accordion'

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center justify-center p-8">
    <h1 class="text-3xl font-bold mb-2">Accordion Menu</h1>
    <section class='accordion w-full max-w-[1200px]'></section>
  </div>
`

Accordion(
  '.accordion', 
  '주문을 완료했는데 주문을 취소하고 싶어요.', 
  ["'마이페이지' - '주문내역'에서 '취소' 버튼을 눌러주셔야 합니다. 취소 버튼이 활성화되어 있는 상태에서만 취소 가능하니, 신속하게 주문 취소 진행 부탁드립니다."]
)

Accordion(
  '.accordion', 
  '주문한 상품은 언제 출고되나요?', 
  ['당일 오후 13시 30분 이전 주문 시, 영업일 기준 주문 당일 출고되며 영업일 기준 1-3일 이내 배송될 예정입니다. 당일 오후 13시 30분 이후 주문 시, 영업일 기준 익일 출고될 예정입니다. (단, 프로모션 등으로 주문량이 증가하거나 명절 등 배송 특수기에는 당일 출고 불가할 수 있습니다.)']
)

Accordion(
  '.accordion', 
  '현금영수증 발급은 어떻게 하나요?', 
  ['현금영수증은 무통장 입금, 계좌이체시 가능합니다. 주문시 현금영수증 신청을 하지 못하셨을 경우, 주문 취소 후 재주문해주셔야 합니다.주문 취소는 결제완료 단계에서만 가능하며, 상품 준비, 배송 준비 단계에서는 주문취소 불가하니 이 점 참고 부탁드립니다. 투명한 온라인 거래를 위해 현금영수증 의무발행을 사용하고 있으며, 현금영수증을 신청하지 않으시더라도 국세청 발급 번호인 010-000-1234 로 자동 발급됩니다.']
)
