const changeThemeButton = document.getElementById('changeThemeButton');
    changeThemeButton.onclick = function () {
        if(changeThemeButton.src.endsWith('https://github.com/user-attachments/assets/ae957970-4dee-4c09-a6d9-2eb48769feee')) {
            changeThemeButton.src = 'https://github.com/user-attachments/assets/1f8a3b76-fd93-41ad-8b22-f6c83296fee1';
            theme.classList.toggle('changeTheme');
            console.log('theme changed successfully!');
                }
        else {
            changeThemeButton.src = 'https://github.com/user-attachments/assets/ae957970-4dee-4c09-a6d9-2eb48769feee';
            theme.classList.toggle('changeTheme');
            console.log('theme changed successfully!');
                }
            }
