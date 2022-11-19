words = [
    'hunter', 'strange', 'age', 'player', 'explosion',
    'age', 'three', 'chest', 'broadcast', 'jacket',
    'job', 'cucumber', 'eagle', 'holiday', 'bag'
];
answers = [
    'мисливець', 'дивний', 'вік', 'гравець', 'вибух',
    'вік', 'три', 'скриня', 'трансляція', 'куртка',
    'робота', 'огірок', 'орел', 'свято', 'сумка'
];

random = '';

function Generate()
{
    random = Math.floor(Math.random() * answers.length);
    $('#word').text(words[random]);
}

$(window).on(Generate());

$('#button').click(function() {
    if( $('#button').text() == "Перевірити")
    {
        var answer = $('#answer').val();
        answer = answer.toLowerCase();
        if(answer == answers[random])
        {
            var right = $('#right').text();
            $('#right').text(Number(right) + 1);
        }
        else
        {
            var wrong = $('#wrong').text();
            $('#wrong').text(Number(wrong) + 1);
        }
        var raund = $('#raund').text();
        if(raund < 10)
        {
            $('#raund').text(Number(raund) + 1);
            $('#answer').val('');
            Generate();
        }
        else
        {
            $('#word').html(' Ви відповіли вірно: ' + $('#right').text() + '<br>Ви відповіли невірно: ' + $('#wrong').text());
            $('#button').text('Розпочати заново');
            $('#answer').val('');
        }
    }
    else
    {
        $('#raund').text('1');
        $('#right').text('0');
        $('#wrong').text('0');
        $('#button').text('Перевірити');
        Generate();
    }
});