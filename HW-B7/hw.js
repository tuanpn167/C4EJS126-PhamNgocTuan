let a = "Hello";
let b = "MindX";

// Log ra ki tu thu 2 trong string a
console.log(a[1]);

// tạo chuỗi c bằng cách nối a và b
let c = a + b;
console.log(c);

// Check xem bắt đầu chuỗi b có phải là chữ M hay không?
console.log(b.startsWith("M"));

// Check xem bắt đầu chuỗi b có phải là chữ m hay không?
console.log(b.startsWith("m"));

// Check xem kết thúc chuỗi b có phải là chữ x hay không?
console.log(b.endsWith("x"));

// Check xem kết thúc chuỗi b có phải là chữ X hay không?
console.log(b.endsWith("X"));

// Check chuỗi a xem có chứa kí tự "a" hay không?
console.log(a.includes("a"));

// Check chuỗi a xem có chứa kí tự "e" hay không?
console.log(a.includes("e"));

// Check chuỗi a xem kí tự "l" ở vị trí số mấy?
console.log(a.indexOf("l"));

// Check chuỗi a xem kí tự "l" CUỐI CÙNG ở vị trí số mấy?
console.log(a.lastIndexOf("l"));

// Độ dài a là bao nhiêu ký tự?
console.log(a.length);

// Tạo chuỗi "ll" từ string a
console.log(a.slice(2, 4));

// viết hoa tất cả các chữ trong string a
console.log(a.toUpperCase());

// viết thường tất cả các chữ trong string a
console.log(a.toLowerCase());

// Thay đổi nội dung string a từ "Hello" thành "Hi"
a = "Hi";
console.log(a);

// thêm các ký tự khoảng trắng "    " vào đầu, cuối string a
a = " " + a + " ";
console.log(a);

// sau khi thêm các ký tự khoảng trắng, lần lượt dùng hàm trimStart(), trimEnd(), trim() và in ra kết quả
console.log(a.trimStart());
console.log(a.trimEnd());
console.log(a.trim());