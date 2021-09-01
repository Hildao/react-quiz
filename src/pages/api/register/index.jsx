export default async function (req, res) {
  const json = JSON.parse(req.body);
  // await db.storeInfo(json)
  const _id = Math.floor(Math.random() * 100);

  res.status(201).json({ id: _id, ...json });
}
