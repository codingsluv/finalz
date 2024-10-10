function factorial(n) {
 // Validasi input
 if (n < 0) {
  throw new Error("Input harus bilangan bulat positif.");
}
// Basis kasus
if (n === 0 || n === 1) {
  return 1;
}
// Rekursi
return n * factorial(n - 1);
}


// Jangan hapus kode di bawah ini!
export default factorial;
