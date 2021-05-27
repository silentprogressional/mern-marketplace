const create = async (params, credentials, order, token) => {
  try {
    let response = await fetch("/api/orders/" + params.userId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify({ order: order, token: token }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create };
