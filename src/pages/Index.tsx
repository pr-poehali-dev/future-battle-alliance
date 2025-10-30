import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const teamMembers = [
  {
    name: 'Ваня',
    image: 'https://cdn.poehali.dev/files/c9316f92-87fd-4e50-80bd-fe819fd1c51e.jpg',
    role: 'Инженер будущего'
  },
  {
    name: 'Евдокия',
    image: 'https://cdn.poehali.dev/files/45891ffb-4bf3-48c1-bab5-36386002016d.jpg',
    role: 'Архитектор смыслов'
  },
  {
    name: 'Вера',
    image: 'https://cdn.poehali.dev/files/bc20fca4-0dcf-4d64-a03f-f946507982e5.jpg',
    role: 'Цифровой стратег'
  },
  {
    name: 'Максим',
    image: 'https://cdn.poehali.dev/files/ed73a0ed-03d2-420b-8b5c-4e25554c9051.jpg',
    role: 'Системный аналитик'
  },
  {
    name: 'Вика',
    image: 'https://cdn.poehali.dev/files/bf67fe70-a0e3-4cb8-8c89-00cf03ee2550.jpg',
    role: 'Креативный технолог'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 inline-block">
            <div className="text-sm font-medium tracking-widest text-neon-cyan mb-4 uppercase">Команда АльЯнс</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">
              БИТВА ЗА БУДУЩЕЕ
            </h1>
            <p className="text-xl md:text-2xl text-neon-blue font-light">
              Алгоритм победы от команды «АльЯнс»
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              onClick={() => scrollToSection('manifesto')}
              className="bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan neon-border px-8 py-6 text-lg animate-glow"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Читать манифест
            </Button>
            <Button 
              onClick={() => scrollToSection('team')}
              variant="outline"
              className="border-neon-blue/50 hover:bg-neon-blue/10 text-foreground px-8 py-6 text-lg"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Наша команда
            </Button>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">Отчет от Евдокии</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto" />
          </div>

          <Card className="cyber-gradient neon-border p-8 md:p-12 backdrop-blur-sm animate-fade-in">
            <div className="space-y-8 text-foreground/90 leading-relaxed">
              <div className="space-y-4">
                <p className="text-lg">
                  Главная мысль, с которой мы живем и действуем: будущее не завоевывается в бою, а собирается, как сложный конструктор, где одинаково нужны и виртуозный код, и прочная сталь. Мы — «Альянс» — не просто команда. Мы — живой эксперимент, инструкция по сборке общего завтра из двух, казалось бы, противоположных миров: цифрового ковчега Школы №46 и инженерной цитадели Школы №27. И наши первые два дня наглядно доказали: наша формула работает.
                </p>
              </div>

              <div className="border-l-4 border-neon-cyan pl-6 my-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neon-cyan">ВВЕДЕНИЕ: ТОЧКА СБОРКИ — СОЗДАНИЕ НОВОЙ РЕАЛЬНОСТИ</h3>
                <p>
                  Когда два года назад наши школы объединились в общий «Совместный Совет», многие восприняли это как формальность. Но мы-то знали: мы запускаем уникальный социальный код. Мы не строим мост между двумя берегами — мы сливаем два мощных потока в одну новую, более полноводную реку. Если Школа №46 — это бесконечный полет мысли в облаках данных, а Школа №27 — это незыблемый фундамент из стали и точности, то «Альянс» — это та самая точка, где небо соединяется с землей, рождая технологию, одухотворенную смыслом.
                </p>
                <p className="mt-4">
                  Наша «Битва за будущее» — это не противостояние с другими. Это демонстрация того, как должен выглядеть мир: не как конкуренция узких специализаций, а как синергия, где целое всегда мощнее суммы своих частей.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-neon-blue">ЧАСТЬ 1: ЗАЧЕМ ОБЪЕДИНЯТЬСЯ? ДИАГНОЗ РАЗОБЩЕННОСТИ И НАШ ОТВЕТ</h3>
                <p>
                  Чтобы понять нашу победу, нужно понять отправную точку. До объединения мы видели мир по-разному, и каждый наш взгляд был ограничен.
                </p>
                
                <div className="space-y-4 pl-4">
                  <div className="border-l-2 border-neon-cyan/50 pl-4">
                    <h4 className="font-bold text-lg text-neon-cyan mb-2">Взгляд Школы №27 («Инженеры Будущего»):</h4>
                    <p>Мы видели мир как сложную, но поддающуюся расчету систему. Наши вызовы — алгоритмические ловушки, киберугрозы, кризис больших данных. Мы знали, как создать прочный мост, но не всегда понимали, как сделать его красивым и притягательным для людей. Наш риск будущего — технократия без души, мир безупречных, но безжизненных механизмов.</p>
                  </div>
                  
                  <div className="border-l-2 border-neon-blue/50 pl-4">
                    <h4 className="font-bold text-lg text-neon-blue mb-2">Взгляд Школы №46 («Архитекторы Смыслов»):</h4>
                    <p>Мы видели мир как бесконечный нарратив, поток историй и идей. Наши вызовы — кризис доверия, война нарративов, эрозия общей культуры. Мы могли создать вирусный контент, но не всегда могли обеспечить ему надежную технологическую платформу. Наш риск будущего — красивые слова без реального действия, виртуальные замки, построенные на песке.</p>
                  </div>
                </div>

                <div className="bg-neon-cyan/5 border border-neon-cyan/30 rounded-lg p-6 mt-6">
                  <p className="text-lg font-medium">
                    Совместный вывод, к которому мы пришли, был прост и гениален: настоящая «битва» происходит не между технологиями и гуманитарными науками, а на их стыке. Наш главный противник — не другая команда, а хаос и непонимание. И победа над ним возможна только в синергии.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-neon-cyan">ЧАСТЬ 2: ПРОЦЕСС СБОРКИ: КАК МЫ СОЗДАЕМ ОБЩИЙ ЯЗЫК</h3>
                <p>
                  Первый день нашего выступления на «Битве за будущее» стал блестящей демонстрацией этого процесса. Мы не просто делились задачами — мы создавали сплав.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Icon name="Sparkles" className="text-neon-cyan flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-neon-cyan">Творческий успех Культуры:</strong> Идея концерта в стиле КВН родилась у «Архитекторов Смыслов» (№46), но ее блестящая презентация и уверенное ведение с Ромой — это уже продукт нашей общей работы. Это был не просто креатив, это был структурированный и реализованный креатив. Логика «Инженеров» (№27) придала полету мысли четкую траекторию.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Target" className="text-neon-blue flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-neon-blue">Организация Политики на высоте:</strong> Безупречная подготовка агит-материалов, выверенная стратегия — это зона ответственности №27. Но то, как мы «поставили всех на уши», зарядили энергией и создали настроение — это прямое влияние харизмы и коммуникативных навыков №46.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Heart" className="text-neon-cyan flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-neon-cyan">Наша фишка Управления — утренние мотивашки:</strong> Это самый человечный, душевный проект, за который отвечают «Архитекторы Смыслов». Но его реализация — точная рассылка, своевременность — это уже системный подход «Инженеров». Заряд добра + безотказный механизм доставки = наша формула.
                    </div>
                  </li>
                </ul>

                <p className="mt-6">
                  Второй день подверг наш алгоритм стресс-тесту. Мы столкнулись с неудачами в спорте, обидными недооценками в культуре и шоком в политике. И здесь наш союз проявил свою главную ценность — стойкость. Когда «Архитекторы» (№46) расстраивались из-за несправедливости, «Инженеры» (№27) напоминали: «Любую систему можно проанализировать и улучшить».
                  А когда «Инженеры» терялись в нестандартных условиях журналистики или медиа, «Архитекторы» моментально находили неожиданный ход, как в том самом экспресс-интервью с Романом Борискиным или в прохождении фото-квеста за счет командной слаженности.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-neon-blue">ЧАСТЬ 3: РЕЗУЛЬТАТ СБОРКИ — НАША МОДЕЛЬ БУДУЩЕГО</h3>
                <p>
                  Что мы получили на выходе? Не просто список побед и поражений. Мы создали работающий прототип.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-neon-cyan/5 border-neon-cyan/30 p-6 hover:bg-neon-cyan/10 transition-all">
                    <Icon name="Zap" className="text-neon-cyan mb-3" size={32} />
                    <h4 className="font-bold text-lg mb-2">Инженеры человеческих душ</h4>
                    <p className="text-sm">Мы доказали, что можно создавать проекты, которые одновременно технологически безупречны и эмоционально заряжены.</p>
                  </Card>
                  <Card className="bg-neon-blue/5 border-neon-blue/30 p-6 hover:bg-neon-blue/10 transition-all">
                    <Icon name="Shield" className="text-neon-blue mb-3" size={32} />
                    <h4 className="font-bold text-lg mb-2">Команда антихрупкости</h4>
                    <p className="text-sm">Мы не разбились о первые же неудачи. Мы стали сильнее. Наш союз прошел проверку на прочность.</p>
                  </Card>
                  <Card className="bg-neon-cyan/5 border-neon-cyan/30 p-6 hover:bg-neon-cyan/10 transition-all">
                    <Icon name="Code" className="text-neon-cyan mb-3" size={32} />
                    <h4 className="font-bold text-lg mb-2">Открытый код</h4>
                    <p className="text-sm">Наша история — это инструкция по тому, как преодолеть вечный разрыв между «физиками» и «лириками».</p>
                  </Card>
                </div>
              </div>

              <div className="border-t-2 border-neon-cyan/30 pt-8 mt-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center neon-glow">ЗАКЛЮЧЕНИЕ: БИТВА, КОТОРУЮ МЫ УЖЕ ВЫИГРАЛИ</h3>
                <p className="text-lg text-center mb-6">
                  Самая главная битва, которую мы уже выиграли, — это битва со стереотипами. Со стереотипом о том, что технари не могут быть креативными, а гуманитарии — не могут мыслить системно. Мы разрушили эту стену.
                </p>
                <p className="text-center text-lg">
                  Наш «Альянс» — это не про место в таблице лидеров. Это про то, чтобы показать: будущее будет таким, каким мы его соберем. И для его сборки нужны и точные алгоритмы Школы №46, и прочные связи Школы №27.
                </p>
                <p className="text-center text-xl font-bold mt-6 text-neon-cyan">
                  Мы — пилотный проект нового общества. И наш эксперимент — удался.
                </p>
              </div>

              <div className="bg-gradient-to-r from-neon-cyan/10 via-neon-blue/10 to-neon-cyan/10 rounded-lg p-8 text-center mt-8">
                <p className="text-lg mb-4">
                  Присоединяйтесь к наблюдению за нашим проектом! Подписывайтесь на наш Telegram-канал "АльЯнс", где мы в реальном времени документируем процесс нашей сборки.
                </p>
                <p className="text-2xl font-bold neon-glow">
                  Вперед, «Альянс»! Наша сборка продолжается! 🚀❤️💙
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">Наша команда</h2>
            <p className="text-xl text-neon-blue">Киберпанк-альянс двух школ</p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden neon-border cyber-gradient hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="font-bold text-lg text-neon-cyan">{member.name}</h3>
                    <p className="text-sm text-foreground/80">{member.role}</p>
                  </div>
                </div>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Cpu" className="text-neon-cyan" size={24} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-neon-cyan/20 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 neon-glow">Команда АльЯнс</h3>
            <p className="text-neon-blue">Школа №46 × Школа №27</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="hover:text-neon-cyan transition-colors">
              <Icon name="Send" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-neon-cyan transition-colors">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-neon-cyan transition-colors">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Альянс. Создаем будущее вместе.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
