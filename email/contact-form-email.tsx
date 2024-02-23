import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    name: string,
    email: string,
    message: string
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({name, email, message}) => {
    return (
        <Html>
            <Head>
            </Head>
            <Body>
                <Container>
                    <Heading>Neue Kontaktanfrage</Heading>
                    <Hr />
                    <Section>
                        <Text><strong>Name:</strong> {name}</Text>
                        <Text><strong>E-Mail:</strong> {email}</Text>
                        <Text><strong>Nachricht:</strong></Text>
                        <Text>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

export default ContactFormEmail;
