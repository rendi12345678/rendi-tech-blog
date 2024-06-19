Zsh, atau Z Shell, adalah sebuah shell command-line yang sering digunakan di sistem operasi berbasis Unix, termasuk Linux dan macOS. Zsh memiliki banyak fitur tambahan dibandingkan dengan shell lain seperti Bash, sehingga menjadi pilihan populer di kalangan pengguna yang membutuhkan lebih banyak fungsionalitas dan fleksibilitas.

## Fitur utama ZSH

**1. Auto-suggestion dan Auto-completion:**

Zsh memiliki kemampuan untuk menyarankan perintah saat Anda mengetik, berdasarkan perintah yang pernah Anda gunakan sebelumnya. Ini sangat membantu untuk mempercepat penulisan perintah.

**2. Customization:**

Zsh sangat mudah untuk disesuaikan. Anda bisa mengubah prompt, menambahkan alias, dan mengatur berbagai pengaturan lainnya sesuai kebutuhan Anda.

**3. Plugin dan Tema:**

Dengan kerangka kerja seperti Oh My Zsh, Anda bisa dengan mudah menginstal berbagai plugin dan tema untuk memperluas fungsionalitas Zsh dan membuatnya lebih menarik secara visual.

**4. Scripting dan Fungsi:**

Zsh mendukung scripting yang lebih kuat dan fleksibel dibandingkan dengan banyak shell lainnya. Ini memungkinkan Anda untuk membuat skrip yang lebih kompleks dan efisien.

**5. Fitur-fitur Lain:**

Zsh mendukung globbing yang lebih canggih, pengelompokan perintah, dan memiliki sejarah perintah yang lebih kaya.

## Cara instalasi dan configurasi ZSH di linux

Di tutorial kali ini saya tidak menggunakan Oh-My-Zsh guys, karena itu berat dan memperlambat kinerja terminal kita, solusinya kita lakukan secara manual agar tidak mengorbankan peforma terminal kita

### 1. Instalasi ZSH

Cara instalasi menggunakan **Ubuntu**

```
sudo apt install zsh
```

Cara instalasi menggunakan **Arch Linux**

```
sudo pacman -S zsh
```

### 2. Mengubah default shell ke ZSH

```
chsh -s $(which zsh)
```

Check versi zsh kalau sudah terinstall akan tampil versinya

```
zsh --version
zsh 5.9 (x86_64-pc-linux-gnu)
```

Untuk menggunakan shell ZSH kita perlu keluar terminal lalu masuk lagi

## Installasi dan setup ZSH auto suggestion dan syntax highligting

**1. Clone repo ZSH auto suggestionnya**

```
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
```

**2. Clone repo ZSH syntax highligtingnya**

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.zsh/zsh-syntax-highlighting
```

**3. Aktifkan keduanya di .zshrc file**

Kita bisa menambahkan kode dibawah dengan kode editor favorit kita klo admin nvim hehe

![.zshrc file](/images/root-folder-zshrc.png)

```
# Mengaktifkan ZSH syntax highlighting dan zsh autosuggestions
source ~/./zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
```

Seperti dibawah guys

![Add code to .zshrc](/images/activate-config.png)

Lalu kita save filenya dan keluar

## Terakhir instalasi dan konfigurasi powerlevel10k agar tampilannya keren

**1. Clone dulu reponya**

```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
```

**2. Tambahkan kode dibawah untuk mengaktifkan powerlevel10k di .zshrc file**

```
# Mengaktifkan powerlevel10k
ZSH_THEME="powerlevel10k/powerlevel10k"
source ~/powerlevel10k/powerlevel10k.zsh-theme
```

Seperti ini guys

![Add code to .zshrc](/images/p10k.png)

Lalu kalian bisa save dan keluar

**3. Config tema powerlevel10k**

Untuk config ini kalian bisa keluar terminal lalu masuk lagi, jika configurasi powerlevel10k tidak dimulai otomatis kalian bisa jalankan perintah dibawah

**Note :** kalian perlu berada di ZSH shell dulu, kalo belum kalian bisa jalankan kode dibawah

```
zsh
```

lalu kalian config tema powerlevel10k dengan kode dibawah

```
p10k configure
```

Kita bisa config sendiri sesuai dengan preferensi masing2

![Add code to .zshrc](/images/p10k-config.png)

Kalo sudah selesai kita bisa lihat terminal kita sudah berubah seperti punya admin

![Add code to .zshrc](/images/selesai-zsh.png)

## Kesimpulan

Dengan mengperbagus terminal kita, tentunya juga akan membuat kita lebih betah bermain-main degan terminal kita, yang tadinya boring jadi menyenangkan
