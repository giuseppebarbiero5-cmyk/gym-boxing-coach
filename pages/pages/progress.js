import { useState } from "react";

export default function Progress() {
  const [progress, setProgress] = useState([]);
  const [week, setWeek] = useState("");
  const [notes, setNotes] = useState("");

  const addProgress = () => {
    if (week && notes) {
      setProgress([...progress, { week, notes }]);
      setWeek("");
      setNotes("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📈 Progressi Settimanali</h1>

      <div className="flex flex-col gap-4 max-w-md mx-auto mb-6">
        <input
          type="text"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
          placeholder="Settimana (es. 1, 2, 3...)"
          className="p-3 border rounded-lg"
        />
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Note sugli allenamenti"
          className="p-3 border rounded-lg"
        />
        <button
          onClick={addProgress}
          className="bg-blue-600 text-white py-2 rounded-lg"
        >
          Aggiungi
        </button>
      </div>

      <div className="max-w-md mx-auto">
        {progress.map((p, i) => (
          <div key={i} className="bg-white shadow p-4 mb-3 rounded-lg">
            <h2 className="font-bold">Settimana {p.week}</h2>
            <p>{p.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

