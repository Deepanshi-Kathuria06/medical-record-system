import React from 'react'

export default function Features() {
  const features = [
    { title: "Decentralized Storage", description: "Medical files stored on IPFS for immutability and transparency." },
    { title: "Patient-Owned Records", description: "Patients control who can view their data with wallet-based permissions." },
    { title: "Emergency QR Code", description: "QR code gives critical info in emergencies without internet." },
    { title: "Doctor Portal", description: "Doctors securely access shared files with blockchain verification." },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feat, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-gray-600">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

