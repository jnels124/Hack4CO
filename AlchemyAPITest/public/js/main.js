$(function() {
    render(office1);
});

var eventCounter = 0;

function render(content) {
    for (var id in content) {
        if (id == 'background') {
            $('body').css('background-image', 'url(' + content.background + ')');
        } else {
            var template = Handlebars.compile($('#' + id + '-template').html());
            var component = content[id];
            if (typeof(component) !== "object") {
                component = { };
                component[id] = content[id];
            }
            $('#' + id).html(template(component));
        }

        // make field labels make sense
        $('.hotspot input').click(function() {
            if ($(this).val() == this.id) {
                $(this).val('');
            }
        }).blur(function() {
            if(!$(this).val()) {
                $(this).val(this.id);
            }
        });

    }
}

function adjudicate(keywords, url, success) {
    var request = $.ajax({
        url: "/relevance",
        type: "post",
        data: {
            keywords: keywords,
            url: url
        },
        success: success
    });
}

function shuffleOne(list) {
    if (list.length > 1) {
        var index = Math.floor(Math.random() * (list.length - 1) + 1);
        list.unshift(list.splice(index, 1)[0]);
    }
    return list[0];
}

function increment(list) {
    list.push(list.shift());
    return list[list.length - 1];
}

function submitArticle(url) {
    adjudicate($('#topic').html().split(':')[1].substring(1), url, function(response) {
        response = $.parseJSON(response);

        console.log(response);

        if (response.relevance < .3) {
            render(irrelevant);
            return;
        }

        if (response.relevance < .6) {
            render(weak);
            return;
        }

        if (Math.abs(response.sentiment) > .5) {
            render(shuffleOne(biased));
            return;
        }

        moreSpecific.input.hotspots = [];
        var top = 200;
        for (var topic in response.related) {
            moreSpecific.input.hotspots.push({
                top: top + 'px',
                text: response.related[topic],
                onclick: 'appendTopic("' + response.related[topic] + '")'
            });
            top += 50;
        }

        eventCounter++;

        if (eventCounter >= 4) {
            render(library);
            return;
        }

        render(shuffleOne(good));
    });
}

function appendTopic(topic) {
    $('#topic').append(' ' + topic);
    render(howToGoogle);
}
