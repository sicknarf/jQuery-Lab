$('.rows').hide();

$('#add-skill').click(submitIt);
$('#skillset').keypress(function (e) {
    if (e.which == 13) {submitIt()}});
// why didn't the below code work?
//   $('#developer-skills tbody button').click(function(){
//     $(this).closest('tr').remove();
//   });
  $('#developer-skills tbody').on('click', 'button', function() {
    $(this).closest('tr').remove();
  });

function submitIt(){
    const $newSkill = $('#skillset').val();
    if ($newSkill !== '' && $newSkill !== ' '){
    let template = `
    <tr>
        <td class="rows">
        <button class="btn btn-xs btn-danger remove-skill">x</button>&nbsp;${$newSkill}
        </td>
    </tr>
    `
    $('tbody').append(template);
    $('input').attr('placeholder', 'enter a new skill!');
    $('#skillset').val('');
    $('.rows').show();
}
}