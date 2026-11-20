# vubaochau-coder.github.io

Trang của nhà phát triển **ChauVB** (chauvb.dev), đăng bằng GitHub Pages tại
https://vubaochau-coder.github.io/ (nhánh `main`, thư mục gốc).

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang giới thiệu nhà phát triển và danh sách app |
| `app-ads.txt` | Khai báo người bán quảng cáo cho AdMob. Dùng chung cho mọi app trong tài khoản AdMob, **phải nằm ở gốc tên miền**, đừng đổi tên hay di chuyển |
| `images/` | Icon các app |
| `<app>/privacy/index.html` | Chính sách quyền riêng tư của từng app |

## Chính sách quyền riêng tư

- Pixel Nonogram: `nonogram/privacy/index.html` →
  https://vubaochau-coder.github.io/nonogram/privacy/ (URL đã khai báo trên
  Play Console và AdMob, đừng đổi đường dẫn). Khi app thêm SDK hoặc thu thập
  dữ liệu mới thì cập nhật trang này.

## Thêm app mới

1. Thêm icon vào `images/<app>.png`.
2. Trong `index.html`, sao chép khối `<article class="app">` ở cả phần tiếng
   Việt lẫn tiếng Anh, rồi sửa tên, mô tả, icon, link Google Play, link chính
   sách.
3. Tạo `<app>/privacy/index.html`, dùng trang của Pixel Nonogram làm mẫu.
4. Trên Play Console, điền URL chính sách của app và ô **Trang web** là
   `https://vubaochau-coder.github.io` (để AdMob tìm thấy `app-ads.txt`).

Lưu ý: nếu một repo khác của tài khoản cũng bật GitHub Pages, nó chiếm đường
dẫn `/<tên-repo>/` và được ưu tiên hơn thư mục cùng tên ở đây.
