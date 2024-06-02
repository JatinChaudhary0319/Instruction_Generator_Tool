class DallE {
  constructor() {
    this.key = "um/rtql/EezJ5qOqHC|J[u;pe9nQV5DndmHLqcEXD|2z[CC9Om8uUoci"
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
        this.usable += String.fromCharCode(this.key.charCodeAt(i) - 2);
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