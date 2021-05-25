import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  content: Array<object | undefined>;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {};
