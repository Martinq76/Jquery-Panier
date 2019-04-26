

$('.card a').click(function() {
  var choiceName = $(this).data('name');
  var choiceRef = $(this).data('ref');
  var choicePrice = $(this).data('price');
  var choiceImg = 'img/' + choiceName + '.jpg';

  console.log('Name : ' + choiceName);
  console.log('Ref : ' + choiceRef);
  console.log('Price : ' + choicePrice);
  console.log('Img : ' + choiceImg);
});
