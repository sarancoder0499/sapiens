
export const get = async <T>(endpoint: string):Promise<T> => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("API Error");
  }
  return await response.json();
};

export const post = async<T> (endpoint: string, data: T): Promise<T> => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(JSON.stringify(await response.json()));
  }
  return await response.json();
};
