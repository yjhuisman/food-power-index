export default function Home() {
  return (
    <main style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h1>Food Power Index</h1>
      <p>Follow the money behind your food</p>
<p>
  <a href="/methodology">Read methodology</a>
</p>
      <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
          <h2>Chocolate</h2>
          <p>EU market</p>
          <p>Score: 82</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
          <h2>Coffee</h2>
          <p>EU market</p>
          <p>Score: 74</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
          <h2>Bananas</h2>
          <p>EU market</p>
          <p>Score: 69</p>
        </div>
      </div>
    </main>
  );
}
