class DallE {
  constructor() {
    this.key = "vn0surm0Ff{K6rPrID}K\v<qf:oRW6EoenIMrdFYE}3{\DD:Pn9vVpdj"
  }

  async getImage(prompt_text, input, i) {
    var url = "https://api.openai.com/v1/images/generations";
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    this.usable = "";
    for(let i = 0; i < this.key.length; i++)
    {
        this.usable += String.fromCharCode(this.key.charCodeAt(i) - 3);
    }

    xhr.setRequestHeader("Authorization", "Bearer " + this.usable);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            window.dallEResponse = JSON.parse(xhr.responseText);
            window.images.push([window.dallEResponse, i])
        }
    };

    var data = `{
        "model": "dall-e-3",
        "prompt": "Create an image with English text: '${prompt_text}', which relates to the task: ${input}.",
        "n": 1,
        "size": "1024x1024"
    }`;

    xhr.send(data);
}
}

let dalle = new DallE();
window.DallE = dalle;