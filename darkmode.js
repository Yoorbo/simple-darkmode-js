const checkbox = document.querySelector('input[name=theme]');
let onpageLoad = localStorage.getItem("theme");
        document.documentElement.setAttribute('data-theme', onpageLoad);
const theme = document.documentElement.getAttribute("data-theme");
document.getElementById("theme-switch").checked = theme !== "light";

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark')
                localStorage.setItem("theme", "dark")
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
                localStorage.setItem("theme", "light")
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000)
        }
