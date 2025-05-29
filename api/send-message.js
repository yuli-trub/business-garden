export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Имя и телефон обязательны" });
  }

  const BOT_TOKEN = process.env.TG_BOT_TOKEN;
  const CHAT_ID = process.env.TG_CHAT_ID;

  const text = `📬 Новая заявка:\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Ошибка при отправке" });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка соединения" });
  }
}
