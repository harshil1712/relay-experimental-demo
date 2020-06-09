const fetchGraphQL = async (text, variables) => {
  const HASURA_SECRET = process.env.REACT_APP_HASURA_SECRET;

  const response = await fetch(
    "https://learning-jurnal.herokuapp.com/v1/relay",
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
