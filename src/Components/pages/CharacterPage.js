import SinglePage from "../singlePage/SinglePage";
import AppBanner from "../appBanner/AppBanner";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

export function Component() {
    return (
        <>
            <AppBanner />
            <ErrorBoundary>
                <SinglePage page="character" />
            </ErrorBoundary>
        </>
    )
}

Component.displayName = "CharacterPage";