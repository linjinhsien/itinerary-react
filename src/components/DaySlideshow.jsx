import { useState, useEffect, useCallback, useRef } from 'react'
import { days, itineraryCallout } from '../data/itinerary.js'
import VideoEmbed from './VideoEmbed.jsx'

export default function DaySlideshow() {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)

  const goTo = useCallback((i) => {
    setIndex(Math.max(0, Math.min(days.length - 1, i)))
  }, [])

  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [prev, next])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 50) prev()
    else if (delta < -50) next()
    touchStartX.current = null
  }

  const day = days[index]
  const classes = ['slide-card']
  if (day.highlight) classes.push('highlight')
  if (day.today) classes.push('today')

  return (
    <section id="itinerary">
      <div className="section-head">
        <span className="section-num">02</span>
        <h2>每日行程</h2>
      </div>

      <div
        className="slideshow"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          className="slide-arrow slide-arrow-left"
          onClick={prev}
          disabled={index === 0}
          aria-label="上一天"
        >
          ‹
        </button>

        <div className={classes.join(' ')}>
          <div className="slide-progress">
            {index + 1} / {days.length}
          </div>
          <div className="day-dot slide-dot">{day.num}</div>
          <div className="day-top">
            <span className="day-date">{day.date}</span>
            <span className="day-hotel">{day.hotel}</span>
          </div>
          <div className="day-desc">{day.desc}</div>
          {day.flag && <span className="day-flag">{day.flag}</span>}
          {day.meals && <div className="meal-note">{day.meals}</div>}
          {day.videos &&
            day.videos.map((v) => <VideoEmbed key={v.embed} {...v} />)}
          {day.playlists &&
            day.playlists.map((p) => (
              <div className="meal-note" key={p.url}>
                📺{' '}
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              </div>
            ))}
          {day.videosAfterPlaylist &&
            day.videosAfterPlaylist.map((v) => (
              <VideoEmbed key={v.embed} {...v} />
            ))}
        </div>

        <button
          className="slide-arrow slide-arrow-right"
          onClick={next}
          disabled={index === days.length - 1}
          aria-label="下一天"
        >
          ›
        </button>
      </div>

      <div className="slide-dots">
        {days.map((d, i) => (
          <button
            key={d.num}
            className={`slide-dot-btn${i === index ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`跳到第${d.num}天`}
          />
        ))}
      </div>

      <div className="callout new">
        <b>{itineraryCallout.label}</b>
        {itineraryCallout.text}
      </div>
    </section>
  )
}
