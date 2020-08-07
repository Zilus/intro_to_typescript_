"use strict";

// start process -> Pending
// complete process -> Resolve
// Not completed -> Reject

let performUpload = function(imgStatus: string) : Promise<{imgStatus: string}> {
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(
            () => {
                resolve({ imgStatus: imgStatus })
            }, 1000
        );
    });
}

var upload;
var compress;
var transfer;

performUpload('uploading...')
.then((res) => {
    compress = res;
    return performUpload('compressing...');
})
.then((res) => {
    upload = res;
    return performUpload('transfering...');
})
.then((res) => {
    transfer = res;
    return performUpload('Image upload completed');
});