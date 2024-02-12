let modetheme: string | null = null;

export const getThememode = (): string | null => {
    if (typeof window !== 'undefined') {
        const thememode = localStorage.getItem('color-theme-mode');
        if (thememode) {
            const modetheme = JSON.parse(thememode);
            return modetheme;
        }
    }
    return null;
};