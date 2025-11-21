import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const baconFacts = [
  "Bacon dates back to 1500 BC in China.",
  "The word 'bacon' comes from Old High German 'bacho' meaning 'back'.",
  "In the U.S., over 2 billion pounds of bacon are produced annually.",
  "Bacon is often cured with salt and smoked for flavor.",
  "There’s even a Bacon Day celebrated on September 3rd!",
  "Bacon contains umami compounds that trigger pleasure centers in the brain.",
  "The phrase 'bring home the bacon' originated in 12th-century England.",
  "Bacon has been used in desserts like bacon ice cream and chocolate bacon bars.",
  "There are bacon-scented candles, soap, and even bacon-themed board games.",
  "In 2009, a bacon sculpture of Kevin Bacon was created by a Brooklyn artist.",
  "Bacon is typically made from pork belly, but turkey and beef bacon exist too.",
  "Bacon grease was used in WWII to make explosives.",
  "Bacon-wrapped dishes are popular in gourmet cooking.",
  "Bacon has appeared in pop culture, including video games and memes.",
  "The average American eats about 18 pounds of bacon per year.",
  "Bacon is a staple in breakfast dishes across many cultures.",
  "Bacon bits are often made from textured soy protein.",
  "Bacon can be dry-cured or wet-cured depending on the method.",
  "International Bacon Day is celebrated before Labor Day.",
  "Bacon has inspired novelty items, from wallets to bandages."
];

const styles = {
  container: {
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "#fdfaf6",
    color: "#3e2c23",
    padding: "2rem",
    lineHeight: "1.6"
  },
  nav: {
    background: "#dcae84",
    padding: "1rem",
    marginBottom: "2rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.1rem",
    position: "sticky",
    top: 0
  },
  link: {
    marginRight: "1rem",
    textDecoration: "none",
    color: "#3e2c23",
    fontWeight: "bold"
  },
  button: {
    fontSize: "1rem",
    padding: "0.6rem 1.2rem",
    background: "#a64b2a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "1rem"
  }
};

function Home() {
  return (
    <div style={styles.container}>
      <h1>🥓 The History and Science of Bacon</h1>
      <h2>What is Bacon?</h2>
      <p>
        Bacon is a cured meat product, traditionally made from pork belly or back. It is salted, often smoked, and cooked until crisp. Its distinctive flavor comes from the curing process and the Maillard reaction during cooking.
      </p>
      <h2>Origins</h2>
      <p>
        Bacon has roots in ancient China, where pork belly was salted and preserved. The term “bacon” itself derives from Old High German. Over centuries, bacon became a staple in European and American diets.
      </p>
      <h2>Nutritional Profile</h2>
      <p>
        One slice of bacon contains about 43 calories, 3 g of fat, and 3 g of protein. It is high in sodium (about 188 mg per slice) and saturated fat, so moderation is recommended.
      </p>
      <h2>Health Benefits</h2>
      <p>
        While bacon should be eaten in moderation, it does provide protein and B vitamins. Its fats can help with satiety, and its umami compounds stimulate appetite and enjoyment of meals. Turkey or plant-based bacon alternatives can offer lower-fat options.
      </p>
      <h2>Cultural Significance</h2>
      <p>
        Bacon is more than food — it’s a cultural icon. From breakfast plates to gourmet recipes, bacon has inspired festivals, merchandise, and even internet memes.
      </p>
      <h3>Sources</h3>
      <ul>
        <li>Smithsonian Magazine – History of Bacon</li>
        <li>USDA FoodData Central – Nutrition Facts</li>
        <li>BBC Food – Bacon Around the World</li>
      </ul>
    </div>
  );
}

function Interactive() {
  const [score, setScore] = React.useState(0);

  return (
    <div style={styles.container}>
      <h2>🎮 Interactive Learning</h2>
      <p>
        Explore bacon through interactive activities. Try the clicker game below as a fun bonus!
      </p>
      <hr />
      <h3>🥓 Bacon Clicker</h3>
      <p>Click the bacon to collect strips!</p>
      <button
        onClick={() => setScore(score + 1)}
        style={{ ...styles.button, fontSize: "2rem", marginRight: "1rem" }}
      >
        🥓
      </button>
      <button onClick={() => setScore(0)} style={styles.button}>Reset</button>
      <p>You have collected <b>{score}</b> strips of bacon!</p>
    </div>
  );
}

function Facts() {
  const [fact, setFact] = React.useState("");

  function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * baconFacts.length);
    setFact(baconFacts[randomIndex]);
  }

  return (
    <div style={styles.container}>
      <h2>🥓 Bacon Fun Facts</h2>
      <p>Press the button to reveal a random fact about bacon.</p>
      <button onClick={getRandomFact} style={styles.button}>Reveal Fact</button>
      {fact && <p style={{ marginTop: "1rem", fontStyle: "italic" }}>{fact}</p>}
      <h3>Sources</h3>
      <ul>
        <li>National Pork Board – Bacon Facts</li>
        <li>History.com – Origins of Bacon</li>
        <li>USDA – Bacon Consumption Data</li>
      </ul>
    </div>
  );
}

function Quiz() {
  const questions = [
    {
      q: "Where did bacon originate as a preserved pork belly?",
      options: ["China", "England", "Germany", "United States"],
      answer: 0
    },
    {
      q: "What chemical reaction gives bacon its crisp flavor?",
      options: ["Fermentation", "Maillard reaction", "Photosynthesis", "Hydrolysis"],
      answer: 1
    },
    {
      q: "Which phrase comes from medieval England?",
      options: ["Bring home the bacon", "Save your bacon", "Bacon and eggs", "Sizzle like bacon"],
      answer: 0
    },
    {
      q: "How many calories are in one medium slice of bacon?",
      options: ["20", "43", "100", "75"],
      answer: 1
    },
    {
      q: "Which nutrient does bacon provide?",
      options: ["Vitamin B", "Vitamin C", "Iron", "Calcium"],
      answer: 0
    }
  ];

  const [current, setCurrent] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [score, setScore] = React.useState(0);

  function handleAnswer(index) {
    setSelected(index);
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    setSelected(null);
    setCurrent(current + 1);
  }

  return (
    <div style={styles.container}>
      <h2>📚 Bacon Quiz</h2>
      {current < questions.length ? (
        <>
          <p><b>Q{current + 1}:</b> {questions[current].q}</p>
          <ul>
            {questions[current].options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleAnswer(i)}
                  style={{
                    ...styles.button,
                    background: selected === i ? "#6a3e2e" : "#a64b2a",
                    marginBottom: "0.5rem"
                  }}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
          {selected !== null && (
            <p>
              {selected === questions[current].answer
                ? "✅ Correct!"
                : "❌ Incorrect."}
            </p>
          )}
          {selected !== null && current < questions.length - 1 && (
            <button onClick={nextQuestion} style={styles.button}>Next</button>
          )}
        </>
      ) : (
        <p>You finished the quiz! Your score: {score}/{questions.length}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <div style={styles.container}>
      <h2>ℹ️ About This Project</h2>
      <p>
        Bacon Games was created as an educational resource to explore bacon’s role in food science, culture, and history. It combines factual information with interactive elements to make learning engaging.
      </p>
      <p>
        Built with React and Vite, hosted on Cloudflare Pages, this project demonstrates how technology can be used to present culinary history in a fun, accessible way.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/interactive" style={styles.link}>Interactive</Link>
        <Link to="/facts" style={styles.link}>Facts</Link>
        <Link to="/quiz" style={styles.link}>Quiz</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interactive" element={<Interactive />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}