import { useEffect, useState } from "react";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(API).then((data) => {
        return data.json();
      });

      setProducts(response);
    })();
  }, [API]);

  return products;
};

export { useGetProducts };
