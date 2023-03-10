export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";

export function fetchAllBookmarks() {
  return fetch(`${BASE_URL}/bookmarks`).then((response) => response.json());
}

export function avatarUrl(userId) {
  return `${BASE_URL}/users/${userId}/avatar`;
}
