// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Client} from '@notionhq/client'

type Data = {
  message: string,
  data: object
}

const notion = new Client({auth: process.env.NEXT_PUBLIC_NOTION_TOKEN})
const pageId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? ''

async function get(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const page = await notion.pages.retrieve({page_id: pageId});

    return res.status(200).json({
      message: 'Success!',
      data: page
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
