import type { FC, JSX, MouseEventHandler, ReactElement } from "react";
import type { QueryStatus } from "@tanstack/react-query";
import SpinnerLoading from "../spinner-loading";

export interface ErrorProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  image?: ReactElement;
  isFullPage?: boolean;
  className?: string;
  title?: string;
}

interface QueryLoaderProps {
  status: QueryStatus | QueryStatus[];
  renderEmptyState?: () => JSX.Element | null;
  renderLoader?: () => JSX.Element;
  renderError?: () => JSX.Element;
  children?: JSX.Element;
}

const QueryLoader: FC<QueryLoaderProps> = ({
  renderLoader = () => <SpinnerLoading mode="overlay" size="large" />,
  //TODO: Handle Illustration component to render error state
  renderError = () => <div>Error...</div>,
  children,
  status,
}) => {
  const isSuccess = Array.isArray(status)
    ? status.every((item) => item === "success")
    : status === "success";

  const isLoading = Array.isArray(status)
    ? status.some((item) => item === "loading")
    : status === "loading";

  const isError = Array.isArray(status)
    ? status.some((item) => item === "error")
    : status === "error";

  return (
    <>
      {!isError && isLoading && renderLoader()}
      {isError && !isLoading && renderError()}
      {isSuccess && children}
    </>
  );
};

export default QueryLoader;
