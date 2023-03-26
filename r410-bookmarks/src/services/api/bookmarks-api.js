export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";

export function fetchAllBookmarks(urlSearchParams) {
  return fetch(`${BASE_URL}/bookmarks?${urlSearchParams}`).then((response) =>
    response.json()
  );
}

export function avatarUrl(userId) {
  return `${BASE_URL}/users/${userId}/avatar`;
}

export function getMe() {
  return fetch(`${BASE_URL}/me`, { credentials: "include" }).then((response) =>
    response.ok ? response.json() : Promise.resolve(null)
  );
}

export function loginUrl() {
  return `${BASE_URL}/login?redirect=${window.location}`;
}

export function logoutUrl() {
  return `${BASE_URL}/logout`;
}

export function fetchBookmark(bookmarkId) {
  return fetch(`${BASE_URL}/bookmarks/${bookmarkId}`, {
    credentials: "include",
  }).then((response) =>
    response.ok ? response.json() : Promise.resolve(null)
  );
}
