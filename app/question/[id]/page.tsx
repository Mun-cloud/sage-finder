import { questions } from "@/app/lib/data";
import { Score } from "@/app/lib/utils";
import Link from "next/link";

export const runtime = "edge";

export default async function QuestionPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const questionId = parseInt(params.id as string, 10);
  const currentQuestion = questions.find((q) => q.id === questionId);

  // Get scores from URL or initialize to 0
  const currentScores: Score = {
    rationalism_empiricism: Number(params.se || 0),
    individualism_collectivism: Number(params.ic || 0),
    idealism_realism: Number(params.ir || 0),
    conservatism_progressivism: Number(params.cp || 0),
    materialism_spiritualism: Number(params.ms || 0),
  };

  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <p className="text-xl">결과를 분석중입니다...</p>
      </div>
    );
  }

  const handleAnswerClick = (answerEffects: Partial<Score>) => {
    const newScores: Score = { ...currentScores };
    for (const key in answerEffects) {
      const scoreKey = key as keyof Score;
      newScores[scoreKey] += answerEffects[scoreKey] ?? 0;
    }
    return newScores;
  };

  const progress = (questionId / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-8">
          <div
            className="bg-yellow-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h1 className="text-3xl font-bold mb-12 text-center leading-relaxed font-serif">
          {`Q${questionId}. ${currentQuestion.text}`}
        </h1>

        <div className="grid grid-cols-1 gap-4 w-full">
          {currentQuestion.answers.map((answer, index) => {
            const newScores = handleAnswerClick(answer.effects);
            const queryString = new URLSearchParams({
              se: newScores.rationalism_empiricism.toString(),
              ic: newScores.individualism_collectivism.toString(),
              ir: newScores.idealism_realism.toString(),
              cp: newScores.conservatism_progressivism.toString(),
              ms: newScores.materialism_spiritualism.toString(),
            }).toString();

            const nextQuestionId = questionId + 1;

            return (
              <Link
                key={index}
                href={`/question/${nextQuestionId}?${queryString}`}
                className="bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-700 transition-colors text-center text-lg"
              >
                {answer.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
