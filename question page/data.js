const quizData = {
    "HTML": {
        icon: "../menu page/assets/Vector2.png",
        iconBg: "#FFF5ED",
        questions: [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
                answer: "Hyper Text Markup Language"
            },
            {
                question: "Choose the correct HTML element for the largest heading:",
                options: ["<heading>", "<h6>", "<head>", "<h1>"],
                answer: "<h1>"
            },
            {
                question: "Which character is used to indicate an end tag?",
                options: ["*", "/", "<", "^"],
                answer: "/"
            },
            {
                question: "What is the correct HTML for adding a background color?",
                options: ["<body bg='yellow'>", "<body style='background-color:yellow;'>", "<background>yellow</background>", "bg-color: yellow;"],
                answer: "<body style='background-color:yellow;'>"
            },
            {
                question: "How can you make a numbered list?",
                options: ["<ul>", "<list>", "<dl>", "<ol>"],
                answer: "<ol>"
            },
            {
                question: "Which HTML element is used to specify a footer for a document or section?",
                options: ["<bottom>", "<section>", "<footer>", "<aside>"],
                answer: "<footer>"
            }
        ]
    },
    "CSS": {
        icon: "../menu page/assets/Vector3.png",
        iconBg: "#E0FDEF",
        questions: [
            {
                question: "What does CSS stand for?",
                options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
                answer: "Cascading Style Sheets"
            },
            {
                question: "Which HTML attribute is used to define inline styles?",
                options: ["class", "style", "font", "styles"],
                answer: "style"
            },
            {
                question: "Which property is used to change the background color?",
                options: ["color", "bgcolor", "background-color", "canvas-color"],
                answer: "background-color"
            },
            {
                question: "How do you add a background color for all <h1> elements?",
                options: ["h1.all {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "h1 {background-color:#FFFFFF;}", "h1 {bg-color:#FFFFFF;}"],
                answer: "h1 {background-color:#FFFFFF;}"
            },
            {
                question: "Which CSS property is used to change the text color of an element?",
                options: ["fgcolor", "text-color", "color", "font-color"],
                answer: "color"
            },
            {
                question: "Which CSS property controls the text size?",
                options: ["font-style", "text-size", "font-size", "text-style"],
                answer: "font-size"
            }
        ]
    },
    "JavaScript": {
        icon: "../menu page/assets/Vector4.png",
        iconBg: "#EBF0FF",
        questions: [
            {
                question: "Inside which HTML element do we put the JavaScript?",
                options: ["<scripting>", "<js>", "<script>", "<javascript>"],
                answer: "<script>"
            },
            {
                question: "How do you write 'Hello World' in an alert box?",
                options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
                answer: "alert('Hello World');"
            },
            {
                question: "How do you create a function in JavaScript?",
                options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create myFunction()"],
                answer: "function myFunction()"
            },
            {
                question: "How do you write an IF statement in JavaScript?",
                options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
                answer: "if (i == 5)"
            },
            {
                question: "How does a FOR loop start?",
                options: ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"],
                answer: "for (i = 0; i <= 5; i++)"
            },
            {
                question: "How can you add a comment in a JavaScript?",
                options: ["'This is a comment", "//This is a comment", "", "*This is a comment"],
                answer: "//This is a comment"
            }
        ]
    },
    "Accessibility": {
        icon: "../menu page/assets/Vector5.png",
        iconBg: "#F6E7FF",
        questions: [
            {
                question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                options: ["4.5 : 1", "3 : 1", "2.5 : 1", "5 : 1"],
                answer: "4.5 : 1"
            },
            {
                question: "Which attribute is used to provide alternative text for an image?",
                options: ["alt", "title", "src", "description"],
                answer: "alt"
            },
            {
                question: "What does WCAG stand for?",
                options: ["Web Content Accessibility Guidelines", "Web Compliance Accessibility Group", "Website Center Accessibility Guide", "Web Code Accessibility Generation"],
                answer: "Web Content Accessibility Guidelines"
            },
            {
                question: "Which HTML tag is most important for screen reader navigation?",
                options: ["<div>", "<span>", "<h1> to <h6>", "<b>"],
                answer: "<h1> to <h6>"
            },
            {
                question: "What is the purpose of the 'aria-label' attribute?",
                options: ["To change text color", "To provide a string that labels the current element", "To animate an element", "To link to a stylesheet"],
                answer: "To provide a string that labels the current element"
            },
            {
                question: "Which key is primarily used by users with visual impairments to navigate through interactive elements?",
                options: ["Shift", "Space", "Enter", "Tab"],
                answer: "Tab"
            }
        ]
    }
};