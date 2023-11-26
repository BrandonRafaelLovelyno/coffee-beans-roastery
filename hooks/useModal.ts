import { Coffee } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "register" | "login" | "buy" | "logout";

interface ModalStore {
  type: ModalType;
  isOpen: boolean;
  onOpen: (type: ModalType, { coffee }: { coffee?: Coffee }) => void;
  onClose: () => void;
  coffee?: Coffee;
}

const useModal = create<ModalStore>((set) => ({
  coffee: undefined,
  type: "register",
  isOpen: false,
  onOpen: (type: ModalType, { coffee }) => set({ isOpen: true, type, coffee }),
  onClose: () => set({ isOpen: false }),
}));

export default useModal;
