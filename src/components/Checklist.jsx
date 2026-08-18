import { useState } from 'react'
import { checklist } from '../data/itinerary.js'

function ChecklistGroup({ group }) {
  const [checked, setChecked] = useState(() => new Set())

  const toggle = (idx) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  return (
    <details open={group.open}>
      <summary>{group.title}</summary>
      <div className="check-list">
        {group.items.map((item, idx) => (
          <div
            className={`check-item${checked.has(idx) ? ' checked' : ''}`}
            key={idx}
            onClick={() => toggle(idx)}
          >
            <div className="box" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </details>
  )
}

export default function Checklist() {
  return (
    <section id="checklist">
      <div className="section-head">
        <span className="section-num">03</span>
        <h2>行前打包清單</h2>
      </div>
      {checklist.map((group) => (
        <ChecklistGroup group={group} key={group.title} />
      ))}
    </section>
  )
}
