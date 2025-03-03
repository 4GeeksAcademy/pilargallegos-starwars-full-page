export const baseUrl =
  "https://orange-goggles-5gxvgvx4xw7jh7xpr-3000.app.github.dev/";

export const usersUrl = "users/";
export const peopleUrl = "people/";
export const planetsUrl = "planets/";
export const speciesUrl = "species/";

export const fetchWrapper = async (input, init) => {
  return await fetch(input, {
    ...init,
    headers: {
      "Context-Type": "application/json",
      "X-CSRF-TOKEN": sessionStorage.getItem("csrf_access_token") || "",
    },
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText || response.status);
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
