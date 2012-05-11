$(function() {
  
  window.game            = new Game;
  window.options_view    = new OptionsView({model: window.game});
    window.characters_view = new CharactersView({model: window.game});
    window.word_view       = new WordView({model: window.game});
    window.hangman_view    = new HangmanView({model: window.game});
    window.answer_view     = new AnswerView({model: window.game});
    window.stage_view      = new StageView({model: window.game});
  
});