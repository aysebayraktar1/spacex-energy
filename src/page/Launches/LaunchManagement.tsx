import LaunchList from './LaunchList';
import LaunchesProvider from './context/launches';

const LaunchesManagement = () => {
    return (
        <LaunchesProvider>
            <LaunchList />
        </LaunchesProvider>
    )
}

export default LaunchesManagement