import PropTypes from "prop-types";

const YouTubeVideo = ({ title, description, videoId, playTitle }) => {
    return (
        <section className="youtube-video">
            <h2 className="youtube-video__title">{title}</h2>
            <p className="youtube-video__description">{description}</p>

            <div className="youtube-video__video-wrapper">
                <lite-youtube videoid={videoId} playlabel={playTitle}></lite-youtube>
            </div>
        </section>
    );
}

YouTubeVideo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    videoId: PropTypes.string,
    playTitle: PropTypes.string,
};

export default YouTubeVideo;