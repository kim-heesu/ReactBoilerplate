export interface UIStoreType {
    isToastOpen: boolean;
    openToast: () => void;
    closeToast: () => void;

    // isModalOpen: boolean;
    // openModal: () => void;
    // closeModal: () => void;
}