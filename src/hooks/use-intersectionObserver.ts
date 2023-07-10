import { useEffect, useState } from "react";

function useIntersectionObserver(
    elementRef: { current: any; },
    { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }: any
)
{
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const updateEntry: IntersectionObserverCallback = ([entry]) =>
    {
        setEntry(entry);
    };

    useEffect(() =>
    {
        const node = elementRef?.current;
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || frozen || !node) return;

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();
    }, [elementRef, threshold, root, rootMargin, frozen]);

    return entry;
}
export default useIntersectionObserver;