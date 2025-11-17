import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handleReq(req: VercelReequest, res: VercelResponse) {
  const response = await fetch(
    "https://api.lanyard.rest/v1/users/864189836541427733"
  );

  const nya = await response.json();

  const online = nya?.data?.discord_status !== 'offline';
  res.status(200).json({ online });
}
