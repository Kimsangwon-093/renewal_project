// - 아래의 프로그램을 만들어 주세요.
//     - `사과 게임` 위에 `장기` 삽입
//     - `어메이징브릭`에 베이지 배경색 추가
//     - 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

// 타겟노드 = querySelector('#apple');
const targetApple = document.querySelector('#apple');
// 새노드 = createElement(li); , textContent = '장기'
const newJanggi = document.createElement('li');
newJanggi.textContent = '장기';
// 부모노드 = querySelector('#ul');
const parentUl = document.querySelector('#ul');
// 새오운 요소 삽입 > 부모노드.insertBefor(새노드, 타겟노드);
parentUl.insertBefore(newJanggi, targetApple);

const amazingLi = document.querySelector('#ul li:last-child');
amazingLi.style.backgroundColor = 'beige';
changeLiColor();

// const newStar = document.createElement('li');
// newStar.textContent = '스타';
// parentUl.insertBefore(newStar, targetApple);
addLiChild('스타');
changeLiColor();
addLiChild('ㅅㅅㅅㅅ');
changeLiColor();
addLiChild('ㅅㅅㅅㅅ');
addLiChild('ㅅㅅㅅㅅ');
addLiChild('ㅅㅅㅅㅅ');
addLiChild('ㅅㅅㅅㅅ');
changeLiColor();

function changeLiColor() {
  const listLi = document.querySelectorAll('#ul li');
  listLi.forEach((node, idx) => {
    if(idx % 2 === 0) {
      node.style.color = 'blue';
    } else {
      node.style.color = 'red';
    }
  });
}

function addLiChild(content) {
  const newNode = document.createElement('li');
  newNode.textContent = content;
  parentUl.insertBefore(newNode, targetApple);
}

const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'https://www.admin.com/img/posts/laksfjakls.png'
};
addCard(result);
// 카드 구조 만들기
function addCard(item) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = item.title;
  newCardTitle.classList.add('card-title');

  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard);
}