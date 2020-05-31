"use strict";
const bringbread = () => {
  return new Promise((res, rej) => {
    if (isbreadavailable()) {
      return res("hello");
    }
    rej("asdasd");
  });
};
bringbread()
  .then((data: any) => {
    console.log(data);
  })
  .catch((err: any) => {
    console.log(err);
  });

function isbreadavailable() {
  return true;
}

function iseggavailable() {
  return false;
}
console.log("hii");
