import LaunchList from './LaunchList';
import LaunchesProvider from './context/launches';

const LocalizationManagement = () => {
    return (
        <LaunchesProvider>
            <LaunchList />
        </LaunchesProvider>
    )
}

export default LocalizationManagement