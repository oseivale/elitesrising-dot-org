import { ContactForm } from "@/components/Form/Form";
import { Layout } from "@/components/Layout/Layout";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { nunito_sans } from "@/fonts/fonts";


export default function Contact() {

    return (
        <Layout>
            <PageWrapper pageHeader={'Contact Us'} pageHeaderImg={'/angelo-moleele-s2WxsnxeRc4-unsplash.jpg'}>
                <h1 className={nunito_sans.className}>{`Need to reach out?`}</h1>
                <ContactForm />
            </PageWrapper>
        </Layout>
    )
}