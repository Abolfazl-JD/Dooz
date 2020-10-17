    let circle = false
    let game = document.querySelector('.game')
    let xwin = document.querySelector('.x-win')
    let cwin = document.querySelector('.circle-win')
    let draw = document.querySelector('.draw')
    let boxes = document.querySelectorAll('.box')
    let arr = ['', '', '', '', '', '', '', '', '']

    for (let i = 0; i < boxes.length; i++) {
        const element = boxes[i]
        let win_ways = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]]

        element.onclick = () => {
            if (circle) {
                let icon = document.createElement('i')
                icon.setAttribute('class', 'far fa-circle')
                icon.setAttribute('id', `ic${i}`)
                element.append(icon)
                circle = false
                let img = document.getElementById(`ic${i}`)
                let pic = img.getAttribute('class')
                arr[i] = pic
            }
            
            else {
                let icon = document.createElement('i')
                icon.setAttribute('class', 'fas fa-times')
                icon.setAttribute('id', `ic${i}`)
                element.append(icon)
                circle = true
                let img = document.getElementById(`ic${i}`)
                let pic = img.getAttribute('class')
                arr[i] = pic
            }

            for (const ways_to_win of win_ways) {
                let classes = []
                for (const index of ways_to_win) {
                    classes.push(arr[index])
                }

                let times_win = classes.every(v => v === 'fas fa-times')
                let circle_win = classes.every(v => v === 'far fa-circle')

                if(times_win){
                    setTimeout(() => {
                        game.style.display = 'none'
                        xwin.style.display = 'block'
                    }, 500);
                }
                else if(circle_win){
                    setTimeout(() => {
                        game.style.display = 'none'
                        cwin.style.display = 'block'
                    }, 500);
                }
                else if(circle_win === false && !times_win === false && arr.indexOf('') === -1){
                    setTimeout(() => {
                        game.style.display = 'none'
                        draw.style.display = 'block'
                    }, 500);
                }
            }

                
        }




    }

    $(document).ready(function () {
        $('#btn1').click(function () {
            location.reload(true);
        })

        $('#btn2').click(function () {
            location.reload(true);
        })

        $('#btn3').click(function () {
            location.reload(true);
        })
    })