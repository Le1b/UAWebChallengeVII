$(document).ready(function() {
  app.renderQuestion(app.FIRST_QUESTION);

  $('button.btn-info').on('click', function(e) {
    app.renderQuestion(app.question[e.currentTarget.value + 'Child']);
  });

  $('button.btn-warning').on('click', function() {
    app.renderQuestion(app.FIRST_QUESTION);
    app.onBtnToggleVisible(false);
  });
});

var app = {
  question: null,

  questionContainer : $('.question'),
  FIRST_QUESTION    : 0,
  onBtnToggleVisible: function(value) {
    $('.btn.btn-info').toggleClass('hidden', value);
    $('.btn.btn-warning').toggleClass('hidden', !value);
  },
  renderQuestion    : function(index) {
    if (index < 0) {
      this.questionContainer.text(this.answer[Math.abs(index) - 1]);
      this.onBtnToggleVisible(true);
      return;
    }

    $.each(this.data, function(idx, obj) {
      if (obj.id === index) {
        app.question = obj;
      }
    });

    this.questionContainer.text(this.question.title);
  },
  data              : [
    {
      title     : 'Иногда вы теряетесь, не зная что сказать?',
      id        : 0,
      trueChild : 1,
      falseChild: 2
    },
    {
      title     : 'Вступаете в спор, лишь имея сильные доводы?',
      id        : 1,
      trueChild : 4,
      falseChild: 3
    },
    {
      title     : 'Вы из тех, кто не умеет торговаться?',
      id        : 2,
      trueChild : 5,
      falseChild: 6
    },
    {
      title     : 'Вас нередко используют в своих целях?',
      id        : 3,
      trueChild : 7,
      falseChild: 8
    },
    {
      title     : 'Вы искренни в проявлении своих чувств?',
      id        : 4,
      trueChild : 8,
      falseChild: 7
    },
    {
      title     : 'Дя вас характерна нерешительность?',
      id        : 5,
      trueChild : 4,
      falseChild: 9
    },
    {
      title     : 'Вы готовы всегда прийти на помощь?',
      id        : 6,
      trueChild : 9,
      falseChild: 10
    },
    {
      title     : 'Вы стараетесь не скрывать свои мысли?',
      id        : 7,
      trueChild : 12,
      falseChild: 11
    },
    {
      title     : 'Вы умеете отстаивать свою точку зрения?',
      id        : 8,
      trueChild : 9,
      falseChild: 12
    },
    {
      title     : 'Вы боитесь показаться глупым?',
      id        : 9,
      trueChild : 13,
      falseChild: 14
    },
    {
      title     : 'Вы стараетесь быть в числе первых?',
      id        : 10,
      trueChild : 14,
      falseChild: 13
    },
    {
      title     : 'Всегда соглашаетесь с мнением начальства?',
      id        : 11,
      trueChild : 15,
      falseChild: 16
    },
    {
      title     : 'Вам обычно трудно ответить "нет"?',
      id        : 12,
      trueChild : 16,
      falseChild: 13
    },
    {
      title     : 'Вы никогда не признаетесь в либви первым(ой)?',
      id        : 13,
      trueChild : 17,
      falseChild: 18
    },
    {
      title     : 'Во время спора вы всегда нервничаете?',
      id        : 14,
      trueChild : 13,
      falseChild: 18
    },
    {
      title     : 'Вы стесняетесь напоминать о долге?',
      id        : 15,
      trueChild : 19,
      falseChild: 16
    },
    {
      title     : 'Вы всегда готовы высказать свое мнение?',
      id        : 16,
      trueChild : 21,
      falseChild: 20
    },
    {
      title     : 'Вы любите общение с незнакомыми людьми?',
      id        : 17,
      trueChild : 21,
      falseChild: 16
    },
    {
      title     : 'Вы смущаетесь от комплиментов в свой адрес?',
      id        : 18,
      trueChild : 17,
      falseChild: 22
    },
    {
      title     : 'На людях вы чувствуете себя сковано?',
      id        : 19,
      trueChild : 23,
      falseChild: 20
    },
    {
      title     : 'Готовы жаловаться на плохое обслуживание?',
      id        : 20,
      trueChild : 24,
      falseChild: 23
    },
    {
      title     : 'Вы стараетесь не задевать чувства людей?',
      id        : 21,
      trueChild : 25,
      falseChild: 26
    },
    {
      title     : 'Вы всегда даете отпор лезущим без очереди?',
      id        : 22,
      trueChild : 26,
      falseChild: 21
    },
    {
      title     : 'Вы считаете, что выглядите не хуже других?',
      id        : 23,
      trueChild : 24,
      falseChild: -1
    },
    {
      title     : 'Вы не стесняетесь делать замечания?',
      id        : 24,
      trueChild : -2,
      falseChild: -1
    },
    {
      title     : 'Вам можно навязать не нужный товар?',
      id        : 25,
      trueChild : -2,
      falseChild: -3
    },
    {
      title     : 'Вы спокойно относитесь к сплетням о себе?',
      id        : 26,
      trueChild : -3,
      falseChild: 25
    }
  ],
  answer            : [
    'Вы крайне не уверенный в себе человек, это мешает вам полноценно жить и добиваться осуществления своих даже самых скромных планов. Возможно, вы стараетесь порой выглядеть успешным и независимым, но при этом сомневаетесь чуть ли не в любом принятом решении. А когда вы сомневаетесь в своей правоте или собственных силах, вами легче манипулировать. Самостоятельно или с помощью психолога становитесь менее критичным по отношению к себе.',
    'Вы – человек, свободный от опрометчивых поступков, свойственных людям с неустойчивой, ранимой нервной системой. Некоторая же доля неуверенности не является таким уж большим недостатком, а всего лишь свидетельствует о гибкости вашей психики. И все же старайтесь укреплять в себе веру в свои способности и возможности – это будет помогать вам «плыть по бурным волнам» жизни к намеченным вами целям.',
    'У вас ярко выраженная потребность чувствовать себя уверенно. Окружающие почти всегда могут на вас положиться. Однако если присущая вам уверенность переходит в самоуверенность, то это уже может и вредить вам – в частности, отталкивая от вас кое-кого из окружающих. Будьте же самокритичнее – это вам нисколько не помешает!'
  ]
};