
# Stack Visualizer Application


<img src="https://raw.githubusercontent.com/msnitish/stack-visualizer/main/public/img/mug_1.png" alt="drawing" width="70%"/>

A simple Node.js app using [Express 4](http://expressjs.com/) which serves as a web interface to :
* Push elements to the stack
* Pop elements from the stack
* Set the size of stack
* Display the elements present in stack

Stack has been implemented using Javascript array.
The stack class can be found in :
`/stack.js`

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.
#### 1. Clone the repository 
```sh
git clone https://github.com/msnitish/stack-visualizer.git
```
#### 2. Change directory to the project's root directory
```sh
cd stack-visualizer
```
#### 3. Clean Install the required packages and dependencies.
```sh
npm ci
```
#### 4. Start the Stack Visualizer application.
```sh
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Validations 
* `Set the size of stack` and `push` input fields do not take empty input.
* `Set the size of stack` input field takes only positive integral inputs.
* When `push` operation is performed while the stack is full, an error message is displayed.
* When `pop` operation is performed while the stack is empty, an error message is displayed.

<img src="https://raw.githubusercontent.com/msnitish/stack-visualizer/main/public/img/mug_2.png" alt="drawing" width="70%"/>
<img src="https://raw.githubusercontent.com/msnitish/stack-visualizer/main/public/img/mug_3.png" alt="drawing" width="70%"/>
