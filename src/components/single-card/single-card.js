import React from "react"

import IconPlay from "../../images/single_play_btn.svg"
import IconPause from "../../images/pause-music.svg"

const SigleCard = ({
  name,
  image,
  visibly,
  isPlaying,
  playSingle,
  pauseSingle,
}) => {
  return (
    visibly && (
      <div className="single-card_wrapper">
        <div
          style={
            {
              // backgroundImage: `url(${MusicPlaceholder})`
            }
          }
          className="single-card"
        >
          <img src={image.lg.url} alt="" className="single-card-img" />
          <div
            className="single-card_overlay"
            onClick={isPlaying ? pauseSingle : playSingle}
          >
            {isPlaying ? (
              <img
                src={IconPause}
                className="single-card_overlay-play-btn"
                alt="pause"
              />
            ) : (
              <img
                src={IconPlay}
                className="single-card_overlay-play-btn"
                alt="play"
              />
            )}
          </div>
        </div>
        {/* track name */}
        <h4 className="title_h4">{name}</h4>
      </div>
    )
  )
}
export default SigleCard
