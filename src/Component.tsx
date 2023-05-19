import { useEffect, useState } from 'react';
import { fetchDataFromDatabase } from './db/db';

const YourComponent: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
        const fetchedData = await fetchDataFromDatabase();
        setData(fetchedData);
        };
    fetchData();
  }, []);
  
    return (
        <div>
      <h1>Your Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.tittle}</li>
        ))}
      </ul>
    </div>
    )      
  };
  
  export default YourComponent;