const url = 'https://pokeapi.co/api/v2/pokemon/';
let $pokemon = $('.pokemon');
let $button = $('.button');
let $sprite = $('.image img');
let $name = $('.name');

function getPokemon(id) {
  $.ajax(`${url}${id}/`)
    .done(response => renderPokemon(response));
}

function renderPokemon(pokemon) {
  $sprite.attr('src', pokemon.sprites.front_default);
  $name.html(pokemon.name);
}

$button.click(function () {
  getPokemon(Math.floor(Math.random() * (721 - 1)) + 1);
  if ($pokemon.hasClass('hidden')) {
    $pokemon.removeClass('hidden');
    $pokemon.css('opacity', '0');
    setTimeout(function () {
      $pokemon.css('opacity', '1');
    }, 1000);
  }
});
