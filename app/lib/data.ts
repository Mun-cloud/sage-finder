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
];
