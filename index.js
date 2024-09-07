function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sans = [];
for (let i = 0; i < sansImage.length; i++) {
    for (let j = 0; j < sansImage[i].length; j++) {
        if (sansImage[i][j] != ' ') {
            sans.push({ x: i, y: j, content: sansImage[i][j] });
        }
    }
}

const offsetX = sansImage[0].length * 1.7; // 根据需要调整间距
const offsetY = sansImage.length * 2; // 根据需要调整间距

function createCharacter(id, startX, startY) {
    let character = document.createElement("div");
    document.getElementById("main").appendChild(character);
    character.textContent = sans[id].content;
    character.classList.add("character");
    character.style.position = "absolute";
    character.style.top = `${startX}px`;
    character.style.left = `${startY}px`;

    // 计算目标位置
    const targetX = startX + (sans[id].y * 2 - offsetX);
    const targetY = startY + (sans[id].x * 3.9 - offsetY);

    const deltaX = targetX - startX;
    const deltaY = targetY - startY;

    const angle = Math.atan2(deltaY, deltaX); // 计算角度（弧度）
    const speed = 10; // 设定一个恒定速度
    let time = 0;
    console.log(startX, startY, targetX, targetY, deltaX, deltaY);
    function animate() {
        const x = speed * time * Math.cos(angle);
        const y = speed * time * Math.sin(angle);
        character.style.transform = `translate(${x}px, ${y}px)`;

        // 计算当前字符的位置
        const currentX = startX + x;
        const currentY = startY + y;

        // 检查是否到达目标位置
        if (Math.abs(currentX - targetX) < speed && Math.abs(currentY - targetY) < speed) {
            character.style.transform = `translate(${deltaX}px, ${deltaY}px)`; // 确保字符精确到达目标位置
            return; // 停止动画
        }

        requestAnimationFrame(animate);
        time += 0.1;
    }

    animate();
}

var button = document.getElementById("printSans");
button.addEventListener("click", printSans);

function printSans() {
    for (let i = 0; i < sans.length; i++) {
        setTimeout(() => createCharacter(i, window.innerWidth / 2, window.innerHeight / 2), 1);
        button.style.opacity = `${100 - i / sans.length}`;
    }
}
