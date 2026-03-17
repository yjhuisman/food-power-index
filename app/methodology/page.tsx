export default function MethodologyPage() {
  return (
    <main style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h1>Methodology</h1>

      <p>
        Food Power Index is an evidence-based prototype that combines public
        data, benchmark data, and estimated price breakdowns to make food
        systems easier to understand.
      </p>

      <h2>What this prototype uses</h2>
      <ul>
        <li>Production data at country level</li>
        <li>Trade flow data at country and commodity level</li>
        <li>Living income benchmark comparisons</li>
        <li>Estimated value-chain breakdowns</li>
      </ul>

      <h2>What this prototype does not claim</h2>
      <ul>
        <li>It does not show exact farm-level tracing for individual products</li>
        <li>It does not show exact retailer margins for specific SKUs</li>
        <li>It is not a real-time supply chain tracker</li>
      </ul>

      <h2>How to read the numbers</h2>
      <p>
        Some values are based on direct public data. Other values are modeled
        estimates or ranges based on studies and benchmark comparisons.
      </p>

      <h2>Confidence</h2>
      <p>
        Each future datapoint should be labeled with a confidence level, such as
        high, medium, or low, depending on source quality and precision.
      </p>
    </main>
  );
}