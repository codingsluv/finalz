// orders.js

// Fungsi untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel yang menampung data orders
let orders = [];

// Fungsi untuk menambah pesanan
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };
  
  orders.push(newOrder);
  return newOrder; // Mengembalikan pesanan yang baru ditambahkan
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status;
    return order; // Mengembalikan pesanan yang sudah diperbarui
  } else {
    return null; // Mengembalikan null jika pesanan tidak ditemukan
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan
function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
    return true; // Mengembalikan true jika pesanan berhasil dihapus
  } else {
    return false; // Mengembalikan false jika pesanan tidak ditemukan
  }
}

// Mengeksport variabel dan fungsi
export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
