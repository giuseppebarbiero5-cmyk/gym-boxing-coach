import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-6"
      >
        🏋️‍♂️ Gym & Boxing Coach
      </motion.h1>

      <p className="text-lg text-center max-w-md mb-8">
        Benvenuto! Inserisci i tuoi dati per ricevere una scheda di
        allenamento personalizzata con palestra + sacco da boxe.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
        Inizia ora
      </button>
    </div>
  );
          }
