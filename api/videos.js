// api/videos.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    // Tentukan path ke file video_data.json
    // Ini akan mencari video_data.json di root project,
    // yang akan diakses oleh serverless function saat deploy.
    const filePath = path.join(process.cwd(), 'video_data.json');

    // Baca konten file JSON
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    // Kirim data sebagai respons JSON
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  } catch (error) {
    console.error('Error reading video data:', error);
    res.status(500).json({ error: 'Failed to load video data' });
  }
}
