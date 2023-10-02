import { TGuides } from "@types";

export const updateAvatar = (
  arr: TGuides | null,
  id: number,
  avatar: string
): TGuides | null => {
  if (arr) {
    return arr.map((el) => {
      if (el.id === id) {
        el.avatar = avatar;
      }
      return el;
    });
  }
  return null;
};
