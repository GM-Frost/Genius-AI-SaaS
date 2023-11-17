import { create } from "zustand";
interface IUseProModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

//GLOBAL STATE CONTROLS FOR THE MODAL
export const UseProModal = create<IUseProModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
