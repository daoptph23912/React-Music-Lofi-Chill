const { Readable } = require('stream');

const myStream = new Readable({
  read() {}
});

// Thay vì gán giá trị trực tiếp cho thuộc tính closed
// myStream.closed = true; // <-- Lỗi xảy ra ở đây

// Sử dụng phương thức destroy() để đóng stream
myStream.destroy();
