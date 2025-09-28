
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { goods_id, goods_name, pid, uid, gid, tid } = req.body;

    const params = new URLSearchParams({ goods_id, goods_name, pid, uid, gid, tid });

    try {
      const response = await fetch("https://dabaojianxx.com/webpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
      });
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
