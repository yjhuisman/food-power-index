import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: any) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <main style={{ padding: 40 }}>
      <h1>{product.name}</h1>
      <p>Food Power Index: {product.score}</p>
    </main>
  );
}
