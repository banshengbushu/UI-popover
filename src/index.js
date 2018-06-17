var initData = [{
    'showPopover': 'showPopover(\'popoverA\')',
    'popover': 'popoverA',
    'hidePopover': 'hidePopover(\'popoverA\')'
},
    {
        'showPopover': 'showPopover(\'popoverB\')',
        'popover': 'popoverB',
        'hidePopover': 'hidePopover(\'popoverB\')'
    },
    {
        'showPopover': 'showPopover(\'popoverC\')',
        'popover': 'popoverC',
        'hidePopover': 'hidePopover(\'popoverC\')'
    }];

function showPopover(item) {
    var popover = document.getElementsByClassName(item);
    popover[0].style.display = 'block';
}

function hidePopover(item) {
    var popover = document.getElementsByClassName(item);
    popover[0].style.display = 'none';
}

var poppoverList = document.getElementById('popoverList');
initData.forEach(function (item) {
    poppoverList.insertAdjacentHTML('beforeEnd',
        '<div class=\'container\'>' +
        '<h3>Click button to see what\'s happening</h3>' +
        '<button class=\'add_btn\' type=\'button\' onclick= ' + item.showPopover + '>click</button>' +
        '<div class=' + item.popover + '>' +
        '<h4>Are you happy</h4>' +
        '<button class=\'close_btn\' onclick=' + item.hidePopover + '>No</button>' +
        '</div>' +
        '</div>'
    );
});




