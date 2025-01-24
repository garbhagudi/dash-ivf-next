import React from 'react';
import Image from 'next/image';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import Popup from 'components/Popup';
import DetailsPopup from './detailsPopup';

const CATEGORY_TITLES = {
  fertilitySpecialist: 'Fertility Specialists',
  embryologist: 'Embryologists',
  consultants: 'Consultants',
};

const DoctorsList = () => {
  const doctors = [
    {
      category: 'fertilitySpecialist',
      designation: 'Medical Director - GarbhaGudi',
      image: {
        url: 'https://media.graphassets.com/tEF3ZeEhSoeekeSEh47v',
      },
      imageAlt: 'Best IVF Specialist in Bangalore - Dr Asha S Vijay',
      medicalRegNo: '33884',
      name: 'Dr Asha S Vijay',
      order: 0,
      qualification: 'MBBS, DGO-DNB',
      content: `Dr. Asha S Vijay MBBS, DGO-DNB is a doyen in the field of infertility Treatment.  She has well over two decades of experience in the fields of obstetrics, gynecology, and infertility. She is a well-known name in infertility – both in treating patients and also in infertility education. Many consider her a medical genius with an overarching vision to eradicate infertility.
    Dr Asha has been instrumental in creating happy endings in the lives of more than 10,000+ couples, by ensuring they have a child of their own. With her immense knowledge, expertise, skills, and cutting-edge medical technology, she has produced extraordinary success rates in the field of infertility. She is highly dedicated to her vision and leaves no stone unturned to ensure that the couple can take home a healthy baby and enjoy parenthood.`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Senior Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/f3PATdnoQ7ieg28F3gzr',
      },
      imageAlt: null,
      medicalRegNo: '108376',
      name: 'Dr. S R Raajam Murali',
      order: 2,
      qualification: 'MBBS MD FRM',
      content: `Dr. S R Raajam Murali MBBS, MD FIRM, is a distinguished Senior Fertility Consultant with a strong academic background and extensive practical knowledge in reproductive medicine.  Her expertise extends to various areas of assisted reproductive technology (ART), including in vitro maturation (IVM) and ovarian stimulation. Her passion for improving fertility outcomes and her profound knowledge and dedication make her one of the best Fertility Specialists in Bangalore.`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/kBAaY7UgQqefqgAjAvsk',
      },
      imageAlt: 'IVF Specialist in Bangalore - Dr Priyanka Rani',
      medicalRegNo: '75013',
      name: 'Dr Priyanka Rani',
      order: 3,
      qualification: 'MBBS, DNB, FRM',
      content: `Dr Priyanka Rani MBBS, DNB, FRM is a fertility specialist with years of experience in gynaecology and obstetrics. She worked as a Senior Resident at St. John’s Medical College and holds a Rajiv Gandhi University of Health Sciences fellowship. She is well-versed in ART procedures like IVF, IUI, etc. Dr Priyanka is eager to commit herself to her patients, providing them with much assurance, which puts them at ease during their treatment. Her skills as a fertility specialist made her a valued member of the team at GarbhaGudi IVF Center.`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/7ghdxcJPTZIQvtdFRVWn',
      },
      imageAlt: 'IVF Doctor in Bangalore - Dr Anitha Manoj',
      medicalRegNo: '69779',
      name: 'Dr Anitha Manoj',
      order: 4,
      qualification: 'MBBS, MS (OBG), FMAS, FRM',
      content: `Dr. Anita Manoj MBBS, MS (OBG), FMAS, FRM has over a decade of experience as a gynaecologist. She specializes in infertility and holds a fellowship in reproductive medicine from Rajiv Gandhi University of Health Sciences. She regularly keeps herself updated with current medical knowledge & practices. Dr Anita’s prime motto is to ensure safe medical care for patients. She is one of the best Fertility Specialists in Bangalore, and practices at GarbhaGudi IVF Centre, Bangalore. She is a member of FOGSI and the Indian Medical Association (IMA).`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/3Shs19wcRZWACdwng438',
      },
      imageAlt: 'Best IVF Doctor in Bangalore - Dr Aparna N',
      medicalRegNo: '97374',
      name: 'Dr Aparna N',
      order: 5,
      qualification: 'MBBS, DNB, M.Ch Reproductive Medicine and Surgery',
      content: `Dr Aparna N MBBS, DNB, M.Ch Reproductive Medicine and Surgery is a highly qualified and experienced senior Reproductive Medicine Specialist, currently practicing at GarbhaGudi IVF Centre. She has vast expertise in various areas related to infertility, including Recurrent Pregnancy Loss, Repeated IVF Failure, Genetics, Ultrasound in Infertility, Fertility Laparoscopy, Hysteroscopy, and Fertility preservation for cancer patients. She is known for her knowledge and patience, ensuring patient safety and ethical practice.`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/fA2XgIz7QGwFJ2vomjQM',
      },
      imageAlt: 'Dr. Vandana Ramanathan',
      medicalRegNo: 'MAH20070001132KTK',
      name: 'Dr. Vandana Ramanathan',
      order: 6,
      qualification: 'MBBS, DNB(OBG) FRM',
      content: `Dr. Vandana Ramanathan MBBS, DNB(OBG) FRM is a dedicated Fertility Specialist committed to helping couples realize their dream of parenthood. With extensive experience spanning various prestigious institutions, Dr. Vandana has honed her skills in reproductive medicine. Her expertise includes conducting all ART procedures, follicular monitoring, transvaginal ultrasound, ultrasound-related interventions, and endoscopic procedures related to infertility.`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/PxCiYMsmTyeNv3OrzQjc',
      },
      imageAlt: 'dr-varsha-patil',
      medicalRegNo: '77629',
      name: 'Dr. Varsha Patil',
      order: 7,
      qualification: 'MBBS, DGO, DNB(OBG), FRM',
      content: `Dr Varsha Patil MBBS, DGO, DNB(OBG), FRM is a highly skilled Fertility Specialist, dedicated to providing the best treatment for her patients. She is known for her patience, knowledge, and hard work. She believes in a scientific approach to fertility treatment in an ethical manner. She is well-versed in various ART procedures like IVF, IUI, etc., and provides counseling to her patients with dedication. Her goal is to ensure that every patient receives personalized care and treatment that is tailored to their individual needs. Dr Varsha Patil is a skilled professional committed to helping her patients achieve their dream of having a child.`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/aoSy8u3ORwaJng9CVqGY',
      },
      imageAlt: 'IVF Specialist in Bangalore - Dr Nikitha Murthy',
      medicalRegNo: '110260',
      name: 'Dr Nikitha Murthy B.S',
      order: 8,
      qualification: 'MBBS, MS-OBG, DNB, FRM',
      content: `Dr. Nikitha Murthy MBBS, MS-OBG, DNB, FRM is an experienced Infertility Specialist with a passion for helping couples achieve their dream of having a family. She continues to provide personalized care to her patients. Her areas of expertise include assisted reproductive technologies, preconception counselling, and management of complex fertility issues. With her vast knowledge and experience, Dr Nikitha Murthy is dedicated to helping her patients navigate the complex world of infertility and achieve their dream of having a family.`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/9uwozE6LSTe53RQfEb9t',
      },
      imageAlt: 'Best IVF Doctor in Bangalore - Dr Shubha L',
      medicalRegNo: '95820',
      name: 'Dr Shubha L',
      order: 9,
      qualification: 'MBBS, MS(OBG), DNB, FRM',
      content: `Dr. Shubha L, MBBS, MS-OBG, DNB, FRM is a fertility specialist with 5 years of experience in obstetrics and gynecology. She is a skilled professional, is completely passionate about her job, and aims to provide the best treatment for her patients. She is well-versed in ART procedures like IVF, IUI, etc. Dr. Shubha L is known for the comfort and confidence she elicits in her patients, and she believes in performing fertility treatments with a scientific approach & in an ethical manner. She also offers to counsel for infertility treatment with dedication toward her patients. Her skills as a fertility specialist made her a valued member of the team at GarbhaGudi IVF Center. `,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/kKgEEz2Q4GLNK4wMPIOW',
      },
      imageAlt: 'IVF Specialist in Bangalore - Dr Deepthi Venkatesh',
      medicalRegNo: '104924',
      name: 'Dr Deepthi Venkatesh',
      order: 10,
      qualification: 'MBBS, MS - FRM',
      content: `Dr. Deepthi Venkatesh MBBS, MS - FRM is a distinguished fertility specialist with over seven years of experience in the field of obstetrics and gynecology. With a passion for helping couples achieve their dream of parenthood, Dr. Deepthi is an expert in Intra-Uterine Insemination (IUI), in vitro fertilization (IVF), and other such ART techniques. Her personalized approach and exceptional success rates have earned high praise from her patients, who appreciate her compassionate nature and approachability. Driven by her commitment to providing the very best care, Dr. Deepthi continuously updates her knowledge and skills. `,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/4UJ5nbpQYCRSGSuKrWJq',
      },
      imageAlt: null,
      medicalRegNo: '110858',
      name: 'Dr Pavithra',
      order: 11,
      qualification: 'MBBS, MS OBG , FRM',
      content: `Dr. Pavithra MBBS, MS-OBG, FRM is an accomplished Infertility Specialist with a passion for helping couples overcome reproductive challenges. She has two years of experience in the field of infertility, during which she has worked tirelessly to support her patients in their journey toward parenthood. She is well-versed in the latest advancements in Assisted Reproductive Technology (ART), including procedures like IVF and IUI. She ensures that each patient receives personalized care tailored to their specific needs and believes in providing ethical and evidence-based treatments while maintaining open and transparent communication. She is also experienced in providing counseling to couples, offering them the emotional support they need during their fertility journey.`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/FZxTAyTHWVjXmjNdaLvg',
      },
      imageAlt: null,
      medicalRegNo: '100594',
      name: 'Dr Shweta Ashok Harnal',
      order: 12,
      qualification: 'MBBS, MS, FRM',
      content: `Dr. Shweta Ashok Harnal MBBS, MS, FRM is a highly skilled fertility specialist with a background in obstetrics and gynecology. With five years of practical experience, she is dedicated to helping couples navigate the complexities of infertility. Specializing in assisted reproductive technologies (ART), including Intra-Uterine Insemination (IUI) and in in In-Vitro Fertilization (IVF), as well as possessing expertise in advanced laparoscopy and Hysterolaparoscopy. She provides personalized care tailored to each patient's needs. Her compassionate approach and commitment to patient well-being have earned her praise from those under her care. She remains at the forefront of her field, continuously updating her knowledge and skills to provide the highest level of expertise to her patients.`,
    },
    {
      category: 'fertilitySpecialist',
      designation: 'Fertility Specialist',
      image: {
        url: 'https://media.graphassets.com/ocaZ9siTu6Uy9UCVo1SA',
      },
      imageAlt: 'dr-sahana-k',
      medicalRegNo: '110364',
      name: 'Dr. Sahana K',
      order: 13,
      qualification: 'MBBS, MS (OBG), DNB(OBG), FRM',
      content: `Dr. Sahana K, MBBS, MS (OBG), DNB (OBG), FRM brings a wealth of experience and deep expertise in obstetrics, gynecology, and reproductive medicine. Her compassionate approach and commitment to helping couples achieve their dreams of parenthood make her a valuable asset to our organization. Her diverse academic and professional background equips her with the knowledge and skills to address even the most complex fertility challenges. Her patient-centric approach and dedication to reproductive health make her a valued member of the GarbhaGudi IVF Centre team. Her goal is to provide not just medical solutions but emotional support, ensuring a seamless and comfortable experience for her patients.`,
    },
    {
      category: 'embryologist',
      designation: 'Director of Embryology',
      image: {
        url: 'https://media.graphassets.com/3S1OSi7IQ6UT4qnwBj2M',
      },
      imageAlt: 'Embryologist in Bangalore - Fyzullah Syed',
      medicalRegNo: null,
      name: 'Fyzullah Syed',
      order: 14,
      qualification: 'MSc Embryology, MSc Microbiology, BSc MLT',
      content: `Fyzulla Syed M.Sc Embryology, M.Sc Microbiology, B.Sc MLT is a visionary leader and trailblazer in the field of ART. As the Director of Embryology at GarbhaGudi IVF Centre, he has redefined the standards of fertility care, combining cutting-edge science with an unwavering commitment to patient success. With a remarkable academic background and over a decade of hands-on experience, his expertise is unparalleled. Under his leadership, GarbhaGudi IVF Centre has become a beacon of hope for couples seeking to realize their dream of parenthood. His relentless pursuit of excellence has not only improved the lives of countless families but has also set new benchmarks in fertility treatment outcomes across the globe.`,
    },
    {
      category: 'embryologist',
      designation: 'Senior Embryologist & Lab Manager',
      image: {
        url: 'https://media.graphassets.com/j2n2u6wTtqxdj2HEMm3M',
      },
      imageAlt: 'Embryologist in Bangalore - Vidyalakshmi A',
      medicalRegNo: null,
      name: 'Vidyalakshmi A',
      order: 15,
      qualification:
        'P.G diploma (Clinical Embryology), Fellowship in Embryology',
      content: `Vidyalakshmi A, PG Diploma (Clinical Embryology), Fellowship in Embryology is a Senior Embryologist and Lab Manager at GarbhaGudi IVF Centre. With a strong educational background in Biomedical Sciences and Clinical Embryology, she is a highly qualified and experienced professional in her field. Vidyalakshmi has been associated with the IVF industry for the past 9 years, during which she has contributed significantly to the field of embryology. `,
    },
    {
      category: 'embryologist',
      designation: 'Senior Embryologist',
      image: {
        url: 'https://media.graphassets.com/MftVQJB1Sha4CjMWBfHK',
      },
      imageAlt: 'Aishwarya D S',
      medicalRegNo: null,
      name: 'Aishwarya D S',
      order: 18,
      qualification: 'M.Sc., PGDCE',
      content: `Aishwarya D S, M.Sc, PGDCE is a distinguished embryologist specializing in Assisted Reproductive Technology (ART) with a wealth of experience and commitment to excellence in the field of clinical embryology. She has played a pivotal role in numerous successful fertility treatments, helping countless families achieve their dreams of parenthood. Aishwarya's areas of expertise include advanced IVF and ICSI techniques, embryo culture and cryopreservation, quality control and laboratory management, and patient counseling and personalized treatment plans. Her approach combines scientific rigor with compassionate patient care, ensuring that each patient receives individualized attention and support throughout their fertility treatment journey.`,
    },
    {
      category: 'consultants',
      designation: 'Psychiatric Consultant',
      image: {
        url: 'https://media.graphassets.com/gtwipdRnT32rrWeY8mdQ',
      },
      imageAlt: 'dr-varsha-vijay',
      medicalRegNo: null,
      name: 'Dr. Varsha Vijay',
      order: 24,
      qualification: 'MBBS, M.D. (Psychiatry)',
      content: `Dr. Varsha Vijay, MBBS, MD (Psychiatry), is a dedicated and experienced Psychiatrist Consultant at GarbhaGudi IVF Centre. With extensive training in the field of psychiatry and a passion for mental health, she brings invaluable expertise to the care of our patients. She plays a pivotal role in addressing the psychological well-being of individuals undergoing fertility treatments, ensuring holistic care that integrates mental health with reproductive health. Mental health plays a crucial role in reproductive health. The journey of fertility treatments can be emotionally challenging, and addressing psychological concerns is essential for better outcomes. Her expertise ensures that our patients receive compassionate and comprehensive care, improving their overall experience and well-being during fertility treatments.`,
    },
  ];

  const groupedDoctors = doctors.reduce((acc, doctor) => {
    const categoryKey = doctor.category || 'Others';
    if (!acc[categoryKey]) {
      acc[categoryKey] = [];
    }
    acc[categoryKey].push(doctor);
    return acc;
  }, {});
  const categories = Object.keys(groupedDoctors);
  return (
    <div>
      <div
        className='bg-purple-100/70 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'
        id='ourTeam'
      >
        <div className='mx-auto max-w-[1366px] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-12'>
          <div className='space-y-12'>
            <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-7xl'>
              <h2 className='font-heading text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200'>
                Best IVF Specialists in Bangalore
              </h2>
              <p className='text-md text-gray-800 dark:text-gray-200'>
                GarbhaGudi is a leading chain of infertility treatment hospitals
                founded by Dr. Asha S Vijay, a renowned gynecologist and
                fertility specialist. For over a decade, our team of Experienced
                Fertility Specialists has provided state-of-the-art treatments
                like IUI, IVF, ICSI, and more to thousands of couples. At
                GarbhaGudi, we prioritize personalized care and work closely
                with you to achieve your dream of parenthood. Our centres are
                fully equipped with state-of-the-art infrastructure and advanced
                technology to address the growing problem of infertility.
              </p>
            </div>
            {/* Tabs for Categories */}
            <div className='lg:block'>
              <TabGroup>
                <TabList className='bg-gg-400 mt-12 flex space-x-2 rounded-xl p-2'>
                  {categories.map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        `w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:outline-none lg:text-base ${
                          selected
                            ? 'bg-brandPurpleDark text-white shadow'
                            : 'hover:bg-gg-500/[0.9] text-white'
                        }`
                      }
                    >
                      {CATEGORY_TITLES[category] || category}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels className='mt-8'>
                  {categories.map((category) => (
                    <TabPanel key={category}>
                      <div className='grid grid-cols-2 items-start gap-8 lg:grid-cols-4'>
                        {groupedDoctors[category].map((doctor) => (
                          <div
                            key={doctor.id}
                            className='transition-all duration-300 hover:scale-105'
                          >
                            <div className='space-y-4'>
                              <div className='relative mx-auto h-32 w-32 lg:h-44 lg:w-44'>
                                <div className='animate-rotate absolute h-full w-full rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 bg-[length:400%] dark:bg-gray-400'></div>
                                <Image
                                  className='shadow-champaigne h-32 w-32 rounded-full bg-transparent drop-shadow-2xl lg:h-44 lg:w-44'
                                  src={doctor.image.url}
                                  alt={doctor.imageAlt || doctor.name}
                                  width={400}
                                  height={400}
                                  loading='lazy'
                                />
                              </div>
                              <div className='space-y-0.5'>
                                <h3 className='font-heading text-lg font-bold text-gray-800 dark:text-gray-200'>
                                  {doctor.name}
                                </h3>
                                <p className='text-sm text-purple-900 dark:text-purple-200'>
                                  {doctor.qualification}
                                </p>
                                <p className='text-gg-500 dark:text-gg-300 text-sm'>
                                  {doctor.designation}
                                </p>
                                <Popup
                                  title={'Book now'}
                                  btnClassName='rounded-md bg-brandPink text-sm px-4 py-2 font-semibold text-white focus:outline-none'
                                />
                              </div>
                              <DetailsPopup
                                title={'View profile'}
                                btnClassName={'underline text-purple-900'}
                                data={doctor}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
