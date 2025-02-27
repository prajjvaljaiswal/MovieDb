import { useRouteError, isRouteErrorResponse  } from "react-router-dom";

const Error = ()=> {
    
    const error = useRouteError();

    return(
        <div className="min-h-screen bg-zinc-900 text-white flex justify-center items-center">
            <h1>OPPS!</h1>
            <h2>{isRouteErrorResponse(error)
          ? `${error.status} : ${error.statusText}`
          : "An unexpected error occurred"}
          </h2>
        </div>
    )
}

export default Error;