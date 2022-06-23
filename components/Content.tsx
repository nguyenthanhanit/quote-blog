import React from "react";
import type {NextPage} from 'next';
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Content: NextPage = () => {
  const {data, error} = useSWR('/api/quotes', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const blocks = data.data.blocks.results;
  const database = data.data.database.results;
  const quotes = database.map((db: any) => {
    const blockId = db.properties.Block.rich_text[0].plain_text;
    const block = blocks.find((block: { id: string }) => {
      return block.id === blockId
    })

    const quote = block.quote;

    return {
      db,
      quote
    }
  })

  return (
    <main>
      {
        quotes.map((item: any) => {
          const quote = item.quote.rich_text[0].plain_text;

          return <div>{quote}</div>
        })
      }
    </main>
  )
}

export default Content
