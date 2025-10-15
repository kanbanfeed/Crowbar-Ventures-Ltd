import { useState } from "react";




export default function FloatingInput({ label, name, type = "text", formData, setFormData }) {
  return (
    <div className="relative mt-8">
      <input
        type={type}
        name={name}
        id={name}
        value={formData[name]}
        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
        placeholder=" "
        className="peer w-full rounded-xl border border-gray-500/30 bg-white/5 backdrop-blur-md 
                   px-4 pt-6 pb-2 text-base text-white placeholder-transparent 
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/70 
                   transition-all duration-300 outline-none"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-2 text-sm transition-all 
                   peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200
                   peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-300"
      >
        {label}
      </label>
    </div>
  );
}

export function FloatingText({ label, name = "message", formData, setFormData }) {
  return (
    <div className="relative mt-8">
      <textarea
        id={name}
        name={name}  
        value={formData[name]}
        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
        placeholder=" "
        rows={6}
        className="peer w-full rounded-xl border border-gray-500/30 bg-white/5 backdrop-blur-md 
                   px-4 pt-6 pb-2 text-base text-white placeholder-transparent 
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/70 
                   transition-all duration-300 outline-none resize-none"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-2 text-sm text-gray-300 transition-all 
                   peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 
                   peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-300"
      >
        {label}
      </label>
    </div>
  );
}
