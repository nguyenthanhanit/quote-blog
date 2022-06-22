import React from "react";
import type {NextPage} from 'next';
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Content: NextPage = () => {
  const {data, error} = useSWR('/api/quotes', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>1</div>
  )
}

export default Content
