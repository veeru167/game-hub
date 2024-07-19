import platforms from "../components/data/platforms";

const usePlatfroms = () => ({ data: platforms, isLoading: false, error: null }); //useData<Platform>("/platforms/lists/parents");
export default usePlatfroms;
