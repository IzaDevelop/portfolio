import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";

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

    // Screen Size

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

    // PDF Download

    const PDFen = 'https://izadeveloper.vercel.app/resume-izabelle-frontend.pdf'
    const PDFpt = 'https://izadeveloper.vercel.app/cv-izabelle-frontend.pdf'

    const currentLang = localStorage.getItem("i18nextLng") || "pt";
    const PDFFile = currentLang === "pt" ? PDFpt : PDFen;

    const handleDownload = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    // Change Language

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
    };

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

                handleDownload,
                PDFen,
                PDFpt,
                PDFFile,

                changeLanguage,
                t
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);