function bm()
{
let weight = document.getElementById("num").value;

let height = document.getElementById("numm").value;

    let bm = parseFloat(weight) /parseFloat(height*height);
    
    document.getElementById("span").innerText = (`Your BMI is ${bm}`);
}