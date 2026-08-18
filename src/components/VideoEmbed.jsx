export default function VideoEmbed({ embed, title, caption }) {
  return (
    <div className="day-video">
      <div className="day-video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${embed}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="day-video-caption">{caption}</div>
    </div>
  )
}
