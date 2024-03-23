import Calendar from "@/components/Calendar/Calendar";
import { Layout } from "@/components/Layout/Layout";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { nunito_sans, titillium_web } from "@/fonts/fonts";


export default function Events() {

    return (
        <Layout>
            <PageWrapper pageHeader={'Events'} pageHeaderImg={'/panos-sakalakis-63sI4HO30tw-unsplash.jpg'}>
                <h1 className={nunito_sans.className}>{`What's going on?`}</h1>
                <p className={titillium_web.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                <Calendar />
            </PageWrapper>
        </Layout>
    )
}