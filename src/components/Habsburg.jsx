import { habsburgIntro, habsburgSections, habsburgSummary } from '../data/itinerary.js'
import habsburgMap from '../assets/habsburg-map.jpg'

export default function Habsburg() {
  return (
    <section id="habsburg">
      <div className="section-head">
        <span className="section-num">07</span>
        <h2>哈布斯堡王朝與這趟旅程</h2>
      </div>
      <div className="callout new">{habsburgIntro}</div>

      <img
        src={habsburgMap}
        alt="哈布斯堡王朝與這趟旅程地圖：義大利文版歷史分析圖，標示米蘭的哈布斯堡統治、瑞士的哈布斯堡發源地與獨立戰爭、巴伐利亞的維特爾斯巴赫王朝與茜茜公主聯姻關係"
        style={{
          width: '100%',
          borderRadius: '10px',
          border: '1px solid var(--line)',
          marginBottom: '18px',
        }}
      />

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
