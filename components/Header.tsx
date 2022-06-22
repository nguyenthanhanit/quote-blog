import React, {useEffect, useState} from "react";
import type {NextPage} from 'next';

const Header: NextPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('api/page')
      .then(res => {
        if (res.ok) return res.json()
        throw res
      })
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.error('Error fetching', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <div>1</div>
  )
}

export default Header
