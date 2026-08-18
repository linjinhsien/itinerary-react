import { flights, flightNote } from '../data/itinerary.js'

export default function Flights() {
  return (
    <section id="flights">
      <div className="section-head">
        <span className="section-num">01</span>
        <h2>航班資訊</h2>
      </div>
      {flights.map((f, i) => (
        <div className="flight-row" key={i}>
          <span className="flight-dir">{f.dir}</span>
          <span className="flight-code mono">{f.code}</span>
          <span className="flight-route">{f.route}</span>
        </div>
      ))}
      <div className="callout">{flightNote}</div>
    </section>
  )
}
