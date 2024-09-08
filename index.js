/*
 * @Author: FlowerCity admin@flowercity.xyz
 * @Date: 2024-09-08 15:14:38
 * @LastEditors: FlowerCity admin@flowercity.xyz
 * @LastEditTime: 2024-09-08 21:43:11
 * @FilePath: \HorrorRules\index.js
 */

let accumulatedTime = 0;

content.forEach(item => {
    accumulatedTime += item.time * 1000;
    setTimeout(() => {
        console.log(item.content);
    }, accumulatedTime);
});