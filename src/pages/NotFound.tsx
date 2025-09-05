import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dashboard-bg">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary-deep">404 - Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! The page you're looking for doesn't exist</p>
        <a href="/" className="text-primary-deep hover:text-primary-deep/80 underline font-medium">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
