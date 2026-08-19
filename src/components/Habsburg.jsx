import { habsburgIntro, habsburgSections, habsburgSummary } from '../data/itinerary.js'

export default function Habsburg() {
  return (
    <section id="habsburg">
      <div className="section-head">
        <span className="section-num">07</span>
        <h2>哈布斯堡王朝與這趟旅程</h2>
      </div>
      <div className="callout new">{habsburgIntro}</div>

      {habsburgSections.map((item, i) => (
        <div className="faq-item" key={i}>
          <div className="faq-q">{item.q}</div>
          <div
            className="faq-a"
            dangerouslySetInnerHTML={{ __html: item.a }}
          />
          {item.list && (
            <ul className="plain" style={{ marginTop: '6px' }}>
              {item.list.map((li, j) => (
                <li key={j}>{li}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div
        className="callout new"
        dangerouslySetInnerHTML={{ __html: habsburgSummary }}
      />
    </section>
  )
}
