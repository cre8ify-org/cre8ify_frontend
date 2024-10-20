import {create} from 'zustand';

interface StoreState {
  isRegistered: boolean;
  updateIsRegistered: (data: boolean) => void;
}

export const store = create<StoreState>((set) => ({
  isRegistered: true,

  updateIsRegistered: (data: boolean) => set(() => ({isRegistered: data}))
}))