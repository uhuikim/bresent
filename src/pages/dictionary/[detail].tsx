import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { breadDetail } from 'data/data';

const Detail: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query;

  const [breadDetailData, setBreadDetailDate] = useState({});

  useEffect(() => {
    if (detail) {
      setBreadDetailDate(breadDetail[+detail || 1]);
    }
  }, []);

  return <div>{breadDetailData?.title}</div>;
};

export default Detail;
