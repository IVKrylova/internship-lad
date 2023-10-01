import { TGuides } from "@types";

export const toggleLikeGuide = (arr: TGuides, id: number): TGuides => {
  return arr.map((el) => {
    if (el.id === id) {
      el.liked ? (el.liked = false) : (el.liked = true);
    }
    return el;
  });
};
