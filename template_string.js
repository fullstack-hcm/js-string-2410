let name = 'mern2410';
// 0: inactive
let status = 0;

if (status === 0) {
    console.log('trang thai cua ban la KO HOAT DONG');
} else {
    console.log('trang thai cua ban la DANG HOAT DONG');
}

// ES6 || TEMPLATE STRING
console.log(`${status === 1 ? 'ACTIVE' : 'INACTIVE'}`);