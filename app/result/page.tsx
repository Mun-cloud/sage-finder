import { philosophers } from "@/app/lib/data";
import { Philosopher, Score } from "@/app/lib/utils";
import Link from "next/link";

function calculateDistance(userScore: Score, philosopherScore: Score): number {
  const keys: (keyof Score)[] = [
    "rationalism_empiricism",
    "individualism_collectivism",
    "idealism_realism",
    "conservatism_progressivism",
    "materialism_spiritualism",
  ];

  const distance = Math.sqrt(
    keys.reduce((sum, key) => {
      const diff = userScore[key] - philosopherScore[key];
      return sum + diff * diff;
    }, 0)
  );

  return distance;
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const userScore: Score = {
    rationalism_empiricism: Number(params.se || 0),
    individualism_collectivism: Number(params.ic || 0),
    idealism_realism: Number(params.ir || 0),
    conservatism_progressivism: Number(params.cp || 0),
    materialism_spiritualism: Number(params.ms || 0),
  };

  const resultFn = () => {
    let bestMatch: Philosopher | null = null;
    let minDistance = Infinity;

    philosophers.forEach((philosopher) => {
      const distance = calculateDistance(userScore, philosopher.scores);
      if (distance < minDistance) {
        minDistance = distance;
        bestMatch = philosopher;
      }
    });

    const maxPossibleDistance = 25;
    const percentage = Math.max(
      0,
      Math.round(100 * (1 - minDistance / maxPossibleDistance))
    );

    return { matchedPhilosopher: bestMatch, similarityPercentage: percentage };
  };

  const result: {
    matchedPhilosopher: Philosopher | null;
    similarityPercentage: number;
  } = resultFn();

  if (!result.matchedPhilosopher) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <p>결과를 찾을 수 없습니다. 다시 시도해주세요.</p>
        <Link
          href="/"
          className="mt-4 bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-400"
        >
          다시하기
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
      <main className="text-center bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto w-full">
        <p className="text-lg text-gray-400 mb-2">당신의 철학자는...</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-yellow-400 font-serif">
          {result.matchedPhilosopher.name}
        </h1>

        <div className="w-24 h-24 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center ring-4 ring-yellow-400/50">
          {/* Placeholder for portrait */}
          <span className="text-4xl">🧐</span>
        </div>

        <p className="text-xl sm:text-2xl font-light mb-6 italic text-gray-300">
          {`"${result.matchedPhilosopher.quote}"`}
        </p>

        <div className="text-left bg-gray-900/70 p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-3 text-yellow-300">상세 분석</h3>
          <p className="text-gray-300 leading-relaxed">
            {result.matchedPhilosopher.description}
          </p>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-lg">
              유사도:{" "}
              <span className="font-bold text-2xl text-yellow-400">
                {result.similarityPercentage}%
              </span>
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors text-lg"
        >
          테스트 다시하기
        </Link>
      </main>
    </div>
  );
}
