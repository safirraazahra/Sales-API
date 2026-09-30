# Library API (Pencatatan Peminjaman Buku)

REST API sederhana untuk layanan pencatatan peminjaman buku perpustakaan. Dibangun dengan Node.js, Express.js, dan Supabase, serta di-deploy ke Vercel.

## Deskripsi Umum & Tujuan Proyek

Proyek ini bertujuan untuk menyediakan layanan backend berupa REST API untuk mengelola data peminjaman buku perpustakaan. API ini mendukung operasi CRUD (Create, Read, Update, Delete) dan fitur filter query (contoh: berdasarkan status peminjaman).

## Struktur Data / Schema (Supabase)

Tabel: `loans`

| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| `id` | uuid | Primary Key, otomatis dibuat oleh Supabase |
| `book_title` | text | Judul buku yang dipinjam |
| `member_name` | text | Nama anggota yang meminjam |
| `borrow_date` | date | Tanggal peminjaman |
| `return_date` | date | Tanggal pengembalian (opsional) |
| `status` | text | Status peminjaman (contoh: "Dipinjam", "Dikembalikan", "Terlambat") |
| `created_at` | timestamp | Timestamp saat data dibuat |

### SQL untuk membuat tabel di Supabase:
```sql
create table public.loans (
  id uuid not null default gen_random_uuid(),
  book_title text not null,
  member_name text not null,
  borrow_date date not null,
  return_date date null,
  status text not null default 'Dipinjam'::text,
  created_at timestamp with time zone not null default now(),
  constraint loans_pkey primary key (id)
);
```

## Endpoint API & Contoh Request / Response

### 1. GET `/api/loans` (Ambil Semua Data Peminjaman)
- **Method:** `GET`
- **Query Parameter (Opsional):** `?status=Terlambat`
- **Response Sukses (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "e4b6b6b7-...",
      "book_title": "Belajar Node.js",
      "member_name": "Budi",
      "borrow_date": "2023-10-01",
      "return_date": "2023-10-08",
      "status": "Dipinjam",
      "created_at": "2023-10-01T10:00:00Z"
    }
  ]
}
```

### 2. POST `/api/loans` (Tambah Data Peminjaman Baru)
- **Method:** `POST`
- **Body Request:**
```json
{
  "book_title": "Belajar Express",
  "member_name": "Siti",
  "borrow_date": "2023-10-05",
  "return_date": "2023-10-12",
  "status": "Dipinjam"
}
```
- **Response Sukses (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "123e4567-...",
    "book_title": "Belajar Express",
    "member_name": "Siti",
    "borrow_date": "2023-10-05",
    "return_date": "2023-10-12",
    "status": "Dipinjam",
    "created_at": "..."
  }
}
```

### 3. PUT `/api/loans/:id` (Update Data Peminjaman)
- **Method:** `PUT`
- **Body Request:**
```json
{
  "status": "Dikembalikan",
  "return_date": "2023-10-10"
}
```
- **Response Sukses (200 OK):**
```json
{
  "success": true,
  "data": { ... }
}
```

### 4. DELETE `/api/loans/:id` (Hapus Data Peminjaman)
- **Method:** `DELETE`
- **Response Sukses (200 OK):**
```json
{
  "success": true,
  "message": "Loan record deleted successfully"
}
```

## Panduan Instalasi & Cara Menjalankan Lokal

1. **Clone repository ini:**
   ```bash
   git clone <url-repo-anda>
   cd <nama-folder-repo>
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment Variables:**
   - Buat file `.env` di root folder.
   - Isi dengan credential Supabase Anda:
     ```env
     PORT=3000
     SUPABASE_URL=https://xyz.supabase.co
     SUPABASE_KEY=ey...
     ```

4. **Jalankan server lokal:**
   ```bash
   npm run dev
   ```
   API akan berjalan di `http://localhost:3000`.

## Link Hasil Deployment Vercel

- Base URL: [https://sales-api-dcuq.vercel.app/](https://sales-api-dcuq.vercel.app/)
