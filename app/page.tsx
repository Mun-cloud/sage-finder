import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <main className="text-center">
        <h1 className="text-5xl font-bold mb-4 font-serif">
          당신의 철학자는 누구일까?
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          간단한 질문에 답하고 당신의 내면과 가장 닮은 철학자를 찾아보세요.
        </p>
        <Link
          href="/question/1"
          className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors text-lg"
        >
          시작하기
        </Link>
      </main>

      <footer className="absolute bottom-8 text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} 나의 철학자 찾기. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
