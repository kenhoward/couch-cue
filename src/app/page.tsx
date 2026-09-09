const appName = process.env.NEXT_PUBLIC_APP_NAME?.trim() || "Couch Cue";

export default function Home() {
  return (
    <main className="home">
      <div>
        <p className="eyebrow">Next.js application</p>
        <h1>{appName}</h1>
        <p className="lede">The App Router, TypeScript, and ESLint are ready.</p>
      </div>
    </main>
  );
}
