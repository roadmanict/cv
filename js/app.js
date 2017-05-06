$(document).foundation();

(function () {
    var skills = [
        {
            name: 'Typescript / NodeJS',
            percentage: 90
        },
        {
            name: 'Docker',
            percentage: 90
        },
        {
            name: 'Javascript / NodeJS',
            percentage: 80
        },
        {
            name: 'Django / Python',
            percentage: 80
        },
        {
            name: 'Ansible',
            percentage: 70
        },
        {
            name: 'Java',
            percentage: 70
        },
        {
            name: 'AngularJS',
            percentage: 70
        },
        {
            name: 'ArcGIS',
            percentage: 70
        }
    ];

    var languages = [
        {
            name: 'Dutch',
            percentage: 95
        },
        {
            name: 'English',
            percentage: 90
        }
    ];

    skills.forEach(function (skill) {
        appendProgressBar($('#skills'), skill.name, skill.percentage);
    });

    languages.forEach(function (skill) {
        appendProgressBar($('#languages'), skill.name, skill.percentage);
    });

    function appendProgressBar(jquery, name, percentage) {
        jquery.append('<div class=\"progress\" role=\"progressbar\" tabindex=\"0\" aria-valuenow=\"' + percentage + '\" aria-valuemin=\"0\"' +
            'aria-valuetext=\"90 percent\" aria-valuemax=\"100\">' +
            '<div class=\"progress-meter\" style=\"width: ' + percentage + '%\"><p class=\"progress-meter-text\">' + name + '</p></div>' +
            '</div>');
    }
})();