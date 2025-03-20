// let value = document.getElementById('d');

// console.log(value.outerHTML);


// function myFunction() {
//     const element = document.getElementsByTagName('h2')[0];
//     element.outerHTML = "<h3>You changed me and my content!</h3>";
// }



// const container = document.getElementById("container");
// const d = document.getElementById("d");

// console.log(container.firstElementChild.nodeName);

// d.outerHTML = "<p>This paragraph replaced the original div.</p>"

// const div = document.createElement("div");
// div.outerHTML = '<div class="test">test</div>';
// console.log(div.outerHTML);

// const p = document.querySelector("p");
// console.log(p.nodeName);
// p.outerHTML = '<div>This div replaced a paragraph.</div>'


// const anc = document.createElement("a");
// anc.href =  "https://developer.mozilla.org?a=b&c=d";
// console.log(anc.outerHTML);

// const para = document.createElement("label");
// para.id = "first";
// console.log(para.outerHTML);
// console.log(para.nodeName);
// // para.outerHTML = "This is first label"; This line throw an error because this element has no parent attribute



// Simple project part


function addNum(num1, num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var value1 = parseInt(num1);
    var value2 = parseInt(num2);

    if(isNaN(value1) || isNaN(value2)) {
        document.getElementById('ans').innerHTML = "Please enter a valid number!"
    }else{
        var result = value1 + value2;
        document.getElementById('ans').innerHTML = "sum:" + " " +result;
    }
}