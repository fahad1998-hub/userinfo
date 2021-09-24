// USING API
import { useState, useEffect } from 'react';
import PaginationControlled from './Pagination'
import DenseTable from './table.js';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`)
      // .then(data => setUserData(data.data))
      .then(data => {
        setUserData(data.data)
      })
      .catch(err => console.log(err));
  }, [page]);

  return (
    
    <div>
      <div>
     { <h1>USER'S RECORD</h1>}
      </div>
    
      {userData && (
        <div>
          <DenseTable userData={userData} />
          <PaginationControlled page={page} setPage={setPage} userData={userData} />
        </div>
      )}
    </div>
  )
}

export default App;

// export default App;
