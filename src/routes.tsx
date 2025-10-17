import {Routes as ReactRoutes, Route} from 'react-router-dom';
import Body from './Body'

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Body />} />
    </ReactRoutes>
  );
}

export default Routes;
