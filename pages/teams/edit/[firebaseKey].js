import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleTeam } from '../../../api/teams';
import TeamForm from '../../../components/forms/TeamForm';

export default function EditTeam() {
  const [editAuth, setEditAuth] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTeam(firebaseKey).then(setEditAuth);
  }, [firebaseKey]);
  return (<TeamForm obj={editAuth} />);
}
