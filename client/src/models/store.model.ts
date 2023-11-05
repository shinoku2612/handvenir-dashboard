type PersistState = {
    themeMode: "dark" | "light";
    themeColor: string;
    screenWidth: number;
};
type PersistAction = {
    setThemeMode: (mode: PersistState["themeMode"]) => void;
    setThemeColor: (mode: PersistState["themeColor"]) => void;
    setScreenWidth: (width: PersistState["screenWidth"]) => void;
};

type UnPersistState = {
    activeMenu: boolean;
    activeSetting: boolean;
};
type UnPersistAction = {
    setActiveMenu: (activeMenu: UnPersistState["activeMenu"]) => void;
    toogleActive: (callback: (state: boolean) => boolean) => void;
    setActiveSetting: (activeSetting: UnPersistState["activeSetting"]) => void;
};

export type { PersistState, PersistAction, UnPersistState, UnPersistAction };
