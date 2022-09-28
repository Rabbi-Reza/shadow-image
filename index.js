const shadowImage = (options) => {
    let images = document.querySelectorAll('.shadowimage');

    if(options.shadow_type === 'hard') {
        options.shadow_type = '0px';
    }
    else {
        options.shadow_type = '15px';
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if(options.padding) {
            image.style.padding = '1em';
        }
    })
}

const SmileMe = () => {
    document.write("😋 Hello, Smile Please.😊")
    // document.innerHTML = "New text!";
    // alert("Hi, this is an alert box")
}

module.exports = {shadowImage,SmileMe};