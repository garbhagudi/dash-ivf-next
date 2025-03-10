/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'What is the procedure to register for PARIPOORNA offer?',
    contents: (
      <div>
        Visit any of our centres during the registration for PARIPOORNA plan,
        duly fill the form, and submit it to the concerned person.
      </div>
    ),
  },
  {
    title: 'Who is eligible for the PARIPOORNA offer?',
    contents: (
      <div>
        This plan is specially designed for couples looking for infertility
        treatment but need financial support.
      </div>
    ),
  },
  {
    title: `Is everyone who registers entitled to receive the benefit?`,
    contents: (
      <div>
        Yes, Everyone who registers and will be eligible for the benefit.
      </div>
    ),
  },
  {
    title: `Can I continue my treatment without opting PARIPOORNA plan?`,
    contents: (
      <div>
        Yes, this will help other couples in genuine need to avail the benefit.
      </div>
    ),
  },
  {
    title: `What is the last date to apply for PARIPOORNA program?`,
    contents: (
      <div>Register for the PARIPOORNA program before 31st Dec’2023.</div>
    ),
  },
  {
    title: `I have started my treatment at another facility, am I still eligible to avail the PARIPOORNA benefit and pursue treatment at GarbhaGudi?`,
    contents: (
      <div>
        Yes, you can apply, but we recommend you not to discontinue the
        treatment as it could affect the success rate of your treatment.
      </div>
    ),
  },
  {
    title: `Can I register for PARIPOORNA through online without visiting the centre?   `,
    contents: (
      <div>
        This offer is valid only for couples who register at any of our five
        branches.
      </div>
    ),
  },
  {
    title: `If I am taking treatment at another hospital (non GarbhaGudi hospital), can I still avail the offer to continue my treatment outside?    `,
    contents: (
      <div>
        No, the PARIPOORNA benefit plan is valid only at GarbhaGudi IVF Centre.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <div className='my-16'>
      <Box
        as='section'
        variant='section.faq'
        sx={{ pt: '48px', mb: '12px' }}
        id='frequent'
      >
        <Container>
          <SectionHeading
            title='Do you have any quesiton?'
            description='GG Care is here to help. Please contact us on +91 9480 9480 05 and one of our associates will get in touch with you.'
          />
          <Box
            sx={{
              display: 'flex',
              width: ['100%', null, null, '650px', '745px'],
              flexDirection: 'column',
              mx: 'auto',
              my: -4,
            }}
          >
            <Accordion items={faqs} />
          </Box>
        </Container>
      </Box>
    </div>
  );
}
