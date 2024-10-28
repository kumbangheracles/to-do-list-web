const addButton = document.getElementById('addButton')
addButton.addEventListener('click', function(){
    const task = document.getElementById('task').value;
    let contentList = document.querySelector('.content-exist')
    let newElement = document.createElement('p');
    newElement.textContent = task;
    let bungkusContent = document.createElement('div');
    // tombol close list
    let close = document.createElement('a');
    close.textContent = 'x';
    close.style.cursor = 'pointer';
        close.addEventListener('click', function(e){
            e.target.parentElement.remove();
            e.preventDefault();
        })
    
    //styling div tiap list
    bungkusContent.style.display = 'flex'
    bungkusContent.style.justifyContent = 'space-around'


    // menambahkan checkbox setelah elemen
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    bungkusContent.appendChild(newElement);
    bungkusContent.appendChild(checkbox);
    bungkusContent.appendChild(close);
    //menambahkan bungkusContent kedalam contentList
    contentList.appendChild(bungkusContent);

    if(task === ''){
        alert('Task Harus Diisi!!!')
        bungkusContent.innerHTML = '';
    }
});


//clear button
const clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    let contentList = document.querySelector('.content-exist');
    contentList.innerHTML = '';
})