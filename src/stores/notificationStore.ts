import { create } from "zustand";

type NotificationType = "success" | "error";

interface Notification {
  type: NotificationType;
  message: string;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification],
    })),
}));
