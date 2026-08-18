import { otherNotes } from '../data/itinerary.js'

export default function OtherNotes() {
  return (
    <section id="other">
      <div className="section-head">
        <span className="section-num">04</span>
        <h2>其他提醒</h2>
      </div>
      <ul className="plain">
        {otherNotes.map((note, i) => (
          <li className={note.isNew ? 'new-item' : ''} key={i}>
            <b>{note.bold}</b>
            {note.text}
          </li>
        ))}
      </ul>
    </section>
  )
}
