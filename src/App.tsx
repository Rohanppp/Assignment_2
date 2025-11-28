import { useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import './App.css'

type VariationId = 'impact' | 'story' | 'social'

const product = {
  name: 'DMD Polo Fit Formal Trousers',
  tag: 'Lycra cotton · Stretchable comfort · Office ready',
  price: '₹1,499',
  originalPrice: '₹2,199',
  discount: '32% OFF',
  description:
    'Tailored with breathable lycra cotton that adapts to every commute, pitch, and after-hours plan. Designed in collaboration with WordofMouth to showcase live shopper intent and authentic social proof.',
  shipping: ['Free 24h express delivery', '30-day fit guarantee', 'Pay on delivery available'],
  sizes: ['30', '32', '34', '36', '38', '40'],
  colors: ['Charcoal Black', 'Midnight Navy', 'Urban Sand'],
  badges: ['Top choice for sales teams', 'Hassle-free returns', 'Trusted by 1.6k+ professionals'],
}

const productImages = [
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1484519332611-516457305ff6?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
]

const liveStats = [
  { label: 'Live viewers now', value: '1,287', meta: '+87 in the past hour' },
  { label: 'Added to cart today', value: '214', meta: '82% checkout success' },
  { label: 'Avg. rating', value: '4.8/5', meta: '1,942 verified stories' },
]

const testimonials = [
  {
    quote:
      'Swapped our team uniforms with WordofMouth-backed drops. The live counter nudged indecisive teammates instantly.',
    author: 'Divya Menon',
    role: 'People Ops · SkyFi',
    avatar: 'https://i.pravatar.cc/120?img=58',
  },
  {
    quote:
      'Loved seeing authentic comments while shopping. It felt like browsing a community feed, not a static PDP.',
    author: 'Raghav Bhasin',
    role: 'Sales Lead · Northwind',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    quote:
      'We piped WordofMouth widgets across our product suite — the uplift in trust was immediate.',
    author: 'Kavya Kohli',
    role: 'Founder · Kraftly',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
]

const communityFeed = [
  {
    name: 'Rishi K',
    badge: 'Verified via WordofMouth',
    comment: 'Dropped a reel wearing these yesterday — already got 4 DMs asking for the link.',
    time: '2 mins ago',
  },
  {
    name: 'Maitri P',
    badge: 'Repeat buyer',
    comment: 'The live counter spiked while I was on the page. FOMO is very real 🙃.',
    time: '14 mins ago',
  },
  {
    name: 'Sneha L',
    badge: 'Event stylist partner',
    comment: 'Embedding the review wall inside our proposal decks doubled approvals.',
    time: '32 mins ago',
  },
]

const narrativeMoments = [
  {
    title: 'Commute-proof stretch',
    description: 'Lycra-cotton blend with micro ventilation keeps you sharp from cab to client meet.',
    metric: '96% comfort rating',
  },
  {
    title: 'Reputation layer',
    description: 'Live WordofMouth widget drops real buyer stories directly inside the page.',
    metric: '2.4x trust lift',
  },
  {
    title: 'Conversion pulse',
    description: 'Counters refresh every 30s to highlight real-time interest and social signals.',
    metric: '+18% add-to-cart',
  },
]

const mediaMentions = [
  {
    outlet: 'HyperStyle Report',
    summary: 'WordofMouth overlays made DMD the most recommended trouser on metro commutes.',
    date: 'Nov 2024',
  },
  {
    outlet: 'Retail Stack Weekly',
    summary: 'Social proof widgets unlocked a new “shop with friends” behavior mid-checkout.',
    date: 'Oct 2024',
  },
]

const layoutMeta: Record<
  VariationId,
  { label: string; description: string; render: () => ReactElement }
> = {
  impact: {
    label: 'Impact Layout',
    description: 'High-conversion hero mirroring the original PDP with live overlays.',
    render: () => (
      <ImpactLayout
        product={product}
        images={productImages}
        stats={liveStats}
        testimonials={testimonials}
        community={communityFeed}
      />
    ),
  },
  story: {
    label: 'Story Panel',
    description: 'Editorial narrative that sequences product proof with WordofMouth widgets.',
    render: () => (
      <StorytellingLayout
        product={product}
        stats={liveStats}
        moments={narrativeMoments}
        media={mediaMentions}
        testimonials={testimonials}
      />
    ),
  },
  social: {
    label: 'Social Canvas',
    description: 'Dashboard-style wall blending live counters, review grids, and comment feed.',
    render: () => (
      <SocialProofLayout
        stats={liveStats}
        testimonials={testimonials}
        community={communityFeed}
        product={product}
      />
    ),
  },
}

function App() {
  const [variation, setVariation] = useState<VariationId>('impact')
  const variationConfig = useMemo(() => layoutMeta[variation], [variation])

  return (
    <div className="page-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">WordofMouth · Concept Lab</p>
          <h1>Product story explorations for DMD x WordofMouth</h1>
          <p className="lede">
            Static recreation inspired by the provided PDP. Each variation emphasises a different
            angle of WordofMouth’s trust stack — live counters, social proof, media love, and
            community comments.
          </p>
        </div>
        <div className="ai-pill">
          <span>Built with human insight + AI assistance</span>
        </div>
      </header>

      <section className="variation-switch">
        {Object.entries(layoutMeta).map(([id, meta]) => (
          <button
            key={id}
            className={`variation-chip ${variation === id ? 'active' : ''}`}
            onClick={() => setVariation(id as VariationId)}
          >
            <span className="chip-label">{meta.label}</span>
            <span className="chip-desc">{meta.description}</span>
          </button>
        ))}
      </section>

      <section className="variation-stage">{variationConfig.render()}</section>

      <footer className="app-footer">
        <p>
          Prototype created for the WordofMouth FE Intern assignment. Assets curated, layout coded,
          and polish guided with AI tooling (ChatGPT) as requested.
        </p>
        <div className="footer-links">
          <a href="https://www.dmdclothing.com/products/dmd-clothing-lycra-cotton-stretchable-plain-formal-trousers-polo-fit-office-wear-for-mens-charcoal-black-38-charcoal-black">
            Reference PDP
          </a>
          <a href="https://designs-six-iota.vercel.app/">Prototype inspiration #1</a>
          <a href="https://face-oil.vercel.app/">Prototype inspiration #2</a>
        </div>
      </footer>
    </div>
  )
}

type ImpactProps = {
  product: typeof product
  images: string[]
  stats: typeof liveStats
  testimonials: typeof testimonials
  community: typeof communityFeed
}

const ImpactLayout = ({ product, images, stats, testimonials, community }: ImpactProps) => {
  return (
    <div className="impact-grid">
      <div className="impact-info">
        <div className="floating-label">{product.tag}</div>
        <h2>{product.name}</h2>
        <p className="supporting-copy">{product.description}</p>

        <div className="price-row">
          <span className="price-current">{product.price}</span>
          <span className="price-original">{product.originalPrice}</span>
          <span className="price-badge">{product.discount}</span>
        </div>

        <div className="badge-wrap">
          {product.badges.map((badge) => (
            <span key={badge} className="pill">
              {badge}
            </span>
          ))}
        </div>

        <div className="selector-block">
          <p>Pick your size</p>
          <div className="size-grid">
            {product.sizes.map((size) => (
              <button key={size} className="size-chip">
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="selector-block">
          <p>Available shades</p>
          <div className="color-grid">
            {product.colors.map((color) => (
              <span key={color} className="color-chip">
                <span className="color-dot" />
                {color}
              </span>
            ))}
          </div>
        </div>

        <div className="cta-stack">
          <button className="primary-cta">Add with WordofMouth social proof</button>
          <button className="secondary-cta">Preview live widget</button>
        </div>

        <ul className="shipping-list">
          {product.shipping.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>

      <div className="impact-media">
        <div className="hero-media-card">
          <img src={images[0]} alt={product.name} />
          <div className="media-overlay">
            <div>
              <p className="overlay-label">Live on page</p>
              <p className="overlay-value">{stats[0].value}</p>
            </div>
            <span>{stats[0].meta}</span>
          </div>
        </div>
        <div className="thumbnail-row">
          {images.map((src) => (
            <img key={src} src={src} alt="Product detail" />
          ))}
        </div>
        <div className="inline-widgets">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
              <span>{stat.meta}</span>
            </div>
          ))}
        </div>
        <div className="testimonial-stack">
          {testimonials.slice(0, 2).map((item) => (
            <blockquote key={item.author}>
              <p>{item.quote}</p>
              <div className="quote-footer">
                <img src={item.avatar} alt={item.author} />
                <div>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
        <div className="community-digest">
          <h3>Community heat</h3>
          {community.map((item) => (
            <article key={item.name}>
              <div className="comment-head">
                <strong>{item.name}</strong>
                <span>{item.badge}</span>
                <time>{item.time}</time>
              </div>
              <p>{item.comment}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

type StorytellingProps = {
  product: typeof product
  stats: typeof liveStats
  moments: typeof narrativeMoments
  media: typeof mediaMentions
  testimonials: typeof testimonials
}

const StorytellingLayout = ({ product, stats, moments, media, testimonials }: StorytellingProps) => (
  <div className="storytelling-grid">
    <div className="story-hero">
      <p className="floating-label">Story-first layout</p>
      <h2>Turning a plain PDP into a trust-rich editorial</h2>
      <p>{product.description}</p>
      <div className="price-row story">
        <span className="price-current">{product.price}</span>
        <span className="price-badge">{product.discount}</span>
        <span className="price-original">{product.originalPrice}</span>
      </div>
      <div className="stat-marquee">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p>{stat.label}</p>
            <strong>{stat.value}</strong>
            <span>{stat.meta}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="story-moments">
      {moments.map((moment) => (
        <article key={moment.title}>
          <p className="moment-metric">{moment.metric}</p>
          <h3>{moment.title}</h3>
          <p>{moment.description}</p>
        </article>
      ))}
    </div>

    <div className="media-column">
      <h3>Media loves the trust stack</h3>
      {media.map((item) => (
        <div key={item.outlet} className="media-card">
          <p className="media-date">{item.date}</p>
          <strong>{item.outlet}</strong>
          <p>{item.summary}</p>
        </div>
      ))}
    </div>

    <div className="story-testimonials">
      {testimonials.map((item) => (
        <blockquote key={item.author}>
          <p>“{item.quote}”</p>
          <div className="quote-footer">
            <img src={item.avatar} alt={item.author} />
            <div>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </div>
          </div>
        </blockquote>
      ))}
    </div>
  </div>
)

type SocialLayoutProps = {
  stats: typeof liveStats
  testimonials: typeof testimonials
  community: typeof communityFeed
  product: typeof product
}

const SocialProofLayout = ({ stats, testimonials, community, product }: SocialLayoutProps) => (
  <div className="social-grid">
    <div className="live-widget">
      <p className="floating-label">Live pulse</p>
      <h3>{product.name}</h3>
      <p>Every counter refreshes every 30 seconds to surface WordofMouth activity.</p>
      <div className="stat-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card bordered">
            <p>{stat.label}</p>
            <strong>{stat.value}</strong>
            <span>{stat.meta}</span>
          </div>
        ))}
      </div>
      <button className="primary-cta ghost">Sync widget to PDP</button>
    </div>

    <div className="review-wall">
      <div className="review-wall-head">
        <h3>Review wall</h3>
        <span>1,942 verified voices</span>
      </div>
      {testimonials.map((item) => (
        <article key={item.author} className="review-card">
          <div className="review-head">
            <img src={item.avatar} alt={item.author} />
            <div>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </div>
          </div>
          <p>{item.quote}</p>
        </article>
      ))}
    </div>

    <div className="community-panel">
      <h3>Comments streaming in</h3>
      <p>Drop-in widget sitting under the fold shows real shoppers talking to each other.</p>
      {community.map((item) => (
        <article key={item.name} className="community-card">
          <div className="comment-head">
            <strong>{item.name}</strong>
            <span>{item.badge}</span>
            <time>{item.time}</time>
          </div>
          <p>{item.comment}</p>
        </article>
      ))}
    </div>
  </div>
)

export default App
