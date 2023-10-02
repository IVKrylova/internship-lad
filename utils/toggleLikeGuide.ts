import { TGuides } from "@types";

export const toggleLikeGuide = (
  arr: TGuides | null,
  id: number
): TGuides | null => {
  if (arr) {
    return arr.map((el) => {
      if (el.id === id) {
        el.liked ? (el.liked = false) : (el.liked = true);
      }
      return el;
    });
  }
  return null;
};
