
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-brand-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('notFound.title')}</h2>
        <p className="text-gray-600 mb-8">
          {t('notFound.description')}
        </p>
        <Button asChild>
          <Link to="/" className="inline-flex items-center">
            {t('notFound.backHome')}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
