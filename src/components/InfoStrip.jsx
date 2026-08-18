import { infoStrip } from '../data/itinerary.js'

export default function InfoStrip() {
  return (
    <div className="info-strip">
      {infoStrip.map((cell) => (
        <div className="info-cell" key={cell.label}>
          <div className="label">{cell.label}</div>
          <div
            className={`value${cell.small ? ' small' : ''}${cell.mono ? ' mono' : ''}`}
            dangerouslySetInnerHTML={{ __html: cell.value }}
          />
        </div>
      ))}
    </div>
  )
}
