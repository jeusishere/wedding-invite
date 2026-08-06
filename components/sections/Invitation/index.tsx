import { wedding } from "@/data/wedding";

export default function Invitation() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="fade-in max-w-3xl text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#7A746C]">
          Mutluluğumuzu Paylaşmaya Davetlisiniz
        </p>

        <h1 className="mt-8 text-5xl md:text-7xl">
          {wedding.bride.fullName}
        </h1>

        <div className="my-6 text-4xl text-[#C8A96A]">
          &
        </div>

        <h2 className="text-5xl md:text-7xl">
          {wedding.groom.fullName}
        </h2>


        <div className="mt-12 border-y border-[#E8D7B0] py-8">

          <p className="text-lg text-[#7A746C] leading-relaxed">
            {wedding.message}
          </p>

        </div>


        <div className="mt-12">

          <p className="text-sm uppercase tracking-widest text-[#7A746C]">
            Tarih
          </p>

          <p className="mt-3 text-3xl text-[#C8A96A]">
            {wedding.date.day} {wedding.date.month} {wedding.date.year}
          </p>

        </div>

      </div>
    </section>
  );
}