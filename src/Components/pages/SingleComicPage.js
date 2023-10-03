import SinglePage from "../singlePage/SinglePage";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

export function Component() {
    return (
        <>
            <ErrorBoundary>
                <SinglePage page="comic" />
            </ErrorBoundary>
        </>
    )
}

Component.displayName = "SingleComicPage";