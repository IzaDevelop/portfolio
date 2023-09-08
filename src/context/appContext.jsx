import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AppContext = createContext({});

export function AppContextProvider(props) {
    // DARK MODE

    const [theme, setTheme] = useState(() => localStorage.theme === "dark");

    function handleToggleTheme() {
        setTheme(!theme);
    }

    useEffect(() => {
        const rootElement = window.document.documentElement;
        const currentTheme = theme;

        const prevTheme = currentTheme ? "light" : "dark";
        rootElement.classList.remove(prevTheme);

        const nextTheme = currentTheme ? "dark" : "light";
        rootElement.classList.add(nextTheme);

        localStorage.setItem("theme", nextTheme);
    }, [theme]);

    // TAMANHO DE TELA

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setMenu(windowDimensions.width > 768 ? false : menu);
    }, [windowDimensions]);

    // ROUTER-DOM

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <AppContext.Provider
            value={{
                theme,
                setTheme,
                handleToggleTheme,

                menu, 
                setMenu,

                location,
                navigate,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);