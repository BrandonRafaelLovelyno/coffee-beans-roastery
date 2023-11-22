import { create } from "zustand";

export type ModalType = "register" | "login";

interface ModalStore {
  type: ModalType;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

const useModal = create<ModalStore>((set) => ({
  type: "register",
  isOpen: false,
  onOpen: (type: ModalType) => set({ isOpen: true, type }),
  onClose: () => set({ isOpen: false }),
}));

export default useModal;
