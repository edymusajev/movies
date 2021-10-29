export const VideoPlayer = ({ video }: any) => {
  console.log(video);
  return (
    <iframe
      className="w-full h-72"
      src={`https://www.youtube.com/embed/${video.key}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
