import { TGuides } from "@types";

export const getGuidesFromLocalStorage = (): TGuides | false => {
  const data = localStorage.getItem("guides");
  if (data !== null) {
    const arr = JSON.parse(data);
    if (
      arr?.length > 0 &&
      "id" in arr[0] &&
      "email" in arr[0] &&
      "first_name" in arr[0] &&
      "last_name" in arr[0] &&
      "avatar" in arr[0] &&
      "liked" in arr[0]
    ) {
      return arr;
    } else return false;
  } else return false;
};
