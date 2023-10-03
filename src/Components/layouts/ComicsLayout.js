import { Outlet } from 'react-router-dom';
import AppBanner from '../appBanner/AppBanner';

function ComicsLayout() {
    return (
        <>
            <AppBanner />
            <Outlet />
        </>
    );
}

export default ComicsLayout;