const quotes = [
  {
    quote: "때론 기회를 놓치는 것이 기회일 수 있다.",
    author: "영화<벤자민 버튼의 시간은 거꾸로 간다.>",
  },
  {
    quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을것처럼 살아라",
    author: "제임스틴",
  },
  {
    quote:
      "우리가 꿈꿀 수 있다면, 이룰수도 있습니다. 지금 내가 이룬 이 모든 것이 지난 날의 나의 꿈과 쥐 한마리로 시작했다는 사실을 잊지 마십시오.",
    author: "월트 디지니",
  },
  {
    quote:
      "만족할 줄 아는 사람은 진정한 부자이고, 탐욕스러운 사람은 진실로 가난한 사람이다.",
    author: "솔론",
  },
  {
    quote:
      "미래를 계획하는 일도 필요하지만 가장 중요한 것은 오늘을 후회없이 사는 겁니다.",
    author: "<비밀편지> 박근호",
  },
  {
    quote:
      "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
    author: "벤 스타인",
  },
  {
    quote: '"지금이 최악"이라고 말 할 힘이 있다면 아직은 최악이 아니다.',
    author: "윌리엄 셰익스피어",
  },
  {
    quote:
      "긴 인생은 충분히 좋지 않을 수도 있다. 그러나 좋은 인생은 충분히 길다.",
    author: "벤자민 프랭클린",
  },
  {
    quote:
      "인생은 자전거를 타는 것과 같다. 계속 페달을 밟는 한 넘어질 염려는 없다.",
    author: "클라우드 페퍼",
  },
  {
    quote:
      "당신을 가로막는 장애때문에 포기할 것인가, 반대로 그 장애를 넘어서기 위해 노력할 것인가는 당신이 선택할 문제이다.",
    author: "책<멈추지마 다시 꿈부터 써봐> 김수영",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
