export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";

export function fetchAllBookmarks(urlSearchParams) {
  return fetch(`${BASE_URL}/bookmarks?${urlSearchParams}`, {
    credentials: "include",
  }).then((response) => response.json());
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

export function postBookmark(bookmark) {
  const init = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookmark),
  };
  return fetch(`${BASE_URL}/bookmarks`, init).then((response) =>
    response.json()
  );
}

export function patchBookmark(bookmark) {
  const init = {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/merge-patch+json",
    },
    body: JSON.stringify(bookmark),
  };
  return fetch(`${BASE_URL}/bookmarks/${bookmark.id}`, init).then((response) =>
    response.json()
  );
}
