import React, { useState } from "react";
import styles from "./VideoTourCards.module.css";

interface VideoCard {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl?: string;
}

const videoCards: VideoCard[] = [
  {
    id: 1,
    title: "NIS Primary School",
    thumbnail:
      "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753050/_OP_8859_htwgyz.jpg",
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Tour.mp4?alt=media&token=34537726-c142-4e8c-a194-064ca15cec98",
  },
  {
    id: 2,
    title: "NIS Secondary School",
    thumbnail:
      "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753050/_OP_8857_ha80da.jpg",
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Tour.mp4?alt=media&token=34537726-c142-4e8c-a194-064ca15cec98",
  },
  {
    id: 3,
    title: "NIS Hostel",
    thumbnail:
      "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753045/_OP_8751_kymx7t.jpg",
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/Tour.mp4?alt=media&token=34537726-c142-4e8c-a194-064ca15cec98",
  },
];

const VideoTourCards: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handlePlayVideo = (cardId: number) => {
    setActiveCard(cardId);
    console.log(`Playing video for card ${cardId}`);
    // Video play logic will be added when video links are provided
  };

  const activeVideo = videoCards.find((card) => card.id === activeCard);

  return (
    <section className={styles.videoTourSection}>
      <div className={styles.container}>
        <div className={styles.cardsStack}>
          {videoCards.map((card, index) => (
            <div
              key={card.id}
              className={`${styles.videoCard} ${styles[`card${index + 1}`]}`}
              style={{ zIndex: videoCards.length - index }}
            >
              <div className={styles.cardContent}>
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className={styles.cardImage}
                />
                <div className={styles.overlay}>
                  <button
                    className={styles.playButton}
                    onClick={() => handlePlayVideo(card.id)}
                    aria-label={`Play ${card.title} video`}
                  >
                    <div className={styles.playIcon}>
                      <svg
                        width="24"
                        height="28"
                        viewBox="0 0 24 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5 12.134C23.8333 12.8873 23.8333 14.7794 22.5 15.5327L3 26.5981C1.66667 27.3514 -1.67564e-06 26.4054 -1.57219e-06 24.8988L-4.68158e-07 2.76788C-3.64708e-07 1.26129 1.66667 0.315291 3 1.06858L22.5 12.134Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Video Player Overlay */}
        {activeVideo && (
          <div
            className={styles.videoPlayerOverlay}
            onClick={() => setActiveCard(null)}
          >
            <div
              className={styles.videoPlayerModal}
              onClick={(e) => e.stopPropagation()}
            >
              <video controls autoPlay className={styles.videoPlayer}>
                <source src={activeVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className={styles.closeButton}
                onClick={() => setActiveCard(null)}
                aria-label="Close video player"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTourCards;
