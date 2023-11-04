"use client";
import theme from "@/configs/theme.config";
import {
    PersistAction,
    PersistState,
    UnPersistAction,
    UnPersistState,
} from "@/models/store.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePersistStore = create<PersistState & PersistAction>()(
    persist(
        (set, get) => ({
            themeMode: "light",
            themeColor: theme[0].color,
            setThemeMode: (mode) => set({ themeMode: mode }),
            setThemeColor: (color) => set({ themeColor: color }),
            screenWidth: 0,
            setScreenWidth: (width) => set({ screenWidth: width }),
        }),
        { name: "appStore" },
    ),
);
export const useUnPersistStore = create<UnPersistState & UnPersistAction>()(
    (set, get) => ({
        activeMenu: true,
        setActiveMenu: (activeMenu) => set({ activeMenu: activeMenu }),
        toogleActive: (callback) =>
            set({ activeMenu: callback(get().activeMenu) }),
    }),
);
