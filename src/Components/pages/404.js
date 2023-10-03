import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Helmet } from "react-helmet";

import ErrorMessage from "../errorMessage/ErrorMessage";

// export async function loader() {

// }

export function Component() {
    let navigate = useNavigate();

    return (
        <div>
            <Helmet>
                <title>404: Page not found</title>
                <meta name="description" content="This page is not found" />
            </Helmet>
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>Page doesn't exist</p>
            <div style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '16px', 'marginTop': '30px', 'color': '#9F0013', 'cursor': 'pointer' }}
                onClick={() => navigate(-1)}>Go back</div>
        </div>
    )
}

export function ErrorBoundary() {
    let error = useRouteError();
    return isRouteErrorResponse(error) ? (
        <h1>
            {error.status} {error.statusText}
        </h1>
    ) : (
        <h1>{error.message || error}</h1>
    );
}

Component.displayName = "Page404";

