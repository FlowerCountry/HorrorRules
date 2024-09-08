/*
 * @Author: FlowerCity admin@flowercity.xyz
 * @Date: 2024-09-08 15:14:38
 * @LastEditors: FlowerCity admin@flowercity.xyz
 * @LastEditTime: 2024-09-08 21:56:43
 * @FilePath: \HorrorRules\index.js
 */

let accumulatedTime = 0;

StartContent.forEach(item => {
    accumulatedTime += item.time * 1000;
    setTimeout(() => {
        for (let i = 0; i < document.getElementsByClassName('text').length; i++) {
            document.getElementsByClassName('text')[i].remove();
        }
        let text = document.createElement("div");
        document.getElementById('start').appendChild(text);
        text.textContent = item.content;
        text.classList.add('text');
    }, accumulatedTime);
});