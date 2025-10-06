import React from 'react';

const reviews = [
  { name: 'Riya', text: 'Scored 7.5 in first attempt. The speaking practice helped a lot!' },
  { name: 'Sam', text: 'Mock tests were very similar to actual exam. Highly recommend.' },
  { name: 'Anil', text: 'AI band predictor showed me weak areas and I improved fast.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold">What our students say</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 bg-white border rounded-lg">
              <p className="text-gray-700">“{r.text}”</p>
              <div className="mt-4 font-semibold">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
