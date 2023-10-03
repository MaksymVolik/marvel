import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ComicsList from '../comicsList/ComicsList';

export function Component() {
    const [selectedComics, setComics] = useState(null);

    const onComicsSelected = (id) => {
        setComics(id);
    }
    return (
        <>
            <Helmet>
                <title>Comics page</title>
                <meta name="description" content="Page with list of our comics" />
            </Helmet>
            <ErrorBoundary>
                <ComicsList
                    onComicsSelected={onComicsSelected}
                    comicsId={selectedComics} />
            </ErrorBoundary>
        </>
    )
}

Component.displayName = "ComicsPage";