const fetchGraphQL = async (text, variables) => {
  const APP_NAME = process.env.REACT_APP_APP_NAME;
  const HASURA_SECRET = process.env.REACT_APP_HASURA_SECRET;

  const response = await fetch(
    `https://${APP_NAME}.herokuapp.com/v1/relay`,
    {
      method: "POST",
      headers: {
        "x-hasura-admin-secret": HASURA_SECRET,
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    }
  );

  return await response.json();
};

export default fetchGraphQL;
