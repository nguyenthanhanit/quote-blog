// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Client} from '@notionhq/client'

type Data = {
  message: string,
  data: object
}

const notion = new Client({auth: process.env.NEXT_PUBLIC_NOTION_TOKEN})
const blockId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? ''
const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID ?? ''

async function get(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 10,
    });

    const blocksId = blocks.results.map(item => {
      return {
        property: "Block",
        rich_text: {
          contains: item.id
        }
      }
    })

    const database = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: blocksId
      }
    });

    return res.status(200).json({
      message: 'Success!',
      data: {
        blocks,
        database
      }
    })
  } catch (error) {
    console.error('Error!')
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return get(req, res);
}
