export default function App() {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <header style={{ padding: 20, background: "#1b5e20", color: "white" }}>
        <h1>GreenScape Landscaping</h1>
      </header>

      <section style={{ padding: 60, textAlign: "center" }}>
        <h2>Beautiful Outdoor Spaces</h2>
        <p>Lawn care, garden design, and landscaping services.</p>
      </section>

      <section style={{ padding: 40 }}>
        <h2>Services</h2>
        <ul>
          <li>Lawn Maintenance</li>
          <li>Garden Design</li>
          <li>Tree Care</li>
        </ul>
      </section>

      <section style={{ padding: 40, background: "#f2f2f2" }}>
        <h2>Contact</h2>
        <p>Email: info@greenscape.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      <footer style={{ textAlign: "center", padding: 20 }}>
        © 2026 GreenScape Landscaping
      </footer>
    </div>
  );
}
