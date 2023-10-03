import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layouts/RootLayout';
import AppBanner from '../appBanner/AppBanner';
import Spinner from '../spinner/Spinner';

import './app.scss';

const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))
const Page404 = lazy(() => import('../pages/404'))

function withSuspens(Component) {
    return (
        <Suspense fallback={<Spinner />}>
            <Component />
        </Suspense>
    )
}

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={withSuspens(MainPage)} />
                    <Route path='comics' element={<AppBanner />}>
                        <Route index element={withSuspens(ComicsPage)} />
                        <Route path=':comicId' element={withSuspens(SingleComicPage)} />
                    </Route>
                    <Route path='*' element={withSuspens(Page404)} />
                </Route>
            </Routes>
        </Router >
    );
}

export default App;