import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useCallback } from 'react';

const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const getQueryParam = (key) => queryParams.get(key);

  const setQueryParam = useCallback((key, value) => {
    const newParams = new URLSearchParams(queryParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    navigate(`${location.pathname}?${newParams.toString()}`, { replace: true });
  }, [location.pathname, navigate]);

  return { getQueryParam, setQueryParam };
};

export default useQueryParams;