Disini saya akan membagikan kepada kalian setup Neovim terbaru ku 2024, setup ini sangat cocok untuk kalian yg mengunakan HTML, CSS, Javascript, Typescript, React Js, dan Next Js.

Alasan memakai Neovim selain keyboard driven, juga neovim itu sangat ringan ketimbang kode editor lainnya seperti Visual Studio
Code dll, yang mana akan sangat cocok buat laptop yg spek rendah

Di artikel ini nanti kalian akan bisa setup neovim dengan sangat mudah tanpa harus setup dari awal, setup dari awal itu bisa berjam - jam sehingga bisa sangat membosankan, disini kalian bisa setup hanya dengan copy paste doang :)

## Prerequisites

Sebelum kalian memulai pastikan kalian sudah menginstall yg ada dibawah ini,

- Node Js
- Neovim
- OS Linux (Direkomendasikan)
- Ripgrep untuk Telescope Fuzzy Finder
- Nerd font biar bisa bisa nampilin icon

### Cara instalasinya:

**Node Js:**

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

**Neovim:**

```
sudo apt install neovim
```

**Ripgrep**

```
sudo apt-get install ripgrep
```

**Nerd font:**

```
wget -P ~/.local/share/fonts https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/JetBrainsMono.zip \
&& cd ~/.local/share/fonts \
&& unzip JetBrainsMono.zip \
&& rm JetBrainsMono.zip \
&& fc-cache -fv
```

Kalo sudah terpenuhi semua Prerequisitesnya bisa di ikuti semua step dibawah

## 1. Clone setup neovim dari githubku

Pastikan kalian berada di home folder kalian

```
git clone https://github.com/rendi12345678/neovim-setup.git
```

## 2. Pindahkan folder nvim ke ~/.config

Sebelum memindahkan kalian masuk dulu ke folder neovim-setup

```
cd neovim-setup
```

Setelah itu pindahkan ke folder ~/.config

```
mv nvim ~/.config
```

## 3. Masuk ke folder nvim

```
cd ~/.config/nvim
```

## 4. Lalu buka neovim

```
nvim
```

## 5. Tunggu instalasinya sampai selesai

![Installing nvim](/images/installing-nvim.png "Image from Takuyama Matsuyama https://www.devas.life/content/images/size/w1000/2023/11/image-1.png")

Lalu tekan q untuk menutup pop up instalasinya

![neovim](/images/nvim-dashboard.png)

## 6. Install COC Extensions untuk code completion, formatting, dan linter

Tekan : dulu lalu

```
CocInstall coc-tsserver coc-snippets coc-prettier coc-emmet @yaegassy/coc-tailwindcss3 coc-lua coc-json
```

Lalu tekan enter, dan tunggu sampai instalasinya selesai

![installing coc extensions](/images/installing-coc.png)

Gambar instalasi selesai

![Install sukses](/images/selesai-instalasi-coc.png)

Setelah instalasinya selesai tekan q untuk menutup instalasinya, dan keluar nvim dengan menekan :q

Selanjutnya setting coc-settings.json dengan cara dibawah

```
:CocConfig
```

![Buka coc-settings.json](/images/open-coc-config.png)

Lalu paste code dibawah ini ke coc-settings.json untuk auto format semua files setelah melakukan penyimpanan

```
{
  "coc.preferences.formatOnSaveFiletypes": [
    "*"
  ],
  "snippets.ultisnips.pythonPrompt": false
}
```

![paste code ke coc settings](/images/paste-coc-congfig.png)

Lalu simpan file

```
:w
```

![save file](/images/save-nvim.png)

Lalu keluar nvim

```
:q
```

![keluar nvim](/images/keluar-nvim.png)

### Selamat!! kalian sudah berhasil setup neovimnya!!

Setelah kalian bisa selesai setup kalian bisa ikuti list perintah2 dibawah ini,

> " pertama memang susah tapi lama2 akan terbiasa dan kalian akan menikmatinya ketika kalian sudah terbiasa, kalian bisa bergerak tanpa perlu nyentuh touchpad / mouse kalian benefitnya itu akan boost kecepatan kalian dalam coding :)" - **Neovim Users**

## 1. Perintah2 dasar Neovim

Kalian bisa coba2 sendiri perintah2 nya dan rasakan the power of keyboard driven...

**Navigasi:**

```
`h` - Bergerak ke kiri satu karakter.
`j` - Turun satu baris.
`k` - Naik satu baris.
`l` - Bergerak ke kanan satu karakter.
`w` - Maju satu kata.
`b` - Mundur satu kata.
`gg` - Pergi ke awal file.
`G` - Pergi ke akhir file.
```

**Memasukkan Teks:**

```
`i` - Mode insert (mulai mengetik teks). Tekan `Esc` untuk keluar dari mode insert.
`a` - Mode append (mulai mengetik teks setelah kursor). Tekan `Esc` untuk keluar dari mode insert.
```

**Menghapus Teks:**

```
`x` - Hapus karakter di bawah kursor.
`dd` - Hapus baris saat ini.
`d<motion>` - Hapus teks berdasarkan motion (misalnya, `dw` menghapus kata di bawah kursor). Motion lainnya bisa berupa `d$` (hapus sampai akhir baris), `d0` (hapus sampai awal baris), dll.
```

**Undo/Redo:**

```
`u` - Undo perubahan sebelumnya.
`Ctrl+r` - Redo perubahan terakhir yang dibatalkan.
```

**Menyimpan dan Keluar:**

```
`:w` - Simpan file saat ini.
`:q` - Keluar dari Neovim (tanpa menyimpan).
`:wq` - Simpan file dan keluar dari Neovim.
```

## 2. Mode Visual Biasa (Visual Mode)

Ikuti perintah2 berikut untuk menyeleksi karakter

**Memilih Teks:**

```
`v`: Memasuki mode visual.
`Ctrl+v`: Memilih teks secara blok (karakter demi karakter).
`Shift+v`: Memperluas pilihan teks secara horizontal.
`Ctrl+Shift+v`: Memperluas pilihan teks secara vertikal.
```

**Memindahkan Kursor:**

```
`h`: Bergerak ke kiri satu karakter.
`j`: Turun satu baris.
`k`: Naik satu baris.
`l`: Bergerak ke kanan satu karakter.
`w`: Maju satu kata.
`b`: Mundur satu kata.
`gg`: Pergi ke awal pilihan.
`G`: Pergi ke akhir pilihan.
```

**Melakukan Operasi:**

```
`y`: Salin teks yang dipilih.
`d`: Hapus teks yang dipilih.
`c`: Salin dan hapus teks yang dipilih.
`r`: Ganti karakter yang dipilih dengan karakter baru.
`>`: Indentasi teks yang dipilih ke kanan.
`<`: Indentasi teks yang dipilih ke kiri.
`u`: Case-up teks yang dipilih.
`lo`: Case-down teks yang dipilih.
`:norm <command>`: Jalankan perintah Vim pada teks yang dipilih (misalnya, `:norm v$ y` untuk menyalin seluruh baris).
```

## 3. Mode Visual Baris (Visual Line Mode)

Ikuti perintah2 berikut untuk menyeleksi baris text

**Memilih Teks:**

```
`V`: Memasuki mode visual baris.
`Shift+V`: Memperluas pilihan baris.
```

**Memindahkan Kursor:**

```
`h`: Bergerak ke kiri satu karakter.
`j`: Turun satu baris.
`k`: Naik satu baris.
`l`: Bergerak ke kanan satu karakter.
`gg`: Pergi ke awal pilihan.
`G`: Pergi ke akhir pilihan.
```

**Melakukan Operasi:**

```
`y`: Salin baris yang dipilih.
`d`: Hapus baris yang dipilih.
`c`: Salin dan hapus baris yang dipilih.
`r`: Ganti karakter dalam baris yang dipilih dengan karakter baru.
`>`: Indentasi baris yang dipilih ke kanan.
`<`: Indentasi baris yang dipilih ke kiri.
`u`: Case-up baris yang dipilih.
`lo`: Case-down baris yang dipilih.
`:norm <command>`: Jalankan perintah Vim pada baris yang d
```

## 4. Perintah2 untuk buka/tutup tab file

Tekan space dulu lalu ikuti command dibawah berikut

```
`ee`: Buka/Tutup File Explorer (Toggle file explorer)
`ef`: Buka File Explorer pada file saat ini (Toggle file explorer on current file)
`ec`: Ciutkan File Explorer (Collapse file explorer)
`er`: Segarkan File Explorer (Refresh file explorer)
```

## 5. Perintah2 manajemen window dan tab

**Window:**

Tekan space dulu lalu ikuti command dibawah berikut

```
`sv`: Bagi jendela vertikal (Split window vertically)
`sh`: Bagi jendela horizontal (Split window horizontally)
`se`: Ukuran jendela sama besar (Make splits equal size)
`sx`: Tutup jendela aktif (Close current split window)
```

**Tab**

Tekan space dulu lalu ikuti command dibawah berikut

```
`to`: Buka tab baru (Open new tab)
`tx`: Tutup tab aktif (Close current tab)
`tn`: Pindah ke tab selanjutnya (Go to next tab)
`tp`: Pindah ke tab sebelumnya (Go to previous tab)
`tf`: Buka buffer aktif di tab baru (Open current buffer in new tab)
```

## 6. Perintah mencari file

Tekan space dulu lalu tekan perintah sebagai berikut

```
`ff`: Mencari file di folder sekarang
`fr`: Untuk mencari file yg terakhir dibuka
`fs`: Untuk mencari file dalam folder saat ini (cwd)
`fc`: Untuk cari kata dibawah cursor (cwd)
`ft`: Untuk Mencari tab yg terbuka
```

## Kesimpulan

Dengan kalian terus berlatih perintah2 neovim diatas lama2 akan menjadi second nature di diri kalian, intinya klo kalian udah terbiasa command neovim bisa ngeboost banget produktivitas kalian, oh iya di neovim juga bisa menambahkan github copilot, tapi belum aku setting :), nanti kalo admin nggak males admin buatin tutor nya hehe

### Thanks for reading, klo ada pertanyaan bisa taruh pertanyaan kalian di comment section dibawah :)
