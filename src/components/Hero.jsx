import { heroInfo } from '../data/itinerary.js'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-eyebrow">{heroInfo.eyebrow}</div>
      <h1>
        {heroInfo.title[0]}
        <br />
        {heroInfo.title[1]}
      </h1>
      <p className="sub">{heroInfo.subtitle}</p>
      <div className="hero-tags">
        {heroInfo.tags.map((tag) => (
          <span key={tag.text} className={`tag${tag.strong ? ' strong' : ''}`}>
            {tag.text}
          </span>
        ))}
      </div>

      <svg className="peaks-svg" viewBox="0 0 800 90" preserveAspectRatio="none">
        <polyline
          points="0,90 60,60 120,90 200,30 260,90 330,50 400,10 470,55 540,90 610,40 680,70 740,20 800,90"
          fill="none"
          stroke="#5f8298"
          strokeWidth="2"
        />
        <circle cx="400" cy="10" r="3.5" fill="#c1953f" />
        <circle cx="200" cy="30" r="3.5" fill="#c1953f" />
        <circle cx="740" cy="20" r="3.5" fill="#c1953f" />
      </svg>
    </div>
  )
}
