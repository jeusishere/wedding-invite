export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center">

        <p className="text-sm tracking-[6px] uppercase text-gray-500 mb-3">
          Wedding Invitation
        </p>

        <h1 className="text-5xl font-serif text-gray-800 mb-2">
          Ahmet
        </h1>

        <div className="text-3xl text-rose-500 my-3">
          ❤
        </div>

        <h1 className="text-5xl font-serif text-gray-800 mb-8">
          Ayşe
        </h1>

        <p className="text-gray-600 leading-7 mb-8">
          Mutluluğumuza ortak olmanızdan onur duyarız.
        </p>

        <button className="bg-rose-500 hover:bg-rose-600 transition text-white px-8 py-3 rounded-full">
          Davetiyeyi Aç
        </button>

      </div>
    </main>
  );
}