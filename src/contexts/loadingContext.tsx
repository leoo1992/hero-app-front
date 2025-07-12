import {
  createContext,
  useState,
  useCallback,
  type ReactNode,
  useMemo,
} from "react";

interface LoadingContextData {
  loading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextData>({
  loading: false,
  showLoading: () => {},
  hideLoading: () => {},
});

export function LoadingProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [loading, setLoading] = useState(false);

  const showLoading = useCallback(() => setLoading(true), []);
  const hideLoading = useCallback(() => setLoading(false), []);

  const value = useMemo(
    () => ({ loading, showLoading, hideLoading }),
    [loading, showLoading, hideLoading]
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export default LoadingContext;
