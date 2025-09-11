import { Routes, Route, Link } from "react-router-dom";
import SimpsonsParadox from "./illusions/SimpsonsParadox";
// placeholders — you’ll build these later
import LawLargeNumbers from "./illusions/LawLargeNumbers";
import SpuriousCorr from "./illusions/SpuriousCorr";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-indigo-700">
          Interactive Data Illusions
        </h1>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/simpson" className="hover:underline">
            Simpson’s Paradox
          </Link>
          <Link to="/lln" className="hover:underline">
            Law of Large Numbers
          </Link>
          <Link to="/spurious" className="hover:underline">
            Spurious Correlations
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simpson" element={<SimpsonsParadox />} />
        <Route path="/lln" element={<LawLargeNumbers />} />
        <Route path="/spurious" element={<SpuriousCorr />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="prose">
      <h2>Play with Paradoxes</h2>
      <p>
        This site lets you explore famous statistical illusions interactively:
        Simpson’s Paradox, the Law of Large Numbers, and Spurious Correlations.
        Tweak sliders, watch the charts move, and see why stats isn’t always as
        straightforward as it looks.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="prose">
      <h2>About</h2>
      <p>
        Built with React, TypeScript, D3, and Tailwind CSS. The goal: make
        statistical paradoxes fun and visual, not just formulas in a textbook.
      </p>
    </div>
  );
}
