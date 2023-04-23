/* import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getTeams } from '../../api/teams';
import TeamCard from '../../components/TeamCard';

function ListTeams() {
  const [teams, setTeam] = useState([{}]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTeams = () => {
    getTeams(user.uid).then(setTeam);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTeams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex-wrap">
      {teams.map((team) => (
        <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getAllTeams} />
      ))}
    </div>
  );
}

export default ListTeams;
*/
