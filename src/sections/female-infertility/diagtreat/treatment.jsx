/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: `Reproductive assistance`,
    contents: (
      <div>
        The most commonly used methods of reproductive assistance include:
        <br />
        <ul>
          <li>
            <strong>Intrauterine insemination (IUI).</strong> During IUI,
            millions of healthy sperm are placed inside the uterus around the
            time of ovulation.
          </li>
          <li>
            <strong>Assisted reproductive technology.</strong> This involves
            retrieving mature eggs, fertilizing them with sperm in a dish in a
            lab, then transferring the embryos into the uterus after
            fertilization. IVF is the most effective assisted reproductive
            technology. An IVF cycle takes several weeks and requires frequent
            blood tests and daily hormone injections.
          </li>
          <li>
            <strong>Intracytoplasmic sperm injection (ICSI)</strong> It is an
            in-vitro fertilization (IVF) procedure in which a single sperm cell
            is injected directly into the cytoplasm of an egg. This technique is
            used in order to prepare the gametes for the obtention of embryos
            that may be transferred to a maternal uterus.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: `Surgery to restore fertility`,
    contents: (
      <div>
        Several surgical procedures can correct problems or otherwise improve
        female fertility. However, surgical treatments for fertility are rare
        these days due to the success of other treatments. They include: <br />
        <ul>
          <li>
            <strong>Laparoscopic or hysteroscopic surgery.</strong>Surgery might
            involve correcting problems with the uterine anatomy, removing
            endometrial polyps and some types of fibroids that misshape the
            uterine cavity, or removing pelvic or uterine adhesions
          </li>
          <li>
            <strong>Tubal surgeries.</strong> If your fallopian tubes are
            blocked or filled with fluid, your doctor might recommend
            laparoscopic surgery to remove adhesions, dilate a tube or create a
            new tubal opening. This surgery is rare, as pregnancy rates are
            usually better with in vitro fertilization (IVF). For this surgery,
            removal of your tubes or blocking the tubes close to the uterus can
            improve your chances of pregnancy with IVF.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Medications to restore fertility',
    contents: (
      <div>
        Medications that regulate or stimulate ovulation are known as fertility
        drugs. Fertility drugs are the main treatment for women who are
        infertile due to ovulation disorders. <br />
        Fertility drugs generally work like natural hormones —
        follicle-stimulating hormone (FSH) and luteinizing hormone (LH) — to
        trigger ovulation. They&apos;re also used in women who ovulate to try to
        stimulate a better egg or an extra egg or eggs. <br />
        Fertility drugs include: <br />
        <ul>
          <li>
            <strong>Clomiphene citrate. </strong> Taken by mouth, this drug
            stimulates ovulation by causing the pituitary gland to release more
            FSH and LH, which stimulate the growth of an ovarian follicle
            containing an egg. This is generally the first line treatment for
            women younger than 39 who don&apos;t have PCOS.
          </li>
          <li>
            <strong>Clomiphene citrate. </strong> These injected treatments
            stimulate the ovary to produce multiple eggs. Gonadotropin
            medications include human menopausal gonadotropin or hMG (Menopur)
            and FSH (Gonal-F, Follistim AQ, Bravelle). <br />
            &emsp;&emsp;Another gonadotropin, human chorionic gonadotropin
            (Ovidrel, Pregnyl), is used to mature the eggs and trigger their
            release at the time of ovulation. Concerns exist that there&apos;s a
            higher risk of conceiving multiples and having a premature delivery
            with gonadotropin use.
          </li>
          <li>
            <strong>Metformin. </strong> This drug is used when insulin
            resistance is a known or suspected cause of infertility, usually in
            women with a diagnosis of PCOS. Metformin (Fortamet) helps improve
            insulin resistance, which can improve the likelihood of ovulation.
          </li>
          <li>
            <strong>Letrozole. </strong>
            Letrozole (Femara) belongs to a class of drugs known as aromatase
            inhibitors and works in a similar fashion to clomiphene. Letrozole
            is usually used for woman younger than 39 who have PCOS.
          </li>
          <li>
            <strong>Bromocriptine. </strong>
            Bromocriptine (Cycloset, Parlodel), a dopamine agonist, might be
            used when ovulation problems are caused by excess production of
            prolactin (hyperprolactinemia) by the pituitary gland.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Risks of fertility drugs',
    contents: (
      <div>
        Using fertility drugs carries some risks, such as: <br />
        <ul>
          <li>
            <strong>Pregnancy with multiples.</strong> Oral medications carry a
            fairly low risk of multiples (less than 10%) and mostly a risk of
            twins. Your chances increase up to 30% with injectable medications.
            Injectable fertility medications also carry the major risk of
            triplets or more. <br /> Generally, the more fetuses you&apos;re
            carrying, the greater the risk of premature labor, low birth weight
            and later developmental problems. Sometimes, if too many follicles
            develop, adjusting medications can lower the risk of multiples.
          </li>
          <li>
            <strong>Ovarian hyperstimulation syndrome (OHSS).</strong> Injecting
            fertility drugs to induce ovulation can cause OHSS, which is rare.
            Signs and symptoms, which include swollen and painful ovaries,
            usually go away without treatment, and include mild abdominal pain,
            bloating, nausea, vomiting and diarrhea. <br />
            It&apos;s possible to develop a more severe form of OHSS that can
            also cause rapid weight gain, enlarged painful ovaries, fluid in the
            abdomen and shortness of breath.
          </li>
          <li>
            <strong>Long-term risks of ovarian tumors.</strong> Most studies of
            women using fertility drugs suggest that there are few if any
            long-term risks. However, a few studies suggest that women taking
            fertility drugs for 12 or more months without a successful pregnancy
            might be at increased risk of borderline ovarian tumors later in
            life. <br /> Women who never have pregnancies have an increased risk
            of ovarian tumors, so it might be related to the underlying problem
            rather than the treatment. Since success rates are typically higher
            in the first few treatment cycles, reevaluating medication use every
            few months and concentrating on the treatments that have the most
            success appear to be appropriate.
          </li>
        </ul>
      </div>
    ),
  },
];
export default function Treatment() {
  return (
    <Box as='section' variant='section.faq' id='faq'>
      <Container>
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
