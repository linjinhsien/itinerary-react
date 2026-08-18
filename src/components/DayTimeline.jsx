import { days, itineraryCallout } from '../data/itinerary.js'
import VideoEmbed from './VideoEmbed.jsx'

export default function DayTimeline() {
  return (
    <section id="itinerary">
      <div className="section-head">
        <span className="section-num">02</span>
        <h2>每日行程</h2>
      </div>
      <div className="timeline">
        {days.map((day) => {
          const classes = ['day']
          if (day.highlight) classes.push('highlight')
          if (day.today) classes.push('today')
          return (
            <div className={classes.join(' ')} key={day.num}>
              <div className="day-dot">{day.num}</div>
              <div className="day-card">
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
            </div>
          )
        })}
      </div>
      <div className="callout new">
        <b>{itineraryCallout.label}</b>
        {itineraryCallout.text}
      </div>
    </section>
  )
}
