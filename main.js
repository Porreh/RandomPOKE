'use strict';

$( document ).ready(
  var url = 'https://pokeapi.co/api/v2/pokemon/',
  $pokemon = $('.pokemon'),
  $button = $('.button'),
  $sprite = $('.sprite img'),
  $name = $('.name');

function getPokemon(a) {
  $.ajax({
    url: url + a + '/'
  })
    .done(function(b) {
      return renderPokemon(b)
    })
}

function renderPokemon(a) {
  $sprite.attr('src', a.sprites.front_default), $name.html(a.name)
}

$button.click(function() {
  getPokemon(Math.floor(Math.random() * 720) + 1), $pokemon.hasClass('hidden') && ($pokemon.removeClass('hidden'), $pokemon.css('opacity', '0'), setTimeout(function() {
    $pokemon.css('opacity', '1')
  }, 1000))
}))
