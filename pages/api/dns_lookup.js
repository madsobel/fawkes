const { Resolver } = require('dns').promises;

export default async function handler(req, res) {
  const { domain } = req.query;
  const resolver = new Resolver();
  resolver.setServers(['8.8.8.8', '9.9.9.9', '208.67.222.222', '1.1.1.1']);
  const result = await resolver.resolveAny(domain);
  res.status(200).json(result);
}