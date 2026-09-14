# Sales API - Praktikum Pemrograman Perangkat Bergerak (PPB)

Sales API berbasis Express.js dan Supabase Database untuk manajemen data Kategori, Produk, dan Pelanggan.

🌐 **Live Deployment URL:** [https://sales-api-dcuq.vercel.app](https://sales-api-dcuq.vercel.app)

---

## 🚀 Fitur Utama
1. **CRUD Categories**: Manajemen data kategori produk (`/api/categories`).
2. **CRUD Products**: Manajemen data produk (`/api/products`).
3. **CRUD Customers**: Manajemen data pelanggan (`/api/customers`).
4. **Vercel Serverless Ready**: Siap diakses secara online via Vercel.

---

## 📋 Daftar Endpoint API

**Base URL (Production):** `https://sales-api-dcuq.vercel.app`  
**Base URL (Local):** `http://localhost:3000`

### 1. Root & Health Check
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/` | Menampilkan status API dan daftar endpoint |

### 2. Categories (`/api/categories`)
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/categories` | Mengambil semua kategori |
| `GET` | `/api/categories/:id` | Mengambil detail kategori berdasarkan ID |
| `POST` | `/api/categories` | Menambahkan kategori baru |
| `PUT` | `/api/categories/:id` | Memperbarui data kategori |
| `DELETE` | `/api/categories/:id` | Menghapus kategori |

### 3. Products (`/api/products`)
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/products` | Mengambil semua produk |
| `GET` | `/api/products/:id` | Mengambil detail produk berdasarkan ID |
| `POST` | `/api/products` | Menambahkan produk baru |
| `PUT` | `/api/products/:id` | Memperbarui data produk |
| `DELETE` | `/api/products/:id` | Menghapus produk |

### 4. Customers (`/api/customers`)
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/customers` | Mengambil semua pelanggan |
| `GET` | `/api/customers/:id` | Mengambil detail pelanggan berdasarkan ID |
| `POST` | `/api/customers` | Menambahkan pelanggan baru |
| `PUT` | `/api/customers/:id` | Memperbarui data pelanggan |
| `DELETE` | `/api/customers/:id` | Menghapus pelanggan |

---

## 📮 Postman Collection
Tersedia file Postman untuk memudahkan pengujian API:
- `PPB_API_Postman_Collection.json`
- `PPB_API_Postman_Enviroment.json`

Import kedua file tersebut ke dalam Postman dan pilih environment **Sales API Environment**.

---

## 💻 Menjalankan Secara Lokal

1. **Clone repository**:
   ```bash
   git clone https://github.com/safirraazahra/Sales-API.git
   cd Sales-API
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Konfigurasi file `.env`**:
   Buat file `.env` di root direktori dengan isi:
   ```env
   PORT=3000
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-supabase-anon-key
   ```

4. **Jalankan Server**:
   ```bash
   npm start
   # atau
   npm run dev
   ```
