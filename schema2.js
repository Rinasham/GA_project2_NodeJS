const mongoose = require('mongoose')

//--------DB settings------------------

const DB_PASS = process.env.DB_PASSWORD

// mongoose.connect(`mongodb+srv://admin-rina:${DB_PASS}@clustergaproj2.buzm8.mongodb.net/QuizDB`,{useNewUrlParser: true})
mongoose.connect(`mongodb://localhost:27017/QuizDB`,{useNewUrlParser: true})



const quizSchema = new mongoose.Schema({
  // id: Number,
  question: {
    type : String,
    required : true
  },
  answers: {
    answer_a: String,
    answer_b: String,
    answer_c: String,
    answer_d: String
  },
  correct_answer: {
    type : String,
    required : true
  },
  category: {
    type : String,
    required : true
  },
})

const Quiz = mongoose.model('Quiz', quizSchema)


//---------------------------------------------------------

// Linux
Quiz.insertMany(
  [
  {"question": "Which of the following is NOT a Linux based operating system?",
    "answers": {a: "Ubuntu", b: "CentOS",c: "IOS",d: "Debian"},
    "correct_answer": "c",
    "category": "linux"},
  {"question": "What is the first character for a file or directory names which is hidden unless specifically requested?",  "answers": {a: "\ (backslash)", b: ". (dot)",c: " - (minus)",d: "_ (underscore)"},"correct_answer": "b", "tag": null,"category": "linux"},
  {
    "question": "Which of the following process is known as “super daemon” in Unix?",
    "answers": {a: "sysinit", b: "init",c: "inetd",d: "proc"},
    "correct_answer": "b",
    "category": "linux"},
  {
    "question": "What is the name of the method that kernel uses to minimize the frequency of disk access by maintaining a pool of internal data buffer to increase the response time and throughput?",
    "answers": {a: "Pooling", b: "Spooling",c: "Buffer cache",d: "Swapping"},
    "correct_answer": "c",
    "category": "linux"},
  {
    "question": "What approach does an application use to communicate with the kernel?",
    "answers": {a: "System calls", b: "C Programs",c: "Shell script",d: "Shell"},
    "correct_answer": "a",
    "category": "linux"},
  {
    "question": "Linux was released in",
    "answers": {a: "1975", b: "1982",c: "1991",d: "1999"},
    "correct_answer": "b",
    "category": "linux"},
  {
    "question": "What is the purpose of <dmesg> command?",
    "answers": {a: "Shows user login logoff attempts", b: "Shows the Syslog file for info messages",c: "kernel log messages",d: "Shows the daemon log messages"},
    "correct_answer": "c",
    "category": "linux"},
  {
    "question": "The creator of Linux is",
    "answers": {a: "Steve Jobs", b: "Linus Torvalds",c: "Bill Gates",d: "James Gosling"},
    "correct_answer": "b",
    "category": "linux"},
  {
    "question": "The core of a Linux OS is called",
    "answers": {a: "Kernel", b: "Shell",c: "Command",d: "GUI"},
    "correct_answer": "a",
    "category": "linux"},
  {
    "question": "What's the advantage of Linux?",
    "answers": {a: "Open Source", b: "Fast",c: "Stable",d: "abundant plugins"},
    "correct_answer": "a",
    "category": "linux"},
  {
    "question": "UNIX is...",
    "answers": {a: "free software", b: "downgraded Linux",c: "commercial product",d: "hardware componet"},
    "correct_answer": "c",
    "category": "linux"},
  {
    "question": "Minix is a clone of",
    "answers": {a: "Mac OS", b: "Unix",c: "linux",d: "Microsoft"},
    "correct_answer": "b",
    "category": "linux"},
  {
    "question": "Which is a type of Linux?",
    "answers": {a: "Windows 7", b: "iOS",c: "MAC",d: "Ubuntu desktop"},
    "correct_answer": "d",
    "category": "linux"},
])


// Docker
Quiz.insertMany([
  {
    "question": "A container means...",
    "answers": {a: "A standard unit of software", b: "A python data structure",c: "A online code repository",d: "A unit of hardware"},
    "correct_answer": "a",
    "category": "docker"},
  {
    "question": "A container image is...",
    "answers": {a: "A virtual machine", b: "An image of a running container",c: "A read-only blueprint for a container",d: "A command to ship a container"},
    "correct_answer": "c",
    "category": "docker"},
  {
    "question": "A Docker Hub is...",
    "answers": {a: "a compiled binary file", b: "a repository for container images",c: "a command to initialze the database",d: "a command to build a Docker image"},
    "correct_answer": "b",
    "category": "docker"},
  {
    "question": "The command to create cluster with swarm tool is",
    "answers": {a: "docker create service", b: "docker init",c: "docker swarm init",d: "docker swarm join"},
    "correct_answer": "c",
    "category": "docker"},
  {
    "question": "The command to list a service is",
    "answers": {a: "docker service ls", b: "docker ls",c: "dcker swarm ls",d: "docker ls service"},
    "correct_answer": "a",
    "category": "docker"},
  {
    "question": "Which of the following is NOT correct about Docker?",
    "answers": {a: "It is a plain text document.", b: "It can contain instructions to add files to a container image",c: "It can build container images.",d: "It is a binary file."},
    "correct_answer": "d",
    "category": "docker"}
])


// Network
Quiz.insertMany([
  {
    "question": "What is WAN?",
    "answers": {a: "Wide Access Network", b: "Wide Allocate Network",c: "Wide Area Network",d: "Wide Advanced Network"},
    "correct_answer": "c",
    "category": "network"},
  {
    "question": "What is LAN?",
    "answers": {a: "Local Access Network", b: "Localized Access Network",c: "Local Address Network",d: "Locak Area Network"},
    "correct_answer": "d",
    "category": "network"},
  {
    "question": "OSI layer 7 is...",
    "answers": {a: "an application layer", b: "a session layer",c: "a network layer",d: "a physical layer"},
    "correct_answer": "a",
    "category": "network"},
  {
    "question": "Which services is used to translate a web address to an IP address?",
    "answers": {a: "DHCP", b: "Telnet",c: "DNS",d: "MIME"},
    "correct_answer": "c",
    "category": "network"},
  {
    "question": "OSI layer 4 is...",
    "answers": {a: "Data Linl layer", b: "Presentation layer",c: "Transport layer",d: "Session layer"},
    "correct_answer": "c",
    "category": "network"},
  {
    "question": "Which of following is Data Link layer protocol?",
    "answers": {a: "SSL", b: "HTTP",c: "FTP",d: "Ethernet"},
    "correct_answer": "d",
    "category": "network"},
  {
    "question": "Which of following is application layer protocol?",
    "answers": {a: "ICMP", b: "HTTP",c: "PPP",d: "Sockets"},
    "correct_answer": "b",
    "category": "network"},
  {
    "question": "What is the port for SSH",
    "answers": {a: "22", b: "80",c: "54",d: "130"},
    "correct_answer": "a",
    "category": "network"},
  {
    "question": "What is the port for DNS?",
    "answers": {a: "27", b: "53",c: "3389",d: "443"},
    "correct_answer": "b",
    "category": "network"},
  {
    "question": "What is the port for HTTPS",
    "answers": {a: "80", b: "389",c: "443",d: "23"},
    "correct_answer": "c",
    "category": "network"},
  {
    "question": "Which of following device broadcasts data to all devices in a network?",
    "answers": {a: "Router", b: "Hub",c: "Modem",d: "Switch"},
    "correct_answer": "b",
    "category": "network"},
  {
    "question": "Which is used to prevent unauthorized access?",
    "answers": {a: "Port", b: "Switch",c: "Router",d: "Firewall"},
    "correct_answer": "d",
    "category": "network"},
  {
    "question": "Which of following cable sends data as light?",
    "answers": {a: "Copper", b: "Ethernet",c: "Coaxial Cables",d: "Fiber Optic"},
    "correct_answer": "d",
    "category": "network"},
  {
    "question": "NIC stands for...",
    "answers": {a: "Network Interface Card", b: "Network Interfere Component",c: "Network Interpret Communication",d: "Network Internal Computer"},
    "correct_answer": "a",
    "category": "network"},
  {
    "question": "A device used to connect computers to form a LAN is...",
    "answers": {a: "Router", b: "Switch",c: "Gateway",d: "Bridge"},
    "correct_answer": "b",
    "category": "network"},
  {
    "question": "In SSL, which of following is required to identify itself?",
    "answers": {a: "API key", b: "password",c: "encription key",d: "certificate"},
    "correct_answer": "d",
    "category": "network"},
  {
    "question": "'S' in HTTPS stands for...",
    "answers": {a: "Standalone", b: "Safety",c: "Secure",d: "Security"},
    "correct_answer": "c",
    "category": "network"},
])


//JS
Quiz.insertMany([
  {
    "question": "Which is NOT JavaScript data type?",
    "answers": {a: "Undefined", b: "parseFloat",c: "Number",d: "Boolean"},
    "correct_answer": "b",
    "category": "javascript"},
  {
    "question": "Which is NOT correct about JavaScript?",
    "answers": {a: "'===' checks datatype and compare two values", b: "It provides inheritance",c: "It is published by ECMA. ",d: "It is a object-based scripting language."},
    "correct_answer": "b",
    "category": "javascript"},
  {
    "question": "JavaScript handles asynchronous flow with...",
    "answers": {a: "Event loop", b: "For loop",c: "While loop",d: "Dynamic loop"},
    "correct_answer": "a",
    "category": "javascript"},
  {
    "question": "Which of following sets a timer and performs an asynchronous action?",
    "answers": {a: "timeOut()", b: "setOut()",c: "setTime()",d: "setTimeout()"},
    "correct_answer": "d",
    "category": "javascript"},
  {
    "question": "Which of following is the command as a trigger for a function that is fired by a particular type of event?",
    "answers": {a: "Event function", b: "Event handling",c: "Event loop",d: "Event listener"},
    "correct_answer": "d",
    "category": "javascript"},
  {
    "question": "AJAX stands for...",
    "answers": {a: "Assemble JQuery And XML", b: "Axios JavaScript Async XML",c: "Asynchronous JavaScript And XML",d: "Asynchronous JQuery And XML"},
    "correct_answer": "d",
    "category": "javascript"},
  {
    "question": "AXA can update webpage without...",
    "answers": {a: "fetching data from the server", b: "reloading the page",c: "sending data to the server",d: "clicking the page"},
    "correct_answer": "b",
    "category": "javascript"},
  {
    "question": "Which of the following is correct?",
    "answers": {a: "JQuery is a JavaScript lobrary", b: "Promise is not used any more",c: "Laravel is a JavaScript framework",d: "None of them is correct"},
    "correct_answer": "a",
    "category": "javascript"},
  {
    "question": "In JSON, which of the following is defined by []?",
    "answers": {a: "array", b: "object",c: "dictionary",d: "tuple"},
    "correct_answer": "a",
    "category": "javascript"},
  {
    "question": "JavaScript is ",
    "answers": {a: "server-side language", b: "scripting language",c: "programming language",d: "application language"},
    "correct_answer": "b",
    "category": "javascript"},
  {
    "question": "Which of the following increases the value of the variable X?",
    "answers": {a: "inc(x)", b: "x+",c: "x++",d: "x=x"},
    "correct_answer": "c",
    "category": "javascript"},
  {
    "question": "How is a wandom number generated in JavaScript?",
    "answers": {a: "Math.random()", b: "Random.number()",c: "number.random()",d: "random.number()"},
    "correct_answer": "c",
    "category": "javascript"},
  {
    "question": "Which of the following is NOT a keyword for asynchronous code?",
    "answers": {a: "start", b: "resolve",c: "reject",d: "finally"},
    "correct_answer": "a",
    "category": "javascript"},
  {
    "question": "What should the second parameter for setTimeout function?",
    "answers": {a: "action to be done in the function", b: "function name",c: "time",d: "data size"},
    "correct_answer": "c",
    "category": "javascript"},
  {
    "question": "What does await keyword wait for?",
    "answers": {a: "a function", b: "a number",c: "strings",d: "a promise object"},
    "correct_answer": "d",
    "category": "javascript"}
])





