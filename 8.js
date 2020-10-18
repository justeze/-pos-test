const cetak_gambar = (number) => {
  if (number % 2 === 1) {
    console.log('--- panjang ---')
    for (let row = 0; row < number; row++) {
      let lines = "";
      for (let col = 0; col < number; col++) {
        if (col === 0 || col === number - 1) {
          lines += '* ';
        } else if (row === Math.floor(number / 2)) {
          lines += '* ';
        } else {
          lines += '= ';
        }
      }
      console.log(lines)
    }
  } else {
    console.log('input harus ganjil')
  }

};

cetak_gambar(5);
