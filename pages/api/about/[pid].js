export default async function handler(req, res) {
  return res.status(200).json({ queryId: `Hola from about/${req.query.pid}` })
}
