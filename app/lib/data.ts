import { Philosopher, Question } from "./utils";

export const philosophers: Philosopher[] = [
  {
    id: 1,
    name: "소크라테스",
    period: "고대 그리스",
    description:
      '"너 자신을 알라"는 말로 유명하며, 끊임없는 질문과 대화를 통해 진리를 탐구하는 방식을 중요하게 생각했습니다. 자기 성찰과 비판적 사고를 강조했습니다.',
    quote: "너 자신을 알라.",
    scores: {
      rationalism_empiricism: -3,
      individualism_collectivism: -2,
      idealism_realism: -4,
      conservatism_progressivism: 3,
      materialism_spiritualism: 4,
    },
  },
  {
    id: 2,
    name: "플라톤",
    period: "고대 그리스",
    description:
      "소크라테스의 제자로, 현실 너머의 완벽한 '이데아' 세계가 존재한다고 믿었습니다. 이상적인 국가와 정의로운 삶에 대해 깊이 탐구한 이상주의 철학자입니다.",
    quote: "정의란 각자가 자기 일을 잘 하는 것이다.",
    scores: {
      rationalism_empiricism: -5,
      individualism_collectivism: 3,
      idealism_realism: -5,
      conservatism_progressivism: 0,
      materialism_spiritualism: 5,
    },
  },
  {
    id: 3,
    name: "아리스토텔레스",
    period: "고대 그리스",
    description:
      "플라톤의 제자이자 알렉산더 대왕의 스승이었습니다. 현실 세계의 관찰과 경험을 중시했으며, 논리학, 윤리학, 정치학 등 다방면에 걸쳐 체계적인 학문을 구축했습니다.",
    quote: "인간은 사회적 동물이다.",
    scores: {
      rationalism_empiricism: 3,
      individualism_collectivism: 4,
      idealism_realism: 4,
      conservatism_progressivism: -2,
      materialism_spiritualism: -3,
    },
  },
  {
    id: 4,
    name: "이마누엘 칸트",
    period: "근대 독일",
    description:
      "도덕적 의무와 이성을 중시한 철학자입니다. '정언명령'이라는 개념을 통해, 어떤 상황에서든 보편적으로 적용될 수 있는 도덕 법칙을 따라야 한다고 주장했습니다.",
    quote:
      "네 의지의 준칙이 언제나 동시에 보편적 입법의 원리가 될 수 있도록 행위하라.",
    scores: {
      rationalism_empiricism: -4,
      individualism_collectivism: 1,
      idealism_realism: -3,
      conservatism_progressivism: -3,
      materialism_spiritualism: 4,
    },
  },
  {
    id: 5,
    name: "프리드리히 니체",
    period: "근대 독일",
    description:
      "'신은 죽었다'고 선언하며 기존의 도덕과 가치관에 도전했습니다. 위버멘시(초인)가 되어 스스로의 가치를 창조하는 삶을 강조한 독창적인 철학자입니다.",
    quote: "나를 죽이지 못하는 것은 나를 더 강하게 만들 뿐이다.",
    scores: {
      rationalism_empiricism: 2,
      individualism_collectivism: -5,
      idealism_realism: 5,
      conservatism_progressivism: 5,
      materialism_spiritualism: -1,
    },
  },
  {
    id: 6,
    name: "공자",
    period: "고대 중국",
    description:
      "인(仁)과 예(禮)를 중심으로 한 유교 사상을 창시했습니다. 개인의 수양과 사회적 관계의 조화를 통해 이상적인 사회를 만들 수 있다고 믿었습니다.",
    quote: "자기가 원하지 않는 바를 남에게 행하지 말라.",
    scores: {
      rationalism_empiricism: 1,
      individualism_collectivism: 5,
      idealism_realism: 3,
      conservatism_progressivism: -5,
      materialism_spiritualism: 2,
    },
  },
  {
    id: 7,
    name: "노자",
    period: "고대 중국",
    description:
      "도교의 창시자로, '도(道)'와 '무위자연(無爲自然)' 사상을 통해 인위적인 것을 버리고 자연의 순리를 따르는 삶을 강조했습니다.",
    quote: "가장 훌륭한 선은 물과 같다.",
    scores: {
      rationalism_empiricism: 5,
      individualism_collectivism: 2,
      idealism_realism: -2,
      conservatism_progressivism: 1,
      materialism_spiritualism: 5,
    },
  },
  {
    id: 8,
    name: "장자",
    period: "고대 중국",
    description:
      "노자의 사상을 계승 발전시킨 인물로, 자유로운 정신과 상대주의적 세계관을 강조했습니다. '호접지몽(胡蝶之夢)' 이야기로 유명합니다.",
    quote: "만물은 모두 하나다.",
    scores: {
      rationalism_empiricism: 4,
      individualism_collectivism: -4,
      idealism_realism: -1,
      conservatism_progressivism: 4,
      materialism_spiritualism: 3,
    },
  },
];

export const questions: Question[] = [
  {
    id: 1,
    text: "친구가 당신에게 듣기 불편한 진실을 말해주었을 때, 당신의 첫 반응은?",
    answers: [
      {
        text: "솔직하게 말해줘서 고마워. 비록 듣기 힘들지만, 진실을 아는 것이 중요해.",
        effects: {
          idealism_realism: -1,
          individualism_collectivism: -1,
        },
      },
      {
        text: "왜 그런 식으로 말해야 했어? 좀 더 부드럽게 표현할 수도 있었잖아.",
        effects: {
          idealism_realism: 1,
          individualism_collectivism: 1,
        },
      },
    ],
  },
  {
    id: 2,
    text: "중요한 결정을 내릴 때, 당신은 주로 무엇에 의존하나요?",
    answers: [
      {
        text: "사실과 데이터를 바탕으로 한 논리적 분석.",
        effects: {
          rationalism_empiricism: -1,
        },
      },
      {
        text: "나의 직감과 과거의 경험.",
        effects: {
          rationalism_empiricism: 1,
        },
      },
    ],
  },
  {
    id: 3,
    text: "더 나은 사회를 위해 무엇이 더 중요하다고 생각하시나요?",
    answers: [
      {
        text: "개인의 자유와 권리를 최대한 보장하는 것.",
        effects: {
          conservatism_progressivism: 1,
          individualism_collectivism: -1,
        },
      },
      {
        text: "안정적인 사회 질서와 공동체의 조화를 유지하는 것.",
        effects: {
          conservatism_progressivism: -1,
          individualism_collectivism: 1,
        },
      },
    ],
  },
  {
    id: 4,
    text: "당신에게 '성공'이란 무엇에 더 가깝습니까?",
    answers: [
      {
        text: "사회적으로 높은 지위와 부를 얻는 것.",
        effects: {
          materialism_spiritualism: -1,
          idealism_realism: 1,
        },
      },
      {
        text: "내면의 평화와 만족감을 얻고 스스로의 가치를 실현하는 것.",
        effects: {
          materialism_spiritualism: 1,
          idealism_realism: -1,
        },
      },
    ],
  },
  {
    id: 5,
    text: "엄격한 규칙과 도덕적 의무를 따르는 것이 혼란스러운 세상에서 올바른 길을 찾는 방법이라고 생각하시나요?",
    answers: [
      {
        text: "그렇다. 보편적인 원칙은 모두에게 적용되어야 한다.",
        effects: {
          rationalism_empiricism: -1,
          conservatism_progressivism: -1,
        },
      },
      {
        text: "아니다. 상황과 개인의 신념에 따라 유연하게 판단해야 한다.",
        effects: {
          rationalism_empiricism: 1,
          conservatism_progressivism: 1,
        },
      },
    ],
  },
  {
    id: 6,
    text: "사회적 통념이나 기존의 가치에 얽매이지 않고, 나만의 길을 개척하는 삶을 추구하시나요?",
    answers: [
      {
        text: "네, 적극적으로 나만의 가치를 만들고 싶습니다.",
        effects: {
          individualism_collectivism: -2,
          conservatism_progressivism: 2,
        },
      },
      {
        text: "아니요, 기존의 지혜와 질서 속에서 안정을 찾는 것이 더 좋습니다.",
        effects: {
          individualism_collectivism: 2,
          conservatism_progressivism: -2,
        },
      },
    ],
  },
  {
    id: 7,
    text: "개인의 발전도 중요하지만, 결국 사람은 가족과 사회 속에서 조화를 이루며 살아갈 때 가장 행복하다고 생각하시나요?",
    answers: [
      {
        text: "매우 그렇다. 공동체와의 관계가 무엇보다 중요하다.",
        effects: {
          individualism_collectivism: 2,
        },
      },
      {
        text: "아니다. 개인의 독립성과 자아실현이 더 중요하다.",
        effects: {
          individualism_collectivism: -2,
        },
      },
    ],
  },
  {
    id: 8,
    text: "복잡한 문제에 부딪혔을 때, 억지로 해결하려 하기보다 자연의 흐름에 맡기는 것이 더 나은 결과를 가져온다고 믿으시나요?",
    answers: [
      {
        text: "네, 순리에 맡기는 것이 현명할 때가 많습니다.",
        effects: {
          rationalism_empiricism: 2,
          materialism_spiritualism: 1,
        },
      },
      {
        text: "아니요, 적극적으로 개입하여 문제를 해결해야 합니다.",
        effects: {
          rationalism_empiricism: -2,
          materialism_spiritualism: -1,
        },
      },
    ],
  },
  {
    id: 9,
    text: "세상에 절대적인 진리란 없으며, 모든 것은 관점에 따라 달라질 수 있다고 생각하시나요?",
    answers: [
      {
        text: "네, 모든 것은 상대적이라고 생각합니다.",
        effects: {
          conservatism_progressivism: 1,
          idealism_realism: 1,
        },
      },
      {
        text: "아니요, 변하지 않는 보편적인 진리가 존재한다고 믿습니다.",
        effects: {
          conservatism_progressivism: -1,
          idealism_realism: -1,
        },
      },
    ],
  },
];
