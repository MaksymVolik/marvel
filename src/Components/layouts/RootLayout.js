import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Layout = () => {

    return (
        <div className="App container">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;
