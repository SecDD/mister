export default function Services() {
  const items = [
    { title: "Risk Assessment", emoji: "🔍", desc: "Comprehensive evaluation of your infrastructure to identify vulnerabilities and prioritize remediation." },
    { title: "Threat Detection & Response", emoji: "🛡️", desc: "Ongoing monitoring and real-time response to suspicious activities and incidents." },
    { title: "Asset Protection", emoji: "🔐", desc: "Securing your most valuable digital assets against unauthorized access and cyberattacks." },
    { title: "Penetration Testing", emoji: "🧪", desc: "Simulated attacks to test your defenses and expose hidden weaknesses." },
    { title: "Compliance Consulting", emoji: "📄", desc: "Guidance to meet industry regulations like GDPR, HIPAA, PCI-DSS, and more." },
    { title: "Security Awareness Training", emoji: "🧠", desc: "Educate your staff to recognize threats, phishing attacks, and unsafe behaviors." }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 px-6 py-20">
      <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {items.map(({ title, emoji, desc }, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">{emoji} {title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
