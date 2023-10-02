import { TGuides } from "@types";

export const updateAvatar = (arr: TGuides, id: number, avatar: string): TGuides => {
  return arr.map((el) => {
    if (el.id === id) {
      el.avatar = avatar;
    }
    return el;
  });
};
