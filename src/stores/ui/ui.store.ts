import type { UIStoreType } from '@/types';
import { create } from 'zustand';

export const useUIStore = create<UIStoreType>((set)=>({
    // 토스트 상태
    isToastOpen : false,
    openToast: () => set({isToastOpen: true}),
    closeToast: () => set({isToastOpen: false}),

    // // 모달 상태 뭐 추가로 필요하다면? 
    // isModalOpen : false,
    // openModal: () => set({isModalOpen: true}),
    // closeModal: () => set({isModalOpen: false}),
}));