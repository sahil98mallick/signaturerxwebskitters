import { PaletteMode, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getDesignTokens } from "./palette";
import { parseCookies, setCookie } from "nookies";

// export const useColorTheme = () => {
//     const [mode, setMode] = React.useState<PaletteMode>("light");

//     const toggleColorMode = () =>
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

//     const modifiedTheme = React.useMemo(
//         () => createTheme(getDesignTokens(mode)),
//         [mode]
//     );
//     return {
//         theme: modifiedTheme,
//         mode,
//         toggleColorMode,
//     };
// };



const LOCAL_STORAGE_KEY = "color-theme-mode";

export const useColorTheme = () => {
    const cookies = parseCookies();
    const [user, setuser] = useState("")
    console.log("model Cookies:", cookies.colorthememode);
    const initialMode = cookies.colorthememode? cookies.colorthememode: "light";

    const [mode, setMode] = React.useState<PaletteMode>("light");
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(LOCAL_STORAGE_KEY, mode);
            setCookie(null, "colorthememode", mode)
        }
    }, [mode]);
    console.log("Currect mode", mode);

    const toggleColorMode = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        setCookie(null, "colorthememode", newMode)
    };

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};

