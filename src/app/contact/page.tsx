import ShowcaseInquiry from "../components/Contact/ShowcaseInquiry";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Contact | MMK Interiors",
  description:
    "Contact MMK Interiors to book interior photography, real estate shoots, and creative visual services.",
  openGraph: {
    title: "Contact MMK Interiors",
    description:
      "Reach out to us to book your next interior or real estate photography project.",
    url: "https://yourdomain.com/contact",
    images: [{ url: "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764655637/ygzr438mkjyamx3vmpd9.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MMK Interiors",
    images: ["https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764655637/ygzr438mkjyamx3vmpd9.png"],
  },
};


export default function Contact() {
    return (
        <>
            <Navbar />
            <ShowcaseInquiry />
        </>
    );
}