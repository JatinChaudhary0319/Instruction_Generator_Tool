class ChatGPT {
    constructor() { 
        this.key = "um/rtql/EezJ5qOqHC|J[u;pe9nQV5DndmHLqcEXD|2z[CC9Om8uUoci"
    }

    async generateText(prompt_text, model = "gpt-3.5-turbo-instruct", max_tokens = 1250, temperature = 0.85) {
        var url = "https://api.openai.com/v1/completions";

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
                window.open_ai_response = JSON.parse(xhr.responseText);
            }
        };

        var data = `{
            "model": "gpt-3.5-turbo-instruct",
            "prompt": "${prompt_text}",
            "temperature": ${temperature},
            "max_tokens": ${max_tokens},
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        }`;

        xhr.send(data);
    }

    async getDetailed(prompt) {
        let editedPrompt = "Write detailed steps on how: " + prompt + ", it should be strictly be in provided format where all the steps are started with word [Step] number and are separated with this semi-colon, such that 'Step 1: abc;Step 2: pqr;Step 3: xyz'.";

        const resdata = await this.generateText(editedPrompt);
        return resdata;
    }

    async getSimple(prompt) {
        let editedPrompt = "Simplify these steps as much as possible: " + prompt + " and keep the steps separated by semi-colon. Please also make the new steps be a description of an image depicting the step.";

        const resData = await this.generateText(editedPrompt);
        return resData;
    }

    //Make below used on each instruction individually, similar to dalle calls, break instructions by semicolon

    async getDetailedImageDescription(question, bulletpoints){
        let editedPrompt = "Take the main topic of each bullet point below. And keep in mind the problem " + question + " . And create only one descriptive image for each separated by semi-colon, such that 'Step 1: abc;Step 2: pqr;Step 3: xyz'. "  + bulletpoints;

        const resData = await this.generateText(editedPrompt);
        return resData;
    }
}

const chatgpt = new ChatGPT();
window.ChatGPT = chatgpt;
