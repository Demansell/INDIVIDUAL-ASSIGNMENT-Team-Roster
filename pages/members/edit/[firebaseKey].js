/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewMemberDetails } from '../../../api/mergedData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewMemberDetails(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={memberDetails.image} alt={memberDetails.title} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {memberDetails.title} by {memberDetails.teamObject?.team_name}
        </h5>
        <h5>
          {memberDetails.role}
        </h5>
        Teams <a href={`mailto:${memberDetails.teamObject?.role}`}>{memberDetails.teamObject?.role}</a>
      </div>
    </div>
  );
}
