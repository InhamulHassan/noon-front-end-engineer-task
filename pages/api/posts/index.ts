// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// import test data
import { posts } from "../../../data/posts";

type ResponseData = Object[];

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method == "GET") {
    res.status(200).json(posts);
  }
}
