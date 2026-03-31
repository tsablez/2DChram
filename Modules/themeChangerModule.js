const changeThemeButton = document.getElementById('changeThemeButton');
    changeThemeButton.onclick = function () {
        if(changeThemeButton.src.endsWith('mainSource/sun.svg')) {
            changeThemeButton.src = 'mainSource/moon.svg';
            theme.classList.toggle('changeTheme');
            console.log('theme changed successfully!');
                }
        else {
            changeThemeButton.src = 'mainSource/sun.svg';
            theme.classList.toggle('changeTheme');
            console.log('theme changed successfully!');
                }
            }
