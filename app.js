// task 1

const blocks = document.querySelectorAll('#block');
const btn = document.querySelectorAll('#btn');

btn.forEach((button, index) => {
    button && button.addEventListener('click', function () {
        console.log('ishladi');
        const block = blocks[index];
        const image = block.querySelector('#image');

        image.src = 'https://picsum.photos/300/300';
        image.style.display = 'block';
        button.style.display = 'none';
    });
});

// KOMENT = har bir btn ga boshqa boshqa img qila olmadim

// task 2

const title = document.querySelectorAll('#list li');

title.length > title.forEach(title => {
    title && title.addEventListener('click', function () {
        console.log('parent', this.parentNode);
        console.log('prev sibling', this.previousElementSibling);
        console.log('next sibling', this.nextElementSibling);
        console.log('child', this.childNodes);
    })
})


// task 3

const block2 = document.querySelectorAll('#block2');
const button = document.querySelector('#btn2');

button && button.addEventListener('click', () => {
    const blockOneP = block2[0].querySelector('p').textContent;
    const blockTwoP = block2[1].querySelector('p').textContent;

    block2[0].querySelector('p').textContent = blockTwoP;
    block2[1].querySelector('p').textContent = blockOneP;
});

// KOMENT = ozimni codlarim uzunlashib keti shuning uchun aptimal yechim kirittim
// albatta chatGPT yordamida organib oldim

// task 4

const button2 = document.querySelectorAll('#btn3');

const randomRed = Math.floor(Math.random() * button2.length);
button2[randomRed].classList.add('qizil');

if (button2.length > 0) {
    button2.forEach(btn => {
        btn.addEventListener('click', function () {
            button2.forEach(btn => btn.classList.remove('qizil'));
            this.classList.add('qizil');
        });
    });
}

// task 5

const card = document.querySelector('.card');
const btn4 = document.querySelector('#btn4');
const checkbox = document.querySelector('#checkbox');

btn4 && btn4.addEventListener('click', function () {
    const p = document.createElement('p');
    p.innerHTML = 'qandaydir element';

    if (checkbox.checked) {
        card.prepend(p);
    } else {
        card.append(p)
    }
})

// task 6

const card2 = document.querySelector('.block3');
const btnLeft = document.querySelector('#btnLeft');
const btnRight = document.querySelector('#btnRight');

btnRight && btnRight.addEventListener('click', function () {
    let block = document.createElement('div');
    block.style.width = '300px';
    block.style.height = '300px';
    block.style.backgroundColor = 'red';

    card2.after(block);
})

btnLeft && btnLeft.addEventListener('click', function () {
    let block = document.createElement('div');
    block.style.width = '300px';
    block.style.height = '300px';
    block.style.backgroundColor = 'red';

    card2.before(block);
})

// task 7

const dellButtons = document.querySelectorAll('#dellBtn');
const uniqueBtn = document.querySelector('#uniqueBtn');

dellButtons.forEach(dellbtn => {
    dellbtn && dellbtn.addEventListener('click', function () {
        const meinBtn = dellbtn.previousElementSibling;
        meinBtn.style.display = 'none'
    })
});

uniqueBtn.addEventListener('click', function () {
    const mainBtn = document.querySelectorAll('#meinBtn');
    mainBtn.forEach(btn => {
        btn.style.display = 'block'
    });
})

// task 8

const cutButtons = document.querySelectorAll('.cutBtn');
const square = document.getElementById('square');

cutButtons.forEach(button => {
    button.addEventListener('click', function () {
        const paragraph = button.previousElementSibling;
        const selectedText = window.getSelection().toString();

        if (selectedText) {
            square.textContent = selectedText;
            paragraph.textContent = paragraph.textContent.replace(selectedText, '');
        } else {
            alert('Iltimos, matnni tanlang!');
        }
    });
});
// <!-- O'ZIMNI AQLIMYETMADI ROSA HARAKAT QILB BAJARAOLMADIM ILOJSIZLIKDAN (CHATGPT) NI ISHLATDIM  -->
// <!-- KEGIN BILSAM JUDA HAM SODDA EKAN😊 -->

// task 9

const btn5 = document.querySelectorAll('#btn5');
const block4 = document.querySelector('#block4');

btn5.forEach(button12 => {
    button12 && button12.addEventListener('click', function () {
        const color = btn5.getAttribute('class');
        block4.style.backgroundColor = color;
    })
});

// task 10

const list = document.querySelector('#list');
const btn7 = document.querySelector('#btn7');

btn7 && btn7.addEventListener('click', function () {
    const newLi = document.createElement('li');
    newLi.innerHTML = `elementnew  <button id="del">dell</button>`;
    list.appendChild(newLi)

    const delButton = newLi.querySelector('#del');
    delButton.addEventListener('click', function () {
        newLi.remove();
    });
})

const delButtons = document.querySelectorAll('#del');
delButtons.forEach(delButton => {
    delButton && delButton.addEventListener('click', function () {
        delButton.parentElement.remove();
    });
});

// task 11

// FOREACHGA TEKSHIRUV QOYA OLMADIM MING BOR UZUR NIMAGADUR OHSHAMAYAPTI 
// (CHATGPT) GA BERSAM BUNI HATO DEYAPTI
const dellButtons2 = document.querySelectorAll('#dellBtn');
const uniqueBtn2 = document.querySelector('#uniqueBtn2');

dellButtons2.forEach(dellbtn => {
    dellbtn && dellbtn.addEventListener('click', function () {
        const meinCard = dellbtn.previousElementSibling;
        meinCard.style.display = 'none'
    })
});

uniqueBtn2.addEventListener('click', function () {
    const mainBtn = document.querySelectorAll('#meinCard');
    mainBtn.forEach(btn => {
        btn.style.display = 'block'
    });
})

// task 12

let selectedBox = null;

document.querySelectorAll('.swap-btn').forEach(button => {
    button.addEventListener('click', function () {
        const currentBox = button.parentElement;

        if (!selectedBox) {
            selectedBox = currentBox;
            currentBox.style.border = '2px dashed black';
        } else {
            const container = currentBox.parentElement;

            const currentBoxClone = currentBox.cloneNode(true);
            const selectedBoxClone = selectedBox.cloneNode(true);

            container.replaceChild(currentBoxClone, selectedBox);
            container.replaceChild(selectedBoxClone, currentBox);

            reattachEventListeners();

            selectedBox.style.border = '1px solid black';
            selectedBox = null;
        }
    });
});

function reattachEventListeners() {
    document.querySelectorAll('.swap-btn').forEach(button => {
        button.removeEventListener('click', function () {});
        button.addEventListener('click', function () {
            const currentBox = button.parentElement;

            if (!selectedBox) {
                selectedBox = currentBox;
                currentBox.style.border = '2px dashed black';
            } else {
                const container = currentBox.parentElement;

                const currentBoxClone = currentBox.cloneNode(true);
                const selectedBoxClone = selectedBox.cloneNode(true);

                container.replaceChild(currentBoxClone, selectedBox);
                container.replaceChild(selectedBoxClone, currentBox);

                reattachEventListeners();

                selectedBox.style.border = '1px solid black';
                selectedBox = null;
            }
        });
    });
}

// tassk 14

let totalScore = 0;

const addButtons = document.querySelectorAll('.add-btn');
const totalScorenew = document.querySelector('.total-score');

addButtons.forEach(button => {
    button && button.addEventListener('click', function () {
        const scoreElement = button.previousElementSibling;
        let currentScore = parseInt(scoreElement.textContent);
        currentScore += 1;
        scoreElement.textContent = currentScore;

        totalScore += 1;
        totalScorenew.textContent = `Umumiy ball: ${totalScore}`;
    });
});

// task 15

const blocks2 = document.querySelectorAll('.block11');

blocks2.forEach(block => {
    const upButton = block.querySelector('.up-btn');
    const downButton = block.querySelector('.down-btn');

    upButton.addEventListener('click', function () {
        const previousBlock = block.previousElementSibling;
        if (previousBlock) {
            block.parentNode.insertBefore(block, previousBlock);
        }
    });

    downButton.addEventListener('click', function () {
        const nextBlock = block.nextElementSibling;
        if (nextBlock) {
            block.parentNode.insertBefore(nextBlock, block);
        }
    });
});