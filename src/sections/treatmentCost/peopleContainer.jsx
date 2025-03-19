const PeopleContainer = () => {
  const infertilityData = [
    {
      key: 'infertility1',
      title: 'People with infertility',
      content: ` Women with blocked or damaged fallopian tubes, 
                Men with low sperm count or other infertility issues, 
                People with unexplained infertility,
                Women with ovulation disorders`,
    },
    {
      key: 'infertility5',
      title: 'People with age-related fertility decline',
      content:
        'As people age, particularly women, fertility naturally declines, making it more difficult to conceive, and other treatments may be less effective.',
    },
    {
      key: 'infertility6',
      title: 'People with health conditions',
      content:
        'Health conditions such as endometriosis, polycystic ovary syndrome (PCOS), uterine fibroids, or other reproductive system conditions can impact fertility.',
    },
    {
      key: 'infertility7',
      title: 'People who have tried other treatments',
      content:
        'For those who have already undergone treatments like intrauterine insemination (IUI) or other methods without success, further fertility treatments may be explored.',
    },
    {
      key: 'infertility8',
      title: 'People concerned about passing on genetic disorders',
      content:
        'People who are concerned about passing on genetic diseases or disorders to their children may explore fertility treatments like genetic screening or IVF.',
    },
    {
      key: 'infertility9',
      title: 'People who have had previous pregnancy prevention surgery',
      content:
        'People who have undergone tubal ligation or other forms of pregnancy prevention surgery and later wish to conceive may require fertility treatments to reverse the procedure.',
    },
  ];

  return (
    <div className='mx-auto my-10 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
      <h3 className='mt-2 text-left font-heading text-3xl font-extrabold tracking-tight text-brandDark sm:text-4xl lg:text-center'>
        Who Should Look for IVF Treatment?
      </h3>
      <div className='mx-auto max-w-7xl px-3'>
        <div className='py-3 lg:pt-8'>
          <div className='font-content'>
            <div className='pb-4'>
              Normally pregnancy occurs from sexual intercourse in which the
              man’s sperm is ejaculated into the woman’s vagina, traveling to
              and fertilizing her egg to form an embryo that implants in the
              uterus. If a woman is healthy and below 35 the chances of getting
              pregnant during a single menstrual course are higher, that is we
              can say 25 out of 100 women will succeed per month.
            </div>
          </div>
          <div className='font-content'>
            <div className='pb-4'>
              Infertility Treatment is a comprehensive approach designed to
              assist couples struggling to conceive naturally. Infertility can
              be a complex issue, influenced by various factors that affect both
              men and women. Some common causes of infertility include hormonal
              imbalances, ovulation disorders, uterine or fallopian tube
              abnormalities, sperm abnormalities, and age-related factors.
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:m-6'>
        {infertilityData.map((data, index) => {
          const contentArray = data.content.includes(',')
            ? data.content.split(',').map((item) => item.trim())
            : [data.content];

          return (
            <div
              key={index}
              className='rounded-lg bg-gray-100 p-6 shadow-lg hover:shadow-2xl'
            >
              <div className='text-lg font-semibold text-brandPink'>
                {data.title}
              </div>
              <div className='mb-3 mt-1 h-1 w-1/4 rounded bg-brandPink'></div>
              {contentArray.length > 1 ? (
                <ol className='list-[lower-alpha] pl-5 text-base'>
                  {contentArray.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ol>
              ) : (
                <div className='text-base'>{contentArray[0]}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PeopleContainer;
