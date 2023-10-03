// import { lazy, Suspense } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';

import Layout from '../layouts/RootLayout';
import ComicsLayout from '../layouts/ComicsLayout';
// import Spinner from '../spinner/Spinner';

import './app.scss';

// const MainPage = lazy(() => import('../pages/MainPage'))
// const ComicsPage = lazy(() => import('../pages/ComicsPage'))
// const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))
// const Page404 = lazy(() => import('../pages/404'))

// function withSuspens(Component) {
//     return (
//         <Suspense fallback={<Spinner />}>
//             <Component />
//         </Suspense>
//     )
// }

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index lazy={() => import('../pages/MainPage')} />
            <Route path='comics' element={<ComicsLayout />}>
                <Route index lazy={() => import('../pages/ComicsPage')} />
                <Route path=':id' lazy={() => import('../pages/SingleComicPage')} />
            </Route>
            <Route path='character/:id' lazy={() => import('../pages/CharacterPage')} />
            <Route path='*' lazy={() => import('../pages/404')} />
        </Route>
    )
)

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
