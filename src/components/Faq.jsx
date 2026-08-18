import { faqs } from '../data/itinerary.js'

export default function Faq() {
  return (
    <section id="faq">
      <div className="section-head">
        <span className="section-num">05</span>
        <h2>常見問題整理</h2>
      </div>
      {faqs.map((item, i) => (
        <div className="faq-item" key={i}>
          <div className="faq-q">{item.q}</div>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </section>
  )
}
