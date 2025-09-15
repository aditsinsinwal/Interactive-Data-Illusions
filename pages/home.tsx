export default function Home() {
  return (
    <div className="prose">
      <h2>Welcome to Interactive Data Illusions</h2>
      <p>
        This site lets you <strong>play with famous statistical illusions</strong> —
        interactive paradoxes and fallacies that challenge intuition. Each demo
        is designed to be hands-on: move sliders, watch the data shift, and see
        how statistics can surprise you.
      </p>

      <h3>Available Demos</h3>
      <ul>
        <li>
          <strong>Simpson’s Paradox</strong> – when group-level trends flip in
          the aggregate.
        </li>
        <li>
          <strong>Law of Large Numbers</strong> – averages stabilize with more
          samples.
        </li>
        <li>
          <strong>Spurious Correlations</strong> – why unrelated trends can look
          highly related.
        </li>
      </ul>

      <p>
        Explore, learn, and share — the best way to understand statistics is to
        see where your intuition breaks.
      </p>
    </div>
  );
}
