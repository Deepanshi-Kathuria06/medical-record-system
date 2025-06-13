import React from 'react';
export default function ContactUs() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-8 text-gray-600">Have questions or suggestions? Reach out!</p>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
        <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-md h-32" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
