import {Routes as ReactRoutes, Route} from 'react-router-dom';
import Binding from './components/Binding'
import Plain from './components/Plain'

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Binding />} />
      <Route path="/plain" element={<Plain />} />
    </ReactRoutes>
  );
}

export default Routes;
