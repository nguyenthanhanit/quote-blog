import React, {useEffect, useState} from "react";
import type {NextPage} from 'next';
import Image from 'next/image';

const Header: NextPage = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('/api/page')
      .then(res => res.json())
      .then(data => {
        setData(data.data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const cover = data?.cover?.external?.url;

  return (
    <header>
      <Image
        src={cover}
        alt="Background Cover"
        width={500}
        height={500}
      />
    </header>
  )
}

export default Header
