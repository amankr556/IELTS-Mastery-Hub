import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-white to-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-indigo-600 font-semibold">Achieve your target band</h2>
          <h1 className="text-3xl md:text-5xl font-bold mt-3">IELTS coaching that actually works</h1>
          <p className="mt-4 text-gray-600">
            Personalised speaking practice, full-length mock tests, and AI-powered band predictions to help you reach your dream score.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#courses" className="bg-indigo-600 text-white px-5 py-3 rounded-md shadow">View Courses</a>
            <a href="#contact" className="border border-indigo-600 text-indigo-600 px-5 py-3 rounded-md">Contact Us</a>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <strong>Next batch:</strong> Starts 1st of next month • Limited seats
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=60"
              alt="students"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-sm text-gray-600">Live speaking sessions • AI band reports • Full tests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
