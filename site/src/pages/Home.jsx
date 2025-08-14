import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center px-6 py-20">
      <h2 className="text-4xl font-bold mb-4">
        Protecting What Matters Most — Your Digital Assets
      </h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Cyber threats evolve daily — so should your defenses. Partner with Mister InfoSec for
        proactive, reliable, and expert cybersecurity consulting.
      </p>
      <Link
        to="/contact"
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Request Consultation
      </Link>
    </section>
  );
}
