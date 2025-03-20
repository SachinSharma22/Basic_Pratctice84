// let value = document.getElementById('d');

// console.log(value.outerHTML);


function myFunction() {
    const element = document.getElementsByTagName('h2')[0];
    element.outerHTML = "<h3>You changed me and my content!</h3>";
}



const container = document.getElementById("container");
const d = document.getElementById("d");

console.log(container.firstElementChild.nodeName);

d.outerHTML = "<p>This paragraph replaced the original div.</p>"

// const div = document.createElement("div");
// div.outerHTML = '<div class="test">test</div>';
// console.log(div.outerHTML);

const p = document.querySelector("p");
console.log(p.nodeName);
p.outerHTML = '<div>This div replaced a paragraph.</div>'


const anc = document.createElement("a");
anc.href =  "https://developer.mozilla.org?a=b&c=d";
console.log(anc.outerHTML);

const para = document.createElement("label");
para.id = "first";
console.log(para.outerHTML);
console.log(para.nodeName);
// para.outerHTML = "This is first label"; This line throw an error because this element has no parent attribute
