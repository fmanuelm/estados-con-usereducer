import { useStore } from '../store/StoreProvider';

const Result = () => {
    const { res } = useStore();
    return (
        <div>
            { res }
        </div>
    );
}

export default Result;