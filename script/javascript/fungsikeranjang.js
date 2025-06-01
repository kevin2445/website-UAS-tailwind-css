// Fungsi untuk memperbarui tampilan jumlah item di ikon keranjang
        function updateCartDisplay() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            document.getElementById('cart-item-count').innerText = cart.length;
        }

        // Event listener saat halaman dimuat
        document.addEventListener('DOMContentLoaded', () => {
            updateCartDisplay(); // Panggil saat halaman dimuat untuk menampilkan jumlah item yang tersimpan

            // Ambil semua tombol 'Add to Cart'
            const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
            
            // Tambahkan event listener ke setiap tombol 'Add to Cart'
            addToCartButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productName = event.target.dataset.productName;
                    const productPrice = parseInt(event.target.dataset.productPrice); // Pastikan ini angka
                    // Ambil src gambar dari elemen img terdekat di dalam card
                    const productImage = event.target.closest('.card').querySelector('.card-img-top').src; 

                    let cart = JSON.parse(localStorage.getItem('cart')) || [];

                    // Cek apakah produk sudah ada di keranjang
                    const existingProductIndex = cart.findIndex(item => item.name === productName);

                    if (existingProductIndex > -1) {
                        // Jika sudah ada, tambahkan kuantitas
                        cart[existingProductIndex].quantity += 1;
                    } else {
                        // Jika belum ada, tambahkan produk baru ke keranjang
                        cart.push({
                            name: productName,
                            price: productPrice,
                            quantity: 1,
                            image: productImage // Simpan path gambar
                        });
                    }

                    localStorage.setItem('cart', JSON.stringify(cart)); // Simpan keranjang ke local storage
                    updateCartDisplay(); // Perbarui tampilan jumlah item di keranjang
                    alert(`${productName} telah ditambahkan ke keranjang!`);
                });
            });
        });