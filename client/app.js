const GRAPHQL_URL = "http://localhost:3000/";

async function fetchData() {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data;
}

const element = document.querySelector("#greeting");
element.textContent = "Loading...";
fetchData().then(({ greeting }) => {
  element.textContent = greeting;
});
