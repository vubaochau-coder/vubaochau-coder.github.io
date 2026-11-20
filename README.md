# vubaochau-coder.github.io

Trang của nhà phát triển **ChauVB** (`chauvb.dev`), chạy tĩnh hoàn toàn trên GitHub Pages tại https://vubaochau-coder.github.io/ (nhánh `main`, thư mục gốc).

## Cấu trúc thư mục

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang chủ tiếng Việt (`/`) |
| `en/index.html` | Trang chủ tiếng Anh (`/en/`) |
| `nonogram/privacy/index.html` | Chính sách quyền riêng tư Pixel Nonogram — tiếng Việt (`/nonogram/privacy/`, **URL đã khai báo trên Play Console & AdMob, không đổi**) |
| `en/nonogram/privacy/index.html` | Chính sách quyền riêng tư Pixel Nonogram — tiếng Anh (`/en/nonogram/privacy/`) |
| `404.html` | Trang 404 tuỳ chỉnh (song ngữ, có lưới pixel 404) |
| `app-ads.txt` | Khai báo người bán quảng cáo AdMob (**giữ nguyên ở gốc tên miền, không sửa**) |
| `.nojekyll` | Tắt xử lý Jekyll của GitHub Pages (**giữ nguyên**) |
| `assets/site.css`, `assets/site.js` | CSS & JS dùng chung cho toàn site (mặc định giao diện Tối, có nút chuyển Sáng) |
| `assets/fonts/` | Font `Inter` & `JetBrains Mono` tự lưu (đủ dấu tiếng Việt, không gọi CDN bên thứ ba) |
| `images/` | Logo `chauvb-logo.svg`, ảnh Open Graph `og-image.png`, và icon các app |
| `templates/` | Mẫu `privacy-vi.html` & `privacy-en.html` cho các app mới |

## Thêm app mới (3 bước)

1. **Thêm icon:** Đặt file icon vuông vào `images/<app>.png` (khuyến nghị PNG/WebP đã nén, cỡ 144×144 đến 512×512).
2. **Thêm thẻ app trên trang chủ:**
   - Mở `index.html` (tiếng Việt) và `en/index.html` (tiếng Anh).
   - Sao chép một khối `<article class="app-card" style="--app-accent: #5B48DA;">...</article>` trong `.apps-grid`.
   - Đổi `--app-accent` (màu nhấn riêng của app), đường dẫn `src="/images/<app>.png"`, tên app, mô tả, thẻ nổi bật, link Google Play và link chính sách.
   - Bố cục lưới tự động chuyển 1 cột (mobile) ↔ 2 cột (desktop) khi có nhiều thẻ.
3. **Tạo trang chính sách quyền riêng tư:**
   - Sao chép `templates/privacy-vi.html` → `<app>/privacy/index.html`
   - Sao chép `templates/privacy-en.html` → `en/<app>/privacy/index.html`
   - Thay thế các placeholder `{{APP_NAME}}`, `{{APP_SLUG}}`, `{{APP_ID}}`, ngày hiệu lực và nội dung các mục.
   - Trên Play Console, điền URL chính sách là `https://vubaochau-coder.github.io/<app>/privacy/` và ô **Trang web** là `https://vubaochau-coder.github.io`.

## Hướng dẫn phong cách ngắn

| Token | Giao diện Tối (mặc định) | Giao diện Sáng | Ghi chú |
|---|---|---|---|
| `--bg` | `#0D1117` | `#F8FAFC` | Nền trang |
| `--surface` | `#151B23` | `#FFFFFF` | Nền thẻ / khung |
| `--border` | `#26303D` | `#E2E8F0` | Viền mảnh 1px |
| `--fg` | `#E6EDF3` | `#0F172A` | Chữ chính |
| `--muted` | `#8B949E` | `#475569` | Chữ phụ |
| `--accent` | `#3FB978` | `#15803D` | Liên kết & nhấn (đạt WCAG AA) |
| `--px-on` | `#2E8F5B` | `#2D7A52` | Ô pixel 404 dịu mắt |

- **Font:** `Inter` (nội dung & tiêu đề), `JetBrains Mono` (nhãn kỹ thuật, `chauvb.dev`, `<code>`).
- **Tài nguyên:** Tự lưu 100%, không Google Fonts/CDN, không analytics/cookie bên thứ ba.
