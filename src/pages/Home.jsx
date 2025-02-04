import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { bannerData } = useSelector((state) => state.movieoData);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: popularTvShowData } = useFetch("/tv/popular");
  const { data: onTheAirShowData } = useFetch("/tv/on_the_air");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={bannerData}
        heading="Trending Show"
        trending={true}
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading="Now Playing"
        media_type="movie"
      />
      <HorizontalScrollCard
        data={topRatedData}
        heading="Top Rated Movies"
        media_type="movie"
      />
      <HorizontalScrollCard
        data={popularTvShowData}
        heading="Popular TV Shows"
        media_type="tv"
      />
      <HorizontalScrollCard
        data={onTheAirShowData}
        heading="On The Air"
        media_type="tv"
      />
    </div>
  );
};

export default Home;
