import Homepage from './pages/homepage';
import List from './pages/list';
import Root from './layouts/Root';
import Result from './pages/result';
import Error from './pages/error';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: 'list',
        element: <List />,
      },
      {
        path: 'result',
        element: <Result />,
      },
    ],
  },
];

export { routes };
