
            if (!localStorage.getItem('counter')) {
                localStorage.setItem('counter', 0);
            }

            function count() {
                localStorage.setItem('counter', counter);
                counter = counter + 1;
                document.querySelector('h1').innerHTML = counter;
                localStorage.setItem('counter', counter);
            }

            document.addEventListener('DOMContentLoaded', function() {
                document.querySelector('h1').innerHTML = localStorage.getItem('counter')       
                document.querySelector('button').onclick = count;
            });                
