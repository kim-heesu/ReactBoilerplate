import {create} from 'zustand';

export const useLangStore = create((set)=>({
    currentLang: 'ko'
}))