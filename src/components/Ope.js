import { useStore } from '../store/StoreProvider';

const Ope = () => {
    const { ope } = useStore();
    return (
        <label>{ ope }</label>
    );
}

export default Ope;