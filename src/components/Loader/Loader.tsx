import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((state: any) => state.loading);

  return isLoading ? (
    <div className="fixed inset-0 h-screen z-[99999] flex items-center justify-center bg-black">
      <div className="bg-opacity-50">
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div>
    </div>
  ) : null;
};

export default Loader;
