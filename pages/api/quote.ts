// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Client} from '@notionhq/client'

type Data = {
  message: string,
  data: object
}

const notion = new Client({auth: process.env.NEXT_PUBLIC_NOTION_TOKEN})
const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID ?? ''

async function add(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const response = await notion.pages.create({
      parent: {database_id: databaseId},
      properties: {
        Quote: {
          title: [
            {
              "text": {
                "content": req.body.quote
              }
            }
          ]
        },
      },
    })
    return res.status(200).json({
      message: 'Success!',
      data: response
    })
  } catch (error) {
    console.error('Error!')
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return add(req, res);
}
