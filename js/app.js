$(document).foundation();

(function () {
    var skills = [
        {
            name: 'Typescript / NodeJS',
            percentage: 80
        },
        {
            name: 'Docker',
            percentage: 80
        },
        {
            name: 'Domain Driven Design',
            percentage: 60
        },
        {
            name: 'Kubernetes / Helm',
            percentage: 60
        },
        {
            name: 'Bash / Linux',
            percentage: 60
        },
        {
            name: 'Bazel',
            percentage: 40
        },
        {
            name: 'Ansible',
            percentage: 40
        },
        {
            name: 'Java',
            percentage: 40
        },
    ];

    var languages = [
        {
            name: 'Dutch',
            percentage: 90
        },
        {
            name: 'English',
            percentage: 80
        }
    ];

    skills.forEach(function (skill) {
        appendProgressBar($('#skills'), skill.name, skill.percentage);
    });

    languages.forEach(function (skill) {
        appendProgressBar($('#languages'), skill.name, skill.percentage);
    });

    function appendProgressBar(jquery, name, percentage) {
        jquery.append('<div class=\"progress\" role=\"progressbar\" tabindex=\"0\" aria-valuenow=\"' + percentage + '\" aria-valuemin=\"0\" ' +
            'aria-valuetext=\"90 percent\" aria-valuemax=\"100\">' +
            '<div class=\"progress-meter\" style=\"width: ' + percentage + '%\"><p class=\"progress-meter-text\">' + name + '</p></div>' +
            '</div>');
    }
})();