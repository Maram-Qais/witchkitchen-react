
function GrimoireFilterBar({
  selectedElement,
  setSelectedElement,
  selectedIntention,
  setSelectedIntention,
}) {
  const elements = ['All', 'Fire', 'Water', 'Earth', 'Air'];
  const intentions = ['All', 'Healing', 'Vitality', 'Protection', 'Love'];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-8">

      
    <div className="w-full sm:w-60">
      <label className="block text-xs text-purple-300 font-work mb-1">Element</label>
      <select
        value={selectedElement}
        onChange={(e) => setSelectedElement(e.target.value)}
        className="w-full bg-[#1c1b2a] text-cream border border-purple-500 px-3 py-2 rounded-md shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 transition"
      >
        {['All', 'Fire', 'Water', 'Earth', 'Air'].map(el => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </div>
  
    <div className="w-full sm:w-60">
      <label className="block text-xs text-green-300 font-work mb-1">Intention</label>
      <select
        value={selectedIntention}
        onChange={(e) => setSelectedIntention(e.target.value)}
        className="w-full bg-[#1c1b2a] text-cream border border-green-500 px-3 py-2 rounded-md shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-green-500 transition"
      >
        {['All', 'Healing', 'Vitality', 'Protection', 'Love'].map(intent => (
          <option key={intent}>{intent}</option>
        ))}
      </select>
    </div>
  </div>
  
  );
}

export default GrimoireFilterBar;
