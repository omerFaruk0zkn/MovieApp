import { IoClose } from "react-icons/io5";
import useFetchDetails from "../hooks/useFetchDetails";
import PropTypes from "prop-types";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(
    `/${media_type}/${data?.id}/videos`
  );

  return (
    <section className="fixed bg-neutral-700/50 inset-0 z-40 flex justify-center items-center">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative">
        <button
          onClick={close}
          className="absolute -right-1 -top-6 text-3xl z-50 cursor-pointer"
        >
          <IoClose />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

VideoPlay.propTypes = {
  data: PropTypes.object,
  close: PropTypes.func,
  media_type: PropTypes.string,
};

export default VideoPlay;
