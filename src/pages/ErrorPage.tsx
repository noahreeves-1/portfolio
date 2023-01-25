import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page" className="flex h-screen flex-col">
        <div className="m-auto text-center">
          <h1 className="text-3xl font-bold">Oops! {error.status}</h1>
          <p className="mt-4">Sorry, an unexpected error has occurred.</p>
          <p className="mt-4 opacity-50">{error.statusText}</p>
          {/* not sure if I'll need this below but I'll keep it */}
          <div>
            {error.data?.message && (
              <p>
                <i>{error.data.message}</i>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
}
