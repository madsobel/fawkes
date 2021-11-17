const whoiser = require('whoiser');

export default async function handler(req, res) {
  const { domain } = req.query;
  const whois = await whoiser(domain, {raw: true, follow: 1});
  res.status(200).json(whois);
}
