const express = require("express");
const app = express();
const PORT = 3000;

// Public folder untuk file front-end
app.use(express.static("public"));

// Endpoint sederhana untuk simulasi perhitungan biaya
app.get("/api/calc", (req, res) => {
  const { distance, thickness } = req.query;
  const costPerMeter = 150000; // biaya per meter (contoh)
  const thicknessFactor = thickness / 10; // semakin tebal, biaya naik

  const totalCost = distance * costPerMeter * thicknessFactor;
  const lifetime = Math.round((20 / thicknessFactor) * 2); // prediksi umur (tahun)

  res.json({
    distance: Number(distance),
    thickness: Number(thickness),
    totalCost,
    lifetime
  });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
