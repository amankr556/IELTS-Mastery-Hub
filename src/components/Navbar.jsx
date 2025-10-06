import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">IM</div>
          <div>
            <h1 className="font-semibold text-lg">IELTS Mastery Hub</h1>
            <p className="text-xs text-gray-500">Master IELTS with confidence</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#courses" className="hover:text-indigo-600">Courses</a>
          <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Get Started</button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 border rounded">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 flex flex-col gap-3">
            <a href="#home" className="block">Home</a>
            <a href="#courses" className="block">Courses</a>
            <a href="#testimonials" className="block">Testimonials</a>
            <a href="#contact" className="block">Contact</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-2">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
