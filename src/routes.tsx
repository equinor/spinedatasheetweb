import { Link, Outlet, RouteObject } from 'react-router-dom';
import ContractorPage from './pages/ContractorPage';
import JIP33TabView from './pages/JIP33TabView';
import ProjectPage from './pages/ProjectPage'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <div>
                {/* <section style={{ display: 'inline-flex', gap: 10 }}>
                    <Link to={''}>Home1</Link>
                    <Link to={'page1'}>Page 1</Link>
                    <Link to={'page2'}>Page 2</Link>
                </section> */}
                <Outlet></Outlet>
            </div>
        ),
        children: [
            {
                index: true,
                element: <ProjectPage />,
            },
            {
                path: 'contractor/*',
                element: <ContractorPage />,
            },
            {
                path: 'contractor/datasheet/*',
                element: <JIP33TabView />,
            },
        ],
    },
];

export default routes;
