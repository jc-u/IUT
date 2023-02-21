export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";

export function fetchAllBookmarks(urlSearchParams) {
  return fetch(`${BASE_URL}/bookmarks?${urlSearchParams}`).then((response) =>
    response.json()
  );
}