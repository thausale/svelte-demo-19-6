export const load = async ({ fetch }) => {
  const response = await fetch(
    "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );

  const { drinks } = await response.json();

  return { drinks };
};

export const config = {
  isr: {
    expiration: 60,
  },
};
