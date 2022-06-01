import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { breadDetail } from 'data/data';
import { breadDetailType } from 'type';

const Detail: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query;

  const [breadDetailData, setBreadDetailDate] = useState<breadDetailType>({
    title: '',
  });

  useEffect(() => {
    if (detail) {
      setBreadDetailDate(breadDetail[+detail]);
    }
  }, []);

  return <div>{breadDetailData?.title}</div>;
};

export default Detail;
