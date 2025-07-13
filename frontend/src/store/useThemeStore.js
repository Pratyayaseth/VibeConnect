import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("VibeConnect-theme") || "coffee",
  setTheme:(theme)=>{
    localStorage.setItem("VibeConnect-theme",theme);
    set({theme})
  }
}))