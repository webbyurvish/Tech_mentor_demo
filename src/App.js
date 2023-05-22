import Mentors from './components/mentor/Mentors';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './config';


function App() {

  const [mentors, setMentors] = useState([])

  useEffect(() => {
    async function fetchMentors() {
      const mentors = await axios.get(`${API_URL}/mentors/all`)
      setMentors(mentors.data)
    }

    fetchMentors();
  }, [])

  return (
    <div><Mentors mentors={mentors} /></div>
  );
}

export default App;
