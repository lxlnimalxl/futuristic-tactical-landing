import React, { useState } from 'react';
import { playTechClick, playTechDeploy } from '../../utils/audio';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    handle: '',
    sector: 'ALPHA-9',
    subject: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    playTechDeploy();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative bg-white border-2 border-[#3040D3] max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-hidden"
        style={{
          clipPath: 'polygon(32px 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%, 0 32px)'
        }}
      >
        <button
          onClick={() => {
            playTechClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 rounded-full cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!sent ? (
          <div>
            <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
              FIELD TRANSMISSION DISPATCH
            </div>
            <h3 className="font-title font-bold text-2xl text-black mb-1">
              Contact Command
            </h3>
            <p className="font-mono text-sm text-neutral-600 mb-6">
              Send encrypted queries directly to the Shadowfall development squad.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Operative Handle / Call Sign
                </label>
                <input
                  type="text"
                  required
                  placeholder="Viper-One"
                  value={formData.handle}
                  onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-300 text-sm focus:border-[#3040D3] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Sector
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 text-sm focus:border-[#3040D3] outline-none bg-white"
                  >
                    <option value="ALPHA-9">ALPHA-9 (Ruins)</option>
                    <option value="BETA-4">BETA-4 (High-Tech)</option>
                    <option value="OMEGA-0">OMEGA-0 (Core Mainframe)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Bug / Inquiries"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 text-sm focus:border-[#3040D3] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Transmission Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your inquiry, tactical feedback, or partnership request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-300 text-sm focus:border-[#3040D3] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-chamfer-solid py-3 font-mono font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Message</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-title font-bold text-2xl text-black">
              Transmission Received!
            </h3>
            <p className="font-mono text-sm text-neutral-600">
              High-command operatives have logged your dispatch. Expect a reply within 24 standard cycles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
