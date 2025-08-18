export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "50px" }}>
      <h1>🏋️ Gym Boxing Coach</h1>
      <p>Benvenuto nella tua app di allenamento personalizzato!</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><a href="/timer">⏱️ Timer Round & Pause</a></li>
        <li><a href="/progressi">📈 Progressi Settimanali</a></li>
      </ul>
    </div>
  );
}
