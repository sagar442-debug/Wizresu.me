import { Link } from "@react-pdf/renderer";

const PDFLink = () => (
  <Link
    src={"https://wizresu.me"}
    style={{ fontFamily: "Times-Bold", fontWeight: 600 }}
  >
    Ecommerce Website
  </Link>
);

export default PDFLink;
