# Smartinator

- ### Tech Stack used:
	<center>
		<table>
			<tbody>
				<tr>
					<td width="25%" align="center">
						<span><strong>HTML</strong></span><br/>
						<img height="64px" width="64px" src="https://clipartcraft.com/images/html5-logo-html-5.png">
					</td>
					<td width="25%" align="center">
						<span><strong>CSS</strong></span><br/>
						<img height="64px" width="64px" src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3.png">
					</td
          				<td width="25%" align="center">
						<span><strong>Openai</strong></span><br/>
						<img height="64px" width="64px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F022%2F227%2F351%2Foriginal%2Fopenai-chatgpt-logo-icon-free-png.png&f=1&nofb=1&ipt=a7ab6ff713004117835fa60a42ca3a9490a091755d1379ae3980cb5de5579c08&ipo=images">
					</td>
          				<td width="25%" align="center">
						<span><strong>JavaScript</strong></span><br/>
						<img height="64px" width="64px" src="https://openclipart.org/image/800px/272343">
					</td>
				</tr>
			</tbody>
		</table>
	</center>
## Objective
We have created a website that allows users to input a problem they are experiencing, and in response uses AI to generate a comprehensive step-by-step guide with accompanying images to guide the user to a solution.


## Live Demo Link:
You can visit and have a look <a href="https://jatinchaudhary0319.github.io/Instruction_Generator_Tool/" target="_blank" rel="noopener noreferrer">here</a>.

## Inspiration
With improving artificial intelligence technologies on the rise <br />
- such as GPT3 and DALL·E 2 - integrating AI is becoming easier by the day. <br />
In the future, we expect many upcoming breakthroughs to come from the advancement of AI generation, and learning to utilize these technologies to create engaging and informative content is crucial.

## What It Does
We designed a website where users input a problem they are trying to troubleshoot. <br />
An example might be "My router is slow". Using the input, we create a set of instructions for the user along with images that correspond with each step, guiding the user to a solution for their problem. <br />
Searching online for solutions for specific issues can be frustrating and challenging, especially when you don't know exactly what you are looking for. We hope that having a convenient and user-focused website will reduce the amount of time people spend searching for solutions as well as give them the proper solution on the first try.

## How It Works
To build our project we used JavaScript, HTML, and the OpenAI API. <br />
Our website communicates with OpenAI to generate step-by-step processes our users can follow to solve real-world problems, using the ChatGPT model. <br />
We then use ChatGPT to generate effective prompts for related image generation, and provide these prompts to DALL·E to generate image.

## Challenges We Ran Into
Difficulty in bringing OpenAI to correctly interact with our website. <br />
Challenging to get the API to connect with our website in real-time. <br />
Many unfamiliar bugs. <br />
Difficulty getting the AI to process exactly what we want. <br />
Generating concise, but complete steps for the user. <br />
Generating easy-to-follow images with our steps. <br />
Ensuring our prompts provide enough data to generate relevant images. <br />

## Our Accomplishments
We are most proud that we were able to bring the separate components of our project to communicate. <br />
We each had specific roles to play in early development, and bringing all our pieces together as one final product was a gratifying experience. We are also proud that we were able to properly connect the OpenAI API to our project. No one on our team has experience with OpenAI, so creating a easy-to-use interface utilizing the ChatGPT and DALL·E libraries in conjunction was a huge accomplishment for our team.

## What we learned
Product planning as a team. <br />
The inner workings of OpenAI.

## Future of our Product
Improve more in-depth steps to guide the user to a solution. <br />
Allow user to provide more information to fix current solutions given. <br />
Improve our image processing to provide more "guideful" images. <br />
Create an app for user convenience.
