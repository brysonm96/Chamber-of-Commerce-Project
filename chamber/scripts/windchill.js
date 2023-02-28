const w = document.querySelector("#windChill");
const t = parseInt(document.querySelector("#temperature").textContent);
const s = parseInt(document.querySelector("#speed").textContent);

if (t <= 50 && s > 3.0){
    f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 *  t * Math.pow(s,0.16));
}

else {
    w.textContent = "N/A";
}

w.textContent = parseFloat(f).toFixed(1)