import { baseUrl, fetchWrapper } from "../api";

const usersEndpoint = `${baseUrl}favorites`;

export const getUserFavorites = async () => {
  return await fetchWrapper(usersEndpoint, {
    credentials: "include",
  }).then((data) => {
    return data;
  });
};

export const postUserFavorite = async (externalId, name, type) => {
  return await fetchWrapper(usersEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      external_id: externalId,
      name: name,
      type: type,
    }),
  }).then((data) => {
    return data;
  });
};

export const deleteUserFavorite = async (favoriteId) => {
  return await fetchWrapper(usersEndpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      id: favoriteId,
    }),
  }).then((data) => {
    return data;
  });
};
