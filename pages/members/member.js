import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getmembers } from '../../api/members';
import MemberCard from '../../components/MemberCard';

function ListMembers() {
  const [members, setmember] = useState([{}]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllMembers = () => {
    getmembers(user.uid).then(setmember);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllMembers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex-wrap">
      {members.map((member) => (
        <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
      ))}
    </div>
  );
}

export default ListMembers;
