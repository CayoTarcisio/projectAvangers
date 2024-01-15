const members = [
  { name: 'Homem de Ferro', id: 'tony' },
  { name: 'Capitão América', id: 'capitao' },
  { name: 'O Incrível Hulk', id: 'hulk' },
  { name: 'Viúva Negra', id: 'viuva' },
  { name: 'Thor, Deus do Trovão', id: 'thor' },
  { name: 'Pantera Negra', id: 'pantera' },
]

let activeMember = 0;
const images = document.getElementById('images');
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const memberName = document.getElementById('member__name');

function changeStatusButton() {
  const prev = document.getElementById('button__prev');
  const isFirst = activeMember === 0;
  prev.disabled = isFirst

  const next = document.getElementById('button__next');
  const isLast = activeMember === members.length - 1;
  next.disabled = isLast;

}

function changeMember(memberId) {
  activeMember = memberId
  const member = members[activeMember];

  console.log(activeMember, member);

  images.style.transform = `translateY(${-100*activeMember}vh)`;
  memberName.classList = member.id;

  changeName(member.name);
  changeStatusButton();
}

function navigationMember(direction) {
  changeMember(activeMember + direction);
}

function changeMenu() {
  menu.classList.toggle('active');
  navigation.classList.toggle('active');
}

function setMember(memberId) {
  changeMember(memberId);
  changeMenu()
}