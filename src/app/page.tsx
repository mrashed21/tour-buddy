import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container mx-auto py-8 flex flex-col justify-center items-center min-h-screen gap-4 font-mulish">
        <div className="">
          <h1 className="text-3xl font-bold text-center">
            Welcome to Tour Buddy
          </h1>
        </div>
        <div className=" flex flex-col items-center lg:flex-row gap-5">
          <Link href="/profile">
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all w-28">
              Profile
            </button>
          </Link>
          <Link href="/payment">
            <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all w-28">
              Payment
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
