// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Client} from '@notionhq/client'

type Data = {
  message: string,
  data: object
}

const notion = new Client({auth: process.env.NEXT_PUBLIC_NOTION_TOKEN})

async function me(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const response = await notion.users.me({})
    return res.status(200).json({
      message: 'Success!',
      data: JSON.parse(JSON.stringify(response))
    })
  } catch (error) {
    console.error('Error!')
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return me(req, res);
}
