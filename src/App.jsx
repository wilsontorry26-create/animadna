import { useState } from 'react'
import './App.css'

const questions = [
  {
    id: 1,
    chapter: 'CHAPTER 1 OF 7',
    kanji: '形式 — Keishiki',
    question: 'What are you looking for today?',
    sub: 'Choose your preferred format',
    options: [
      { emoji: '📺', label: 'Anime only — let it move and breathe', value: 'anime' },
      { emoji: '📖', label: 'Manga only — ink and silence only', value: 'manga' },
      { emoji: '✨', label: 'Both — I have no loyalty', value: 'both' },
      { emoji: '🎲', label: "Doesn't matter — surprise me", value: 'any' },
    ],
  },
  {
    id: 2,
    chapter: 'CHAPTER 2 OF 7',
    kanji: '気分 — Kibun',
    question: 'What stirs in your chest tonight?',
    sub: 'Choose the feeling that calls to you',
    options: [
      { emoji: '🌑', label: 'A hunger for darkness', value: 'dark' },
      { emoji: '🕯️', label: "A fire that won't die", value: 'hype' },
      { emoji: '🖤', label: 'A grief too heavy to name', value: 'emotional' },
      { emoji: '📜', label: 'A longing for stillness', value: 'chill' },
    ],
  },
  {
    id: 3,
    chapter: 'CHAPTER 3 OF 7',
    kanji: '経験 — Keiken',
    question: 'Where are you in your journey?',
    sub: 'Be honest — it shapes everything',
    options: [
      { emoji: '🌱', label: 'Complete beginner — just getting started', value: 'beginner' },
      { emoji: '📗', label: "I've seen a few — building my taste", value: 'intermediate' },
      { emoji: '🔥', label: 'Veteran — show me the deep cuts', value: 'veteran' },
      { emoji: '👁️', label: 'I know too much and feel nothing', value: 'obsessed' },
    ],
  },
  {
    id: 4,
    chapter: 'CHAPTER 4 OF 7',
    kanji: '世界 — Sekai',
    question: 'What world do you wish to inhabit?',
    sub: 'Where does your soul wander when it escapes',
    options: [
      { emoji: '⚔️', label: 'Ancient kingdoms soaked in blood', value: 'fantasy' },
      { emoji: '🌆', label: 'The underbelly of the real world', value: 'real' },
      { emoji: '⚙️', label: 'A cold, mechanical future', value: 'scifi' },
      { emoji: '👁️', label: 'Where demons walk among us', value: 'supernatural' },
    ],
  },
  {
    id: 5,
    chapter: 'CHAPTER 5 OF 7',
    kanji: '心 — Kokoro',
    question: 'What do you seek in the pages?',
    sub: 'The thing you need most right now',
    options: [
      { emoji: '⚡', label: 'Power reclaimed through suffering', value: 'power' },
      { emoji: '🤝', label: 'Bonds forged through fire', value: 'bonds' },
      { emoji: '🥀', label: 'A love that unravels everything', value: 'romance' },
      { emoji: '🦋', label: 'The slow becoming of a self', value: 'growth' },
    ],
  },
  {
    id: 6,
    chapter: 'CHAPTER 6 OF 7',
    kanji: '結末 — Ketsumatsu',
    question: 'How do you wish to be left?',
    sub: 'After the last page turns',
    options: [
      { emoji: '🪦', label: 'Hollow and haunted', value: 'broken' },
      { emoji: '🔱', label: 'Ready to conquer something', value: 'inspired' },
      { emoji: '☕', label: 'Wrapped in warmth', value: 'warm' },
      { emoji: '🌀', label: 'Questioning your entire reality', value: 'mindblown' },
    ],
  },
  {
    id: 7,
    chapter: 'CHAPTER 7 OF 7',
    kanji: '時間 — Jikan',
    question: 'How much are you willing to commit?',
    sub: 'Some stories demand everything',
    options: [
      { emoji: '⚡', label: 'Short — under 26 episodes or 5 volumes', value: 'short' },
      { emoji: '📅', label: 'Medium — I can go a season or two', value: 'medium' },
      { emoji: '♾️', label: 'Long — I want a world I live in', value: 'long' },
      { emoji: '🎲', label: "Length doesn't matter to me", value: 'anylength' },
    ],
  },
]

const allShows = {
  beginner: {
    anime: [
      { name: 'My Hero Academia', type: 'Anime', genre: 'Superhero Action', desc: 'The perfect entry point. Heart, hype, and heroes. Easy to love from episode one.' },
      { name: 'Demon Slayer', type: 'Anime', genre: 'Supernatural Action', desc: "Stunning animation, clear story, massive emotional payoff. A beginner's dream." },
      { name: 'Your Lie in April', type: 'Anime', genre: 'Romance • Drama', desc: "Gentle on the surface, devastating underneath. Proof anime isn't just fighting." },
      { name: 'Spy x Family', type: 'Anime', genre: 'Comedy • Action', desc: 'Funny, warm, and easy. A fake family that feels more real than most.' },
      { name: 'Fullmetal Alchemist: Brotherhood', type: 'Anime', genre: 'Fantasy • Adventure', desc: 'Widely considered perfect. Start here and never look back.' },
      { name: 'Haikyuu!!', type: 'Anime', genre: 'Sports • Drama', desc: 'Volleyball that hits like a war story. Makes you care about a sport you never watched.' },
    ],
    manga: [
      { name: 'One Punch Man', type: 'Manga', genre: 'Action • Comedy', desc: 'A hero who wins every fight instantly. More clever than it sounds.' },
      { name: 'Fruits Basket', type: 'Manga', genre: 'Romance • Drama', desc: 'A family cursed by the zodiac. Deeply emotional, deeply readable.' },
      { name: 'My Hero Academia', type: 'Manga', genre: 'Superhero Action', desc: 'The manga goes further than the anime. Start here if you want the full story.' },
      { name: 'Yotsuba&!', type: 'Manga', genre: 'Slice of Life', desc: 'The purest, most joyful manga ever made. Recommended for every human being.' },
    ],
  },
  intermediate: {
    anime: [
      { name: 'Attack on Titan', type: 'Anime', genre: 'Dark Action', desc: 'The one that converts everyone. Morally complex, relentless, unforgettable.' },
      { name: 'Steins;Gate', type: 'Anime', genre: 'Sci-Fi • Thriller', desc: 'The slow burn that earns everything it asks you to endure.' },
      { name: 'Hunter x Hunter', type: 'Anime', genre: 'Adventure • Dark', desc: 'Starts like a kids show, becomes one of the most complex stories ever written.' },
      { name: 'Neon Genesis Evangelion', type: 'Anime', genre: 'Sci-Fi • Psychological', desc: 'The one that shattered the genre and rebuilt it wrong on purpose.' },
      { name: 'Jujutsu Kaisen', type: 'Anime', genre: 'Supernatural Action', desc: "Current era's crown jewel. Insane fights. Characters worth dying for." },
      { name: 'Vinland Saga', type: 'Anime', genre: 'Historical Action', desc: 'Revenge that slowly transforms into something far harder — choosing peace.' },
    ],
    manga: [
      { name: 'Chainsaw Man', type: 'Manga', genre: 'Dark Action', desc: 'Unhinged, bloody, and oddly moving. Like nothing else in print.' },
      { name: 'Tokyo Ghoul', type: 'Manga', genre: 'Dark Fantasy', desc: "The manga does what the anime couldn't finish. Raw and haunting." },
      { name: 'Vagabond', type: 'Manga', genre: 'Historical', desc: 'The most beautiful manga ever drawn. A samurai story about what it means to live.' },
      { name: 'Berserk', type: 'Manga', genre: 'Dark Fantasy', desc: 'The definitive dark fantasy. Read it. Grieve it. Repeat.' },
    ],
  },
  veteran: {
    anime: [
      { name: 'Mushishi', type: 'Anime', genre: 'Supernatural • Meditative', desc: 'Meditative, strange, deeply human. Unlike anything else in the medium.' },
      { name: 'Monster', type: 'Anime', genre: 'Psychological Thriller', desc: 'A psychological thriller so good it transcends the genre entirely.' },
      { name: 'Texhnolyze', type: 'Anime', genre: 'Sci-Fi • Dark', desc: 'Deliberately brutal and cold. Not for everyone. Exactly for some.' },
      { name: 'The Tatami Galaxy', type: 'Anime', genre: 'Surreal • Drama', desc: 'Time loops, regret, and finding meaning. Visual and narrative genius.' },
      { name: 'Planetes', type: 'Anime', genre: 'Sci-Fi • Slice of Life', desc: 'Space debris collectors. Quietly one of the best anime ever made.' },
      { name: 'Rose of Versailles', type: 'Anime', genre: 'Historical • Drama', desc: 'A 1979 masterwork about gender, power, and revolution. Timeless.' },
    ],
    manga: [
      { name: 'Oyasumi Punpun', type: 'Manga', genre: 'Psychological Drama', desc: 'A coming of age story that will fundamentally change how you see yourself.' },
      { name: 'Dungeon Meshi', type: 'Manga', genre: 'Fantasy • Comedy', desc: 'A dungeon crawl about cooking monsters. Deeply strange and masterfully written.' },
      { name: 'Dorohedoro', type: 'Manga', genre: 'Dark Fantasy', desc: 'Chaotic, violent, and weirdly warm. A world unlike anything ever drawn.' },
      { name: 'Blame!', type: 'Manga', genre: 'Sci-Fi', desc: 'Near wordless. Infinite megastructure. One man walking through it all alone.' },
    ],
  },
  obsessed: {
    anime: [
      { name: 'Haibane Renmei', type: 'Anime', genre: 'Philosophical • Quiet', desc: 'About sin, grace, and leaving. You will not forget it.' },
      { name: 'Serial Experiments Lain', type: 'Anime', genre: 'Cyberpunk • Psychological', desc: 'Identity dissolved into the network. Still unmatched 25 years later.' },
      { name: "Kino's Journey", type: 'Anime', genre: 'Philosophy • Adventure', desc: 'A traveler and a talking motorcycle visiting countries with one law each. Perfect.' },
      { name: 'Now and Then, Here and There', type: 'Anime', genre: 'Dark • War', desc: 'One of the most brutal and honest anime ever made about war and survival.' },
    ],
    manga: [
      { name: 'Biomega', type: 'Manga', genre: 'Sci-Fi • Post-Apocalyptic', desc: 'A motorcycle rider and a talking bear in a dying world. Nihei at his most raw.' },
      { name: 'The Flowers of Evil', type: 'Manga', genre: 'Psychological Drama', desc: 'A teenage transgression that spirals into something profound and uncomfortable.' },
      { name: 'I Am a Hero', type: 'Manga', genre: 'Horror', desc: 'The most realistic zombie manga ever written. Psychologically devastating.' },
      { name: 'Jin', type: 'Manga', genre: 'Historical • Medical', desc: 'A surgeon travels to Edo-era Japan. Quietly one of the greatest manga ever written.' },
    ],
  },
}

function getRecommendations(answers) {
  const format = answers[0] || 'any'
  const mood = answers[1] || 'dark'
  const experience = answers[2] || 'intermediate'
  const world = answers[3] || 'fantasy'

  const expKey = ['beginner', 'intermediate', 'veteran', 'obsessed'].includes(experience) ? experience : 'intermediate'
  const pool = allShows[expKey]
  const combined = [...pool.anime, ...pool.manga]

  let filtered = combined
  if (format === 'anime') filtered = pool.anime
  else if (format === 'manga') filtered = pool.manga

  if (filtered.length < 3) filtered = combined

  const moodMap = { dark: ['Dark', 'Psychological', 'Horror'], hype: ['Action', 'Superhero', 'Sports'], emotional: ['Romance', 'Drama', 'Slice of Life'], chill: ['Slice of Life', 'Meditative', 'Comedy', 'Peaceful', 'Quiet'] }
  const worldMap = { fantasy: ['Fantasy', 'Historical', 'Dark Fantasy'], real: ['Slice of Life', 'Drama', 'Sports', 'Medical'], scifi: ['Sci-Fi', 'Cyberpunk', 'Post-Apocalyptic'], supernatural: ['Supernatural', 'Horror', 'Philosophical'] }

  const scored = filtered.map(show => {
    let score = 0
    const g = show.genre.toLowerCase()
    ;(moodMap[mood] || []).forEach(t => { if (g.includes(t.toLowerCase())) score += 2 })
    ;(worldMap[world] || []).forEach(t => { if (g.includes(t.toLowerCase())) score += 1 })
    return { ...show, score }
  })

  scored.sort((a, b) => b.score - a.score)

  const seen = new Set()
  const top = []
  for (const s of scored) {
    if (!seen.has(s.name) && top.length < 3) { seen.add(s.name); top.push(s) }
  }
  for (const s of filtered) {
    if (!seen.has(s.name) && top.length < 3) { seen.add(s.name); top.push(s) }
  }
  return top
}

function getArchetypeTitle(answers) {
  const mood = answers[1]
  const world = answers[3]
  const seek = answers[4]
  const ending = answers[5]
  if (mood === 'dark' && (seek === 'power' || world === 'fantasy')) return { title: 'The Dark Sovereign', desc: "You don't flinch. You want the truth, even when it's brutal — especially then." }
  if (mood === 'emotional' || seek === 'romance') return { title: 'The Tender Warrior', desc: 'You carry more than you show. You need stories that know how to hold grief gently.' }
  if (world === 'scifi' && ending === 'mindblown') return { title: 'The Visionary', desc: 'You need something that rearranges your understanding of what is real.' }
  if (world === 'supernatural' && seek === 'bonds') return { title: 'The Sworn Soul', desc: 'You believe in something bigger than yourself. You fight for the people beside you.' }
  if (mood === 'chill' || seek === 'growth') return { title: 'The Quiet Scholar', desc: 'You are unbothered. You want stories that expand you slowly, without the noise.' }
  if (mood === 'hype' && seek === 'power') return { title: 'The Eternal Challenger', desc: 'You need fire. You need the rush. You were made for stories that do not slow down.' }
  return { title: 'The Curious Soul', desc: "Your taste hasn't been fully named yet. These are the ones that will name it." }
}

export default function App() {
  const [screen, setScreen] = useState('splash')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selected, setSelected] = useState(null)
  const [result, setResult] = useState(null)
  const [animating, setAnimating] = useState(false)

  const progress = (currentQ / questions.length) * 100

  const handleNext = () => {
    if (!selected) return
    const newAnswers = { ...answers, [currentQ]: selected }
    setAnswers(newAnswers)
    setAnimating(true)
    setTimeout(() => {
      setAnimating(false)
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1)
        setSelected(null)
      } else {
        const archetype = getArchetypeTitle(newAnswers)
        const shows = getRecommendations(newAnswers)
        setResult({ ...archetype, shows })
        setScreen('result')
      }
    }, 300)
  }

  const handleRestart = () => {
    setScreen('splash'); setCurrentQ(0); setAnswers({}); setSelected(null); setResult(null)
  }

  const handleShare = () => {
    const text = `My AnimaDNA archetype is "${result?.title}" — discover yours at animadna.com`
    if (navigator.share) {
      navigator.share({ title: 'AnimaDNA', text, url: window.location.href }).catch(() => {})
    } else {
      navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard! Share it.'))
    }
  }

  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="bg-glow" />
      <div className="corner corner-tl" /><div className="corner corner-tr" />
      <div className="corner corner-bl" /><div className="corner corner-br" />

      <div className="container">
        <header className="masthead">
          <div className="kanji-label">アニメ • 漫画 • 物語</div>
          <h1 className="logo">ANIMA<span className="logo-gold">DNA</span></h1>
          <p className="tagline">Discover the stories written for your soul</p>
          <div className="divider">
            <div className="divider-line" /><span className="divider-star">✦</span><div className="divider-line" />
          </div>
        </header>

        {screen === 'splash' && (
          <div className="screen splash-screen">
            <div className="book-icon">📚</div>
            <div className="splash-card">
              <p className="splash-quote">
                "Every reader has a story they were always meant to find.<br />
                Seven questions stand between you and yours."
              </p>
              <div className="splash-note">NO ACCOUNT · NO EMAIL · JUST THE TRUTH</div>
            </div>
            <button className="cta-btn" onClick={() => setScreen('quiz')}>Open the Tome</button>
          </div>
        )}

        {screen === 'quiz' && (
          <div className={`screen quiz-screen ${animating ? 'fade-out' : 'fade-in'}`}>
            <div className="progress-wrap">
              <div className="progress-meta">
                <span>{questions[currentQ].chapter}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="question-block">
              <div className="kanji-sub">{questions[currentQ].kanji}</div>
              <h2 className="question-title">{questions[currentQ].question}</h2>
              <p className="question-sub">{questions[currentQ].sub}</p>
            </div>

            <div className="options">
              {questions[currentQ].options.map((opt) => (
                <button
                  key={opt.value}
                  className={`option ${selected === opt.value ? 'option-selected' : ''}`}
                  onClick={() => setSelected(opt.value)}
                >
                  <span className="option-emoji">{opt.emoji}</span>
                  <span className="option-label">{opt.label}</span>
                  {selected === opt.value && <span className="option-check">✦</span>}
                </button>
              ))}
            </div>

            <button
              className={`cta-btn ${!selected ? 'cta-disabled' : ''}`}
              onClick={handleNext}
              disabled={!selected}
            >
              {currentQ < questions.length - 1 ? 'Turn the Page →' : 'Reveal My Archetype →'}
            </button>
          </div>
        )}

        {screen === 'result' && result && (
          <div className="screen result-screen fade-in">
            <div className="result-header">
              <div className="result-label">YOUR ARCHETYPE</div>
              <h2 className="result-title">{result.title}</h2>
              <div className="divider">
                <div className="divider-line" /><span className="divider-star">✦</span><div className="divider-line" />
              </div>
              <p className="result-desc">{result.desc}</p>
            </div>

            <div className="cards">
              {result.shows.map((show, i) => (
                <div key={i} className="card" style={{ animationDelay: `${i * 0.12}s` }}>
                  <div className="card-top">
                    <div className="card-left">
                      <div className="card-name">{show.name}</div>
                      <div className="card-type">{show.type}</div>
                    </div>
                    <span className="card-genre">{show.genre}</span>
                  </div>
                  <p className="card-desc">{show.desc}</p>
                </div>
              ))}
            </div>

            <div className="result-actions">
              <button className="action-btn" onClick={handleRestart}>↺ Begin Again</button>
              <button className="action-btn action-btn-gold" onClick={handleShare}>↗ Share Result</button>
            </div>

            <div className="footer-mark">ANIMADNA · YOUR TASTE · YOUR ARCHETYPE · YOUR STORY</div>
          </div>
        )}
      </div>
    </div>
  )
}
