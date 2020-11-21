export const localStorageHandler = (image) => {
  if (image) {
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", JSON.stringify([]));
    } else {
      let data = JSON.parse(localStorage.getItem("favorites"));
      let candidate = data.find((item) => item.id === image.id);

      if (candidate === undefined) {
        data = [...data, image];
      } else {
        data = data.filter((item) => candidate.id !== item.id);
      }
      localStorage.setItem("favorites", JSON.stringify(data));
    }
  }
};
