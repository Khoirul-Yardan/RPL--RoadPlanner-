# 🛣️ Smart Road Planner Demo

Sistem demo berbasis **Node.js** dan **Leaflet.js** untuk menghitung jarak jalan secara interaktif di peta, serta melakukan **simulasi biaya pembangunan jalan dan estimasi umur jalan** berdasarkan ketebalan yang dipilih.  
Tujuan proyek ini adalah untuk menjadi **prototipe sistem efisiensi anggaran APBD** dalam pembangunan infrastruktur jalan.

---

## 🚀 Fitur Utama
- 🗺️ **Peta interaktif (Leaflet.js)** – klik dua atau lebih titik untuk menggambar jalur jalan.  
- 📏 **Perhitungan jarak otomatis** – menghitung panjang total jalan dari titik-titik yang dipilih.  
- 💰 **Simulasi biaya pembangunan** – menghitung estimasi biaya berdasarkan panjang jalan dan ketebalan jalan.  
- ⏳ **Prediksi umur jalan** – memberikan estimasi masa pakai jalan berdasarkan faktor ketebalan.  
- ⚙️ **Server API sederhana (Express.js)** – menangani logika perhitungan biaya dan lifetime.

---

## 🧱 Struktur Proyek
```
road-planner/
│
├── server.js            # Server utama (Express API)
├── package.json         # Konfigurasi Node.js
└── public/
    ├── index.html       # Tampilan utama (Leaflet map + UI)
    └── script.js        # Logika front-end (interaksi & fetch API)
```

---

## 🧩 Instalasi dan Menjalankan

### 1. Clone atau buat folder proyek
```bash
git clone https://github.com/username/road-planner.git
cd road-planner
```

### 2. Instal dependensi
```bash
npm install
```

### 3. Jalankan server
```bash
npm start
```

### 4. Buka browser
Kunjungi:
```
http://localhost:3000
```

---

## 💡 Cara Menggunakan
1. Klik dua atau lebih titik di peta untuk menandai jalur jalan.  
2. Garis biru akan muncul sebagai representasi jalur.  
3. Masukkan **ketebalan jalan (cm)** di kotak input.  
4. Klik **Hitung Biaya** untuk melihat hasil:
   - Panjang jalan (meter)
   - Ketebalan jalan (cm)
   - Estimasi biaya (Rp)
   - Prediksi umur jalan (tahun)

---

## 🧮 Logika Perhitungan (Sederhana)
Formula simulasi:
```
biaya_total = jarak × biaya_per_meter × (ketebalan / 10)
umur_jalan  = (20 / (ketebalan / 10)) × 2
```
> Nilai di atas bersifat dummy/simulasi dan dapat disesuaikan dengan kondisi nyata.

---

## 🛠️ Teknologi yang Digunakan
| Komponen | Fungsi | Teknologi |
|-----------|---------|------------|
| Backend | API untuk kalkulasi biaya & lifetime | Node.js (Express) |
| Frontend | Visualisasi peta & interaksi pengguna | HTML, CSS, Leaflet.js |
| Map Source | Sumber data peta | OpenStreetMap |

---

## 📈 Ide Pengembangan Selanjutnya
- 🔄 Integrasi dengan **OpenStreetMap Routing API** untuk jalur otomatis.  
- 📊 Dashboard simulasi APBD berdasarkan total anggaran.  
- 🧠 Model prediksi umur jalan berbasis **machine learning (regresi linear)**.  
- 🛰️ Input data real dari **sensor IoT** atau **drone mapping**.  
- 🗃️ Simpan data jalan & hasil simulasi ke **database (MySQL / MongoDB)**.

---

## 👨‍💻 Author
**Khoirul Yardan**  
Mahasiswa D3 Teknik Informatika  
Proyek ini dibuat sebagai prototype sistem **efisiensi perencanaan pembangunan jalan berbasis data dan GIS**.

---

## 📜 Lisensi
MIT License – bebas digunakan dan dikembangkan untuk keperluan riset, edukasi, atau inovasi publik.

---

### 🌐 Demo Tampilan
- Klik beberapa titik di peta → garis biru terbentuk.  
- Masukkan ketebalan → tekan “Hitung Biaya”.  
- Hasil muncul di panel kiri atas (panjang, biaya, dan umur jalan).

---

> “Bangun infrastruktur bukan hanya soal beton, tapi soal data yang membuatnya efisien.” 💡
