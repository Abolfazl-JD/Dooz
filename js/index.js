    let circle = false
    let game = document.querySelector('.game')
    let xwin = document.querySelector('.x-win')
    let cwin = document.querySelector('.circle-win')
    let draw = document.querySelector('.draw')
    let boxes = document.querySelectorAll('.box')
    let arr = ['','','','','','','','','']

        for (let i = 0; i < boxes.length; i++) {
            const element = boxes[i]

            element.onclick = () => {
                if(circle){
        let icon = document.createElement('i')
                    icon.setAttribute('class', 'far fa-circle')
                    icon.setAttribute('id', `ic${i}`)
                    element.append(icon)
                    circle = false
                    let img = document.getElementById(`ic${i}`)
                    let pic = img.getAttribute('class')
                    arr[i] = pic
                }
                else{
        let icon = document.createElement('i')
                    icon.setAttribute('class', 'fas fa-times')
                    icon.setAttribute('id', `ic${i}`)
                    element.append(icon)
                    circle = true
                    let img = document.getElementById(`ic${i}`)
                    let pic = img.getAttribute('class')
                    arr[i] = pic
                }

                if (arr[0] === 'fas fa-times' && arr[1] === 'fas fa-times' && arr[2] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                }
                else if (arr[0] === 'fas fa-times' && arr[3] === 'fas fa-times' && arr[6] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                }

                else if (arr[0] === 'fas fa-times' && arr[4] === 'fas fa-times' && arr[8] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                }
                else if (arr[1] === 'fas fa-times' && arr[4] === 'fas fa-times' && arr[7] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                }
                 else if (arr[2] === 'fas fa-times' && arr[5] === 'fas fa-times' && arr[8] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                }
                 else if (arr[2] === 'fas fa-times' && arr[4] === 'fas fa-times' && arr[6] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                }
                else if (arr[3] === 'fas fa-times' && arr[4] === 'fas fa-times' && arr[5] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                }
                else if (arr[6] === 'fas fa-times' && arr[7] === 'fas fa-times' && arr[8] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                }

                else if (arr[0] === 'far fa-circle' && arr[1] === 'far fa-circle' && arr[2] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                }
                else if (arr[0] === 'far fa-circle' && arr[3] === 'far fa-circle' && arr[6] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                }

                else if (arr[0] === 'far fa-circle' && arr[4] === 'far fa-circle' && arr[8] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                }
                else if (arr[1] === 'far fa-circle' && arr[4] === 'far fa-circle' && arr[7] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                }
                else if (arr[2] === 'far fa-circle' && arr[5] === 'far fa-circle' && arr[8] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                }
                else if (arr[2] === 'far fa-circle' && arr[4] === 'far fa-circle' && arr[6] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                }
                else if (arr[3] === 'far fa-circle' && arr[4] === 'far fa-circle' && arr[5] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                }
                else if (arr[6] === 'far fa-circle' && arr[7] === 'far fa-circle' && arr[8] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                }


                if(arr.indexOf('') === -1){
                                    if (arr[0] === 'fas fa-times' && arr[1] === 'fas fa-times' && arr[2] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[0] === 'fas fa-times' && arr[3] === 'fas fa-times' && arr[6] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                    }

                    else if (arr[0] === 'fas fa-times' && arr[4] === 'fas fa-times' && arr[8] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[1] === 'fas fa-times' && arr[4] === 'fas fa-times' && arr[7] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[2] === 'fas fa-times' && arr[5] === 'fas fa-times' && arr[8] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[2] === 'fas fa-times' && arr[4] === 'fas fa-times' && arr[6] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[3] === 'fas fa-times' && arr[4] === 'fas fa-times' && arr[5] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[6] === 'fas fa-times' && arr[7] === 'fas fa-times' && arr[8] === 'fas fa-times') {

        setTimeout(() => {
            game.style.display = 'none'
            xwin.style.display = 'block'
        }, 500);
                    }

                    else if (arr[0] === 'far fa-circle' && arr[1] === 'far fa-circle' && arr[2] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[0] === 'far fa-circle' && arr[3] === 'far fa-circle' && arr[6] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                    }

                    else if (arr[0] === 'far fa-circle' && arr[4] === 'far fa-circle' && arr[8] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[1] === 'far fa-circle' && arr[4] === 'far fa-circle' && arr[7] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[2] === 'far fa-circle' && arr[5] === 'far fa-circle' && arr[8] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[2] === 'far fa-circle' && arr[4] === 'far fa-circle' && arr[6] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[3] === 'far fa-circle' && arr[4] === 'far fa-circle' && arr[5] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                    }
                    else if (arr[6] === 'far fa-circle' && arr[7] === 'far fa-circle' && arr[8] === 'far fa-circle') {
        setTimeout(() => {
            game.style.display = 'none'
            cwin.style.display = 'block'
        }, 500);
                    }
                    else{
        setTimeout(() => {
            game.style.display = 'none'
            draw.style.display = 'block'
        }, 500);
                    }
                }
            }




        }

        $(document).ready(function(){
        $('#btn1').click(function () {
            $(location).reload(true);
        })

             $('#btn2').click(function () {
                $(location).reload(true);
            })

            $('#btn3').click(function () {
        location.reload(true);
            })
        })