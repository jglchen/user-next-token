// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', //This specifies the runtime environment that the middleware function will be executed in.
};

type Data = {
  name: string
}

export default function handler(
  req: NextRequest,
  res: NextResponse<Data>
) {
  
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });

}
