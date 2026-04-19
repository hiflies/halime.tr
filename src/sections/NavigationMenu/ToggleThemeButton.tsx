import useDetectColorScheme from "../../hooks/useDetectColorScheme.ts";
import {useEffect, useState} from "react";

export default function ToggleThemeButton() {
    const detectedScheme = useDetectColorScheme();
    const [scheme, setScheme] = useState(detectedScheme);

    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add(scheme);
    }, [scheme]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setScheme(detectedScheme);
    }, [detectedScheme]);

    return (
        <svg onClick={() => setScheme(scheme === 'dark' ? 'light' : 'dark')}
             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            {
                scheme === 'dark' &&
                <use href="/icons.svg#sun-icon"></use>
            }
            {
                scheme === 'light' &&
                <use href="/icons.svg#moon-icon"></use>
            }
        </svg>
    )
}