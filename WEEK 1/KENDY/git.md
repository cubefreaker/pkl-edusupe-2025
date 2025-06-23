# 📘 Apa Itu Git?

**Git** adalah sistem kontrol versi (Version Control System) yang digunakan untuk melacak perubahan pada file dalam proyek, terutama dalam pengembangan perangkat lunak.

Git bersifat **terdistribusi**, artinya setiap pengembang memiliki salinan lengkap dari seluruh riwayat proyek, bukan hanya versi terbaru.

---

## 🧠 Manfaat Git

- Menyimpan riwayat perubahan proyek
- Memudahkan kolaborasi tim
- Melihat siapa yang mengubah apa dan kapan
- Dapat kembali ke versi sebelumnya jika terjadi kesalahan
- Dapat membuat cabang pengembangan (branch) tanpa mengganggu kode utama

---

## 🔑 Konsep Penting dalam Git

| Istilah     | Penjelasan Singkat                                           |
|-------------|---------------------------------------------------------------|
| Repository  | Tempat menyimpan seluruh riwayat proyek (lokal atau remote)   |
| Commit      | Catatan perubahan (snapshot) dengan pesan deskripsi           |
| Branch      | Cabang pengembangan terpisah dari branch utama                |
| Merge       | Menggabungkan perubahan dari satu branch ke branch lain       |
| Push        | Mengirim perubahan ke repository remote (misalnya GitHub)     |
| Pull        | Mengambil dan menggabungkan perubahan dari repository remote  |

---

## 💻 Contoh Penggunaan Git

Misalkan kamu membuat proyek website sederhana:

### 1. Inisialisasi Repository
```bash
git init