import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h4 className="font-semibold text-lg">IELTS Mastery Hub</h4>
          <p className="text-sm text-gray-600 mt-2">Address: 123 Learning Lane, Your City</p>
          <p className="text-sm text-gray-600">Email: hello@ieltsmastery.example</p>
          <p className="text-sm text-gray-600">Phone: +91 98765 43210</p>
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 text-sm text-gray-600">
            <li><a href="#courses">Courses</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Subscribe</h5>
          <p className="text-sm text-gray-600 mt-2">Get updates about batches and freebies</p>
          <form className="mt-2 flex gap-2">
            <input className="border rounded px-3 py-2 text-sm" placeholder="Email" />
            <button className="bg-indigo-600 text-white px-3 py-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="bg-slate-50 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} IELTS Mastery Hub — Built with ❤️
      </div>
    </footer>
  );
}
