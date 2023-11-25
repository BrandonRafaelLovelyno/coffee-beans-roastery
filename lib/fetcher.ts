const fetcher = async (url: string) => {
  const res = await fetch(url);
  const finalRes = await res.json();
  return finalRes;
};

export default fetcher;
