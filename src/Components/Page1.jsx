import { useEffect, useState } from "react";
import apiCall from "../Common/apiCall";

const Page1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiCall("https://dummyjson.com/products");
        setData(result.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error: {error}</div>;
  }

  return (
    <div>
      {data.map((ele, id) => (
        <div key={id}>
          <img src={ele.images} height={200} width={200} />
          {ele.title}
        </div>
      ))}
    </div>
  );
};

export default Page1;
