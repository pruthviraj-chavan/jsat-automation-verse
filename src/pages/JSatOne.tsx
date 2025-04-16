
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JSatOne = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to JSatOne website
    window.location.href = "https://www.jsatone.com/";
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-jspurple/10 to-jsaccent/10">
      <div className="text-center">
        <div className="mb-4 animate-pulse">
          <div className="inline-block w-16 h-16 rounded-full border-4 border-jspurple border-t-transparent animate-spin"></div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Redirecting to JSatOne...</h1>
        <p className="text-gray-600 dark:text-gray-300">Please wait while we redirect you to the JSatOne website.</p>
      </div>
    </div>
  );
};

export default JSatOne;
