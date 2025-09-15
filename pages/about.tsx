export default function About() {
  return (
    <div className="prose">
      <h2>About This Project</h2>
      <p>
        <em>Interactive Data Illusions</em> was built to make statistics more
        intuitive and fun. Instead of static textbook plots, this site provides
        live, interactive visualizations that reveal how easily data can mislead
        us.
      </p>

      <h3>Technology Stack</h3>
      <ul>
        <li>React + TypeScript for the UI</li>
        <li>D3.js for data visualization</li>
        <li>Tailwind CSS for styling</li>
        <li>Vite for lightning-fast builds</li>
      </ul>

      <h3>Why?</h3>
      <p>
        Statistics is more than formulas — it’s about reasoning under
        uncertainty. The illusions here showcase paradoxes and pitfalls that
        affect everything from medical studies to business decisions. By
        experimenting with them interactively, you’ll develop stronger
        statistical intuition.
      </p>

      <p>
        Created as a portfolio project to combine education, coding, and design
        in one place.
      </p>
    </div>
  );
}
