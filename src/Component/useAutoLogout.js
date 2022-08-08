import { useEffect, useRef, useState } from "react";

export default function AutoLogout() {
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const [timerId, setTimerId] = useState(false);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    useEffect(() => {
        const autoLogout = () => {
            if (document.visibilityState === "hidden") {
                // set timer to log user out
                const id = window.setTimeout(() => setIsLoggedOut(true), 10 * 1000);
                setTimerId(id);
            } else {
                // clear existing timer
                window.clearTimeout(timerId);
            }
        };

        document.addEventListener("visibilitychange", autoLogout);

        return () => document.removeEventListener("visibilitychange", autoLogout);
    }, [timerId]);

    return (
        <div className="App">
            <h1>{isLoggedOut ? "Goodbye" : "Welcome"}</h1>
            <h2>
                {isLoggedOut ? "You have been logged out" : "Your seesion is active"}
            </h2>
            <p>This component has rendered {renderCount.current} time(s)</p>
        </div>
    );
}

