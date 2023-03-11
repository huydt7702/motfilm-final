import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/client/Home';
import NewMovie from '~/pages/client/NewMovie';
import Settings from '~/pages/client/Settings';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.newMovie, component: NewMovie },
    { path: config.routes.settings, component: Settings, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
