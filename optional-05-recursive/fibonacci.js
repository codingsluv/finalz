function fibonacci(n) {
    // Validasi input
  if (n < 0) {
    throw new Error("Input harus bilangan bulat positif.");
  }
  // Basis kasus
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  // Rekursi
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
