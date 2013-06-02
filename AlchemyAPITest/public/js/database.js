var pickTopic = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "Pick a topic, rookie."
        ]
    },
    input: {
        hotspots: [
            {
                top: '100px',
                input: 'name'
            },
            {
                top: '249px',
                onclick: 'appendTopic($("#name").val())',
                text: "I've picked my topic."
            }
        ]
    }
};

var howToGoogle = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "Type your topic into google and come back here when you've found something, kid."
        ]
    },
    input: {
        hotspots: [
            {
                top: '100px',
                input: 'url'
            },
            {
                top: '249px',
                onclick: 'submitArticle($("#url").val())',
                text: "I found a clue, chief."
            }
        ]
    }
};

var googleAgain = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "Alright, squirt. Now type your new topic into google and let me know what you find."
        ]
    },
    input: {
        hotspots: [
            {
                top: '100px',
                input: 'url'
            },
            {
                top: '249px',
                onclick: 'submitArticle($("#url").val())',
                text: "I found a clue, chief."
            }
        ]
    }
};

var moreSpecific = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "He's researching something big, better go after him kid."
        ]
    },
    input: {
        hotspots: [ ]
    }
};

var events = [{
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events2))',
                text: "I've got to stop him."
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "Oh no. It Dr. Claw is going into the Denver Fire Department museum. I hope he's not planning a fire!"
        ]
    },
    background: 'img/firefighting-museum-lg.jpg'
},{
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events2))',
                text: "Yeah okay."
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "The notorious Brown Palace. I wonder what he's up to in there."
        ]
    },
    background: 'img/brown-palace-lg.jpg'
},{
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events2))',
                text: "Yeah okay."
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "The Denver Center for the Performing Arts is so beautiful. With so many places to hide, we will need to be careful to follow him."
        ]
    },
    background: 'img/buell-lg.JPG'
},{
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events2))',
                text: "Yeah okay."
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "There is so much gold on the Denver Capital Building Dr. Claw could get away with a fortune!"
        ]
    },
    background: 'img/capitol-lg.jpg'
},{
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events2))',
                text: "Yeah okay."
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "The Colorado History Museum! Clever... Maybe I should look in the past..."
        ]
    },
    background: 'img/CO-history-lg.jpg'
},{
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events2))',
                text: "Yeah okay."
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "What is that weird building? Oh look, the Denver Art Museum!"
        ]
    },
    background: 'img/DAM-lg.jpg'
},{
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events2))',
                text: "Yeah okay."
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "It looks like he's gone in to the Denver Mint. I wonder what he wants with all that money..."
        ]
    },
    background: 'img/mint-lg.jpg'
},{
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events2))',
                text: "Yeah okay."
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "This looks like the Molly Brown house. Let's see what he wants in here!"
        ]
    },
    background: 'img/molly-brown-lg.jpg'
}];

var events2 = [{
    leftPicture: { src: 'img/Grumpy-Cat-crop.png', activate: 'active' },
    rightPicture: { src: 'img/vil-crop.jpg', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events3))',
                text: "keep listening"
            }
        ]
    },
    dialog: {
        name: 'Smelly Underling Cat',
        lines: [
            "I hate doing research."
        ]
    }
},{
    leftPicture: { src: 'img/HappyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'img/Grumpy-Cat-crop.jpg', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(increment(events3))',
                text: "keep listening"
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "Aha! Smelly Underling Cat, your poor research skills haven't served you and now you'll be serving time.",
        ]
    }
},{
    leftPicture: { src: 'img/HappyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'img/Grumpy-Cat-crop.jpg', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(moreSpecific)',
                text: "keep listening"
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "Smelly Underling Cat isn't giving us any leads. As I expected, he knows absolutely nothing. What could Doctor Claw be up to?"
        ]
    }
}];

var events3 = [{
    leftPicture: { src: 'img/Grumpy-Cat-crop.png', activate: 'active' },
    rightPicture: { src: 'img/vil-crop.jpg', activate: 'active' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(moreSpecific)',
                text: "keep listening"
            }
        ]
    },
    dialog: {
        name: 'Doctor Claw',
        lines: [
            "Silence! Research is the key to success in any endeavor."
        ]
    }
},{
    leftPicture: { src: 'img/HappyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'img/Grumpy-Cat-crop.png', activate: 'active' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(moreSpecific)',
                text: "keep listening"
            }
        ]
    },
    dialog: {
        name: 'Smelly Underling Cat',
        lines: [
            "Noooooooooo!"
        ]
    }
}];

var office1 = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(office2)',
                color: 'white',
                text: "Yeah"
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            ".."
        ]
    },
    background: 'img/office.jpg'
};

var office2 = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(office3)',
                text: "Yeah"
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "..."
        ]
    },
    background: 'img/office.jpg'
};
var office3 = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(office4)',
                text: "Yeah"
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "...."
        ]
    },
    background: 'img/office.jpg'
};

var office4 = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(pickTopic)',
                text: "Yeah"
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "....."
        ]
    },
    background: 'img/office.jpg'
};

library = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(villain)',
                text: "lol that sux."
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "Thanks to your hard work I've tracked Doctor Claw to the library."
        ]
    },
    background: 'img/dpl-lg.jpg'
};

villain = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'img/vil-crop.jpg', activate: 'active' },
    input: {
        hotspots: [
            {
                top: '249px',
                onclick: 'render(getEmail)',
                text: "lol that sux."
            }
        ]
    },
    dialog: {
        name: 'Doctor Claw',
        lines: [
            "Mwah hah haha! You and your sidekick will never stop me Detective Happy Cat!"
        ]
    }
};

getEmail = {
    leftPicture: { src: 'img/happyCat-crop.jpg', activate: 'active' },
    rightPicture: { src: 'http://placekitten.com/250/253', activate: 'inactive' },
    input: {
        hotspots: [
            {
                top: '100px',
                input: 'email'
            },
            {
                top: '249px',
                onclick: 'render(library2)',
                text: "send me the dossier, chief!"
            }
        ]
    },
    dialog: {
        name: 'Detective HappyCat',
        lines: [
            "You're gonna have to go in flat-foot.",
            "Let me know your email and I'll send you a dossier for your first real mission."
        ]
    },
    background: 'img/dpl-lg.jpg'
};
