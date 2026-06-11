const nav = {
  treatments: [
    { name: 'Hysteroscopy', href: 'https://www.garbhagudi.com/treatments/hysteroscopy-treatment-in-bangalore' },
    { name: 'ICSI Treatment', href: 'https://www.garbhagudi.com/treatments/icsi-treatment-in-bangalore' },
    { name: 'IUI Treatment', href: 'https://www.garbhagudi.com/treatments/iui-treatment-in-bangalore' },
    { name: 'IVF Treatment', href: 'https://www.garbhagudi.com/treatments/ivf-treatment-in-bangalore' },
    { name: 'Laparoscopy', href: 'https://www.garbhagudi.com/treatments/laparoscopy-treatment-in-bangalore' },
    { name: 'FET', href: 'https://www.garbhagudi.com/treatments/frozen-embryo-transfer' },
  ],
  locations: [
    { name: 'Hanumanthanagar', href: 'https://www.garbhagudi.com/locations/hanumanthanagar' },
    { name: 'Electronic City', href: 'https://www.garbhagudi.com/locations/electronic-city' },
    { name: 'Kalyan Nagar', href: 'https://www.garbhagudi.com/locations/kalyan-nagar' },
    { name: 'Marthahalli', href: 'https://www.garbhagudi.com/locations/marathahalli' },
    { name: 'Nagarbhavi', href: 'https://www.garbhagudi.com/locations/nagarabhavi' },
    { name: 'New BEL Road', href: 'https://www.garbhagudi.com/locations/new-bel-road' },
    { name: 'Jayanagar', href: 'https://www.garbhagudi.com/locations/jayanagar' },
    { name: 'Yelahanka', href: 'https://www.garbhagudi.com/locations/yelahanka' },
    { name: 'Davanagere', href: 'https://www.garbhagudi.com/locations/davanagere' },
    { name: 'Hosur', href: 'https://www.garbhagudi.com/locations/hosur' },
  ],
  resources: [
    { name: 'Fertility Experts', href: 'https://www.garbhagudi.com/fertility-experts' },
    { name: 'Fertility Centre', href: 'https://www.garbhagudi.com/fertility-center' },
    { name: 'Blogs', href: 'https://www.garbhagudi.com/blogs/page/1' },
    { name: 'FAQ', href: 'https://www.garbhagudi.com/resources/faq' },
  ],
  contact: [
    { name: 'Paripoorna', href: 'https://www.garbhagudi.com/features/paripoorna' },
    { name: 'Careers', href: 'https://www.garbhagudi.com/careers' },
    { name: 'GG Care', href: 'https://www.garbhagudi.com/gg-care' },
  ],
};

export default function ThankYouFooter() {
  return (
    <footer className='relative z-10 bg-[#1e1210]'>
      <div className='bg-white border-t border-[#c0452a]/[0.08] px-6 pt-10 pb-8 md:px-12 md:pt-16 md:pb-12'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10 max-w-[1140px] mx-auto'>
          {[
            { label: 'Treatments', items: nav.treatments },
            { label: 'Locations',  items: nav.locations  },
            { label: 'Resources',  items: nav.resources  },
            { label: 'Contact',    items: nav.contact    },
          ].map(({ label, items }) => (
            <div key={label}>
              <h3 className='text-[11px] font-bold tracking-[0.15em] uppercase text-[#c0452a] mb-4'>
                {label}
              </h3>
              <ul className='list-none m-0 p-0 space-y-2.5'>
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-[13px] text-[#7a5c52] no-underline transition-colors duration-200 hover:text-[#1e1210]'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className='text-white/50 text-center px-6 py-7 text-[13px] m-0'>
        © 2026 GarbhaGudi Centre. All rights reserved. &nbsp;|&nbsp;{' '}
        <a
          href='https://www.garbhagudi.com/'
          className='text-white/70 no-underline hover:text-white transition-colors duration-200'
        >
          Back to Website
        </a>
      </p>
    </footer>
  );
}
