import { X } from 'lucide-react';

function PopupModal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-[#1a1a1a] border border-purple-700 rounded-xl p-6 max-w-sm w-full text-center text-cream relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-cream"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default PopupModal;
