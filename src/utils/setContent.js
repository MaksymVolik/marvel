import Sceleton from '../Components/skeleton/Skeleton';
import Spinner from '../Components/spinner/Spinner';
import ErrorMessage from '../Components/errorMessage/ErrorMessage';

const setContent = (process, Component, data) => {
    switch (process) {
        case 'initial':
            return null
        case 'waiting':
            return <Sceleton />;
        case 'loading':
            return <Spinner />;
        case 'confirmed':
            return <Component data={data} />;
        case 'error':
            return <ErrorMessage />;
        default:
            throw new Error('Unexpected process status');
    }
}

export default setContent;
