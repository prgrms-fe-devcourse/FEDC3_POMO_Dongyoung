import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';
import { publicApi } from 'api';

export default async function authUser(request: NextApiRequest, response: NextApiResponse) {
  const { body } = request;

  try {
    const { data }: AxiosResponse = await publicApi.get('/auth-user', body);

    return response.status(200).end(JSON.stringify(data));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
