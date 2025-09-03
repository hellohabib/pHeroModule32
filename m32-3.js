
//🧠 fetch(); কি?? //🧠 fetch কি করে??
//fetch() এর আর্গুমেন্টে দেওয়া URL-এ একটি HTTP request পাঠায় এবং URL থেকে প্রাপ্ত ডাটা নিয়ে response দেওয়ার জন্য একটি promise রিটার্ন করে।
 const url="https://jsonplaceholder.typicode.com/todos/1";
const promiseOfFetch = fetch(url);
console.log(promiseOfFetch); 
// এই response থেকে JSON, টেক্সট, বা অন্যান্য ফরম্যাটে ডেটা নেওয়া যায়। JSON ফরম্যাটে ডেটা নেওয়ার জন্য .then() এবং .json() ইউজ করা হয়। এটিও ডেটা দেওয়ার জন্য একটি promise রিটার্ন করে।
 const promiseOfJson = promiseOfFetch.then(resp => resp.json());
console.log(promiseOfJson); 
// .json() এর দেওয়া promise থেকে ফাইনালি Object ফরম্যাটে ডেটা পাওয়া যায়
 promiseOfJson.then(dta => console.log(dta)); 
// ফাইনাল Object ফরম্যাটে ডেটা পাওয়ার জন্য উপরের পুরা কোড শর্টে নিচের মত লেখা যায়ঃ 
fetch("https://jsonplaceholder.typicode.com/todos/1").then(r=>r.json()).then(d=>console.log(d));



