import { Background } from '../styles/structure.styled';
import Cover from './Cover';
import PastExperience from './PastExperience';
import RelevantExperience from './RelevantExperience';

// =============================================================================

const Binding = () => {
	return (
		<Background>
			<Cover />
			<RelevantExperience />
			<PastExperience />
		</Background>
	)
}

export default Binding
