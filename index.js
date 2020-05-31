const bringbread = () => {
    return new Promise((res, rej) => {
        if (isbreadavailable()) {
            return res("hello");
        }
        rej("asdasd");
    });
};
bringbread()
    .then((data) => {
    console.log(data);
})
    .catch((err) => {
    console.log(err);
});
function isbreadavailable() {
    return true;
}
function iseggavailable() {
    return false;
}
console.log("hii");
