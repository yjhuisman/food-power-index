import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Food Power Index</h1>
      <p>Follow the money behind your food</p>
<p>
  <a href="/methodology">Methodology</a>
</p>
      <div style={{ marginTop: 20 }}>
        {products.map((p) => (
          <div key={p.slug} style={{ marginBottom: 16 }}>
            <Link href={`/products/${p.slug}`}>
              {p.name} — Score: {p.score}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}