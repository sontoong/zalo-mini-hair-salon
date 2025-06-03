import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import BannerImg from "../../static/homepage-banner.png";
import PlayIcon from "../../static/video-play-icon.png";
import YouTube, { YouTubeProps } from "react-youtube";
import clsx from "clsx";

const Promotion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    console.log("Real index: ", swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="h-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        className="h-full"
        pagination={true}
        modules={[Pagination]}
        // loop={true}
        onSlideChange={handleSlideChange}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="!flex items-center">
            <div className="relative h-full w-full overflow-hidden">
              {item.type === "image" ? (
                <img
                  src={item.image}
                  className="size-full object-cover object-top"
                  style={{ objectPosition: "0 -25px" }}
                />
              ) : (
                <VideoContainer
                  videoId={item.id}
                  isActive={activeIndex === index}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const VideoContainer: FC<{ videoId?: string; isActive: boolean }> = ({
  videoId,
  isActive,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!isActive && playerRef.current && isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "240px",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
    },
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();

    if (playerRef.current && isActive) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  const onStateChange: YouTubeProps["onStateChange"] = (event) => {
    // YouTube player states: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (cued)
    console.log(event.data);
    setIsPlaying(event.data === 1);
  };

  return (
    <div className="relative overflow-hidden" onClick={togglePlayPause}>
      {/* Overlay */}
      <div className="absolute inset-0 z-10" />
      {/* Video player */}
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        onStateChange={onStateChange}
      />
      {/* Controls */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <button
          className={clsx(
            "duration-3000 rounded-full bg-black bg-opacity-50 p-4 text-white transition-all",
            { "opacity-0": isPlaying },
          )}
        >
          {isPlaying ? (
            // Pause Icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            // Play Icon
            <div className="size-[15px]">
              <img src={PlayIcon} alt="" className="size-full object-cover" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
const items = [
  { id: "2g811Eo7K8U", type: "video" },
  { id: "O5O3yK8DJCc", type: "video" },
  { image: BannerImg, type: "image" },
];

export default Promotion;
