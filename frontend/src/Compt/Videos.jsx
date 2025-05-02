
const VideoSection = ({ margin }) => {
  const marginTop = margin ? "mt-20" : "";

  return (
    <section className={`bg-white text-gray-800 shadow-md p-8 h-[70vh] flex flex-col justify-between ${marginTop}`}>
      <h2 className="text-xl font-semibold mb-6 text-center">Featured Videos</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-1">
        {/* First Video */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <iframe
            className="w-full h-64 md:h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/Ej9nl8IDQNQ?si=7kOTi7LYkqaocjp_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Second Video (optional, can duplicate or replace with another) */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jrmP7cSSKWE?si=a025Q6nEa2yA1A4y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
