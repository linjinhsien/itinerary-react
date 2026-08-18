import { liveNotes, liveNotesIntro, liveNotesFooter } from '../data/itinerary.js'

export default function LiveNotes() {
  return (
    <section id="live-notes">
      <div className="section-head">
        <span className="section-num">06</span>
        <h2>現場實用筆記（逐日整理）</h2>
      </div>
      <div className="callout new">{liveNotesIntro}</div>

      {liveNotes.map((note) => (
        <details key={note.title}>
          <summary>{note.title}</summary>
          <div className="check-list">
            <div
              className="faq-a"
              style={{ padding: '10px 0' }}
              dangerouslySetInnerHTML={{ __html: note.html }}
            />
            {note.list && (
              <ul className="plain" style={{ marginTop: '6px' }}>
                {note.list.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            )}
            {note.htmlAfterList && (
              <div
                className="faq-a"
                style={{ padding: '10px 0 0' }}
                dangerouslySetInnerHTML={{ __html: note.htmlAfterList }}
              />
            )}
            {note.playlists &&
              note.playlists.map((p) => (
                <div className="meal-note" key={p.url}>
                  📺{' '}
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                </div>
              ))}
            {note.sources && (
              <div className="faq-a" style={{ padding: '6px 0 0' }}>
                資料來源：
                {note.sources.map((s, i) => (
                  <span key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.title}
                    </a>
                    {i < note.sources.length - 1 ? '、' : ''}
                  </span>
                ))}
              </div>
            )}
          </div>
        </details>
      ))}

      <div
        className="callout new"
        dangerouslySetInnerHTML={{ __html: liveNotesFooter }}
      />
    </section>
  )
}
