import { useEffect, useMemo, useState } from "react";

const useStore = <T, F>(
    store: (callback: (state: T) => unknown) => unknown,
    callback: (state: T) => F,
) => {
    const result = store(callback) as F;
    const [data, setData] = useState<F>();

    useEffect(() => {
        setData(result);
    }, [result]);

    const value = useMemo(() => data, [data]);
    return value;
};
export default useStore;
