import React from 'react';

const features = [
  {
    title: 'Speaking Practice',
    desc: '1-on-1 speaking sessions with experienced coaches and recorded feedback.',
    icon: '🗣️',
  },
  {
    title: 'Mock Tests',
    desc: 'Full-length simulated tests with detailed score breakdowns.',
    icon: '📝',
  },
  {
    title: 'AI Band Score',
    desc: 'Instant band prediction and tips using AI analysis of answers.',
    icon: '🤖',
  },
];

export default function Features() {
  return (
    <section id="courses" className="container mx-auto px-4 py-12">
      <h3 className="text-center text-2xl font-semibold">Our Features</h3>
      <p className="text-center text-gray-600 mt-2">Everything you need to master the exam</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition">
            <div className="text-4xl">{f.icon}</div>
            <h4 className="text-xl font-semibold mt-4">{f.title}</h4>
            <p className="mt-2 text-gray-600">{f.desc}</p>
            <button className="mt-4 text-indigo-600">Learn more →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
