import pizzaImg from '../assets/foto/foto-4.webp'
import tagliereImg from '../assets/foto/foto-2.webp'
import strudelImg from '../assets/foto/foto-1.webp'
import bombardinoImg from '../assets/foto/foto-7.webp'

const menuCategories = [
  {
    icon: '🍕',
    title: 'Pizza al Forno a Legna',
    titleEn: 'Wood-fired Pizza',
    description: 'Il punto forte del locale. Impasto morbido e friabile, cottura su forno a legna. La "Pizza Tonale" è tra le più amate dai nostri ospiti.',
    descriptionEn: 'Our specialty. Soft, crispy dough cooked in a wood-fired oven. The "Pizza Tonale" is a guest favorite.',
    image: pizzaImg,
    imageAlt: 'Pizza con prosciutto crudo, rucola e scaglie di parmigiano',
    highlights: ['Impasto artigianale', 'Forno a legna', 'Pizza Tonale'],
  },
  {
    icon: '🧀',
    title: 'Taglieri & Piatti Tipici',
    titleEn: 'Charcuterie & Local Dishes',
    description: 'Taglieri di salumi e formaggi locali, lasagna, polenta, zuppe calde, panini, bruschette e hamburger. Il gusto della montagna in ogni piatto.',
    descriptionEn: 'Local charcuterie boards, lasagna, polenta, warm soups, sandwiches, bruschetta and burgers.',
    image: tagliereImg,
    imageAlt: 'Tagliere di salumi e formaggi tipici sulla terrazza',
    highlights: ['Prodotti locali', 'Polenta & zuppe', 'Panini & hamburger'],
  },
  {
    icon: '☕',
    title: 'Colazioni & Merende',
    titleEn: 'Breakfast & Snacks',
    description: 'Cappuccino cremoso, espresso, tisane, torte fatte in casa e cheesecake. La nostra cioccolata calda è particolarmente amata — cremosa e avvolgente.',
    descriptionEn: 'Creamy cappuccino, espresso, herbal teas, homemade cakes and cheesecake. Our hot chocolate is a crowd favorite.',
    image: strudelImg,
    imageAlt: 'Strudel con panna e bevande calde al tavolo',
    highlights: ['Torte fatte in casa', 'Cioccolata calda', 'Brunch'],
  },
  {
    icon: '🍺',
    title: 'Après-ski & Bevande',
    titleEn: 'Après-ski & Drinks',
    description: 'Selezione di birre artigianali "First", bombardino, vin brulé, bevande calde e cordiali. Birre fresche e cocktail in estate.',
    descriptionEn: 'Craft "First" beers, bombardino, mulled wine, warm drinks. Cold beers and cocktails in summer.',
    image: bombardinoImg,
    imageAlt: 'Bombardini con panna serviti sul tavolo in legno',
    highlights: ['Birre artigianali', 'Bombardino', 'Vin brulé'],
  },
]

export default function Menu() {
  return (
    <section id="menu" className="section-padding bg-wood-950 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-fire-400 font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Il Nostro Menu
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Cosa Mangiare e Bere
          </h2>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
            Dai sapori autentici della montagna alla nostra pizza al forno a legna —
            tutto il gusto del Tonale in un piatto.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {menuCategories.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-fire-400/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 md:h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-950/80 to-transparent" />
                <span className="absolute top-4 left-4 text-4xl">{item.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block bg-fire-500/10 text-fire-300 text-xs font-medium px-3 py-1 rounded-full border border-fire-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price note */}
        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm font-body">
            Prezzi nella media per una località sciistica — circa 10-20€ a persona per un pasto completo
          </p>
        </div>
      </div>
    </section>
  )
}
