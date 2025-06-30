import { Wand2 } from 'lucide-react';

function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-purple-200 space-y-4">
      <div className="animate-spin-slow">
        <Wand2 size={48} className="drop-shadow-[0_0_15px_rgba(200,0,255,0.6)]" />
      </div>
      <h1 className="text-xl font-jim animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
        Stirring the cauldron...
      </h1>
    </div>
  );
}

export default Loader;
