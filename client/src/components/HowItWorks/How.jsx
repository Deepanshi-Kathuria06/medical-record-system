import React from 'react';

export default function HowItWorks() {
  const steps = [
    { step: "1. Connect Wallet", description: "Authenticate using MetaMask." },
    { step: "2. Upload Records", description: "Add medical files securely to IPFS." },
    { step: "3. Share Access", description: "Grant doctors time-limited file access." },
    { step: "4. Use in Emergencies", description: "Show QR code for instant access." },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {steps.map((s, index) => (
          <div key={index} className="p-4 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{s.step}</h3>
            <p className="text-gray-600">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
