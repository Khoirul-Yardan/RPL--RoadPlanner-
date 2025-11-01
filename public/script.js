const map = L.map('map').setView([-7.1167, 112.4167], 13); // Lamongan area

// Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

let points = [];
let polyline = null;

// Klik untuk menandai titik jalan
map.on('click', (e) => {
  points.push([e.latlng.lat, e.latlng.lng]);
  L.marker(e.latlng).addTo(map);

  if (points.length > 1) {
    if (polyline) map.removeLayer(polyline);
    polyline = L.polyline(points, { color: 'blue' }).addTo(map);
  }
});

// Hitung jarak
function getDistance(latlngs) {
  let dist = 0;
  for (let i = 1; i < latlngs.length; i++) {
    dist += map.distance(latlngs[i - 1], latlngs[i]);
  }
  return dist.toFixed(2);
}

// Tombol perhitungan
document.getElementById('calcBtn').addEventListener('click', async () => {
  if (points.length < 2) return alert("Tandai minimal dua titik jalan!");
  const thickness = document.getElementById('thickness').value;
  const distance = getDistance(points);

  const res = await fetch(`/api/calc?distance=${distance}&thickness=${thickness}`);
  const data = await res.json();

  document.getElementById('output').innerHTML = `
    📏 Panjang jalan: <b>${data.distance} m</b><br>
    🧱 Ketebalan: <b>${data.thickness} cm</b><br>
    💰 Estimasi Biaya: <b>Rp ${data.totalCost.toLocaleString()}</b><br>
    ⏳ Prediksi umur jalan: <b>${data.lifetime} tahun</b>
  `;
});
